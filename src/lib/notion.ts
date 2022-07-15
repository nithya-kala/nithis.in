import { Client } from '@notionhq/client'
import { PostProps } from '~/src/lib/types'

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
  notionVersion: '2021-05-11',
})

/**
 * Get Notion database
 * @param databaseId ID of the collection to query
 * @returns A list of published posts from the collection
 */
export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  })

  const results = response.results as unknown as PostProps[]
  // console.log(results[0].properties)

  return results
    .filter(
      (r) =>
        r.properties.Date.date != null &&
        r.properties.Description.rich_text.length > 0 &&
        r.properties.Slug.rich_text.length > 0 &&
        r.properties.Page.title.length > 0
    )
    .sort(
      (a, b) =>
        new Date(b.properties.Date.date.start).valueOf() -
        new Date(a.properties.Date.date.start).valueOf()
    )
}

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId })

  return response as unknown as PostProps
}

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  })

  return response.results
}

export const mapDatabaseToPaths = (database: PostProps[]) => {
  return database.map((item) => {
    return { params: { slug: item.properties.Slug.rich_text[0].plain_text } }
  })
}

export const mapDatabaseItemToPageProps = async (id: string) => {
  const page = await getPage(id)
  const blocks = await getBlocks(id) as any[]

  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        }
      })
  )

  const blocksWithChildren = blocks.map((block) => {
    if (block.has_children && !block[block.type].children) {
      block[block.type]['children'] = childBlocks.find(
        (childBlock) => (childBlock.id = block.id)
      )?.children
    }

    return block
  })

  return { page, blocks: blocksWithChildren }
}

export const getMediaProperties = (value: any) => {
  const source = value.type === 'external' ? value.external.url : value.file.url
  const caption = value.caption && value.caption.length > 0 ? value.caption[0].plain_text : ''

  return { source, caption }
}

export const getBlogLink = (slug: string) => {
  return `/p/${slug}`
}
