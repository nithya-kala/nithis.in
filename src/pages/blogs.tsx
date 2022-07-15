import { GetStaticProps } from 'next'
import { BlogPreview } from '../components/BlogListing/BlogPreview'
import { Page } from '../components/Page/Page'
import { SectionHead } from '../components/SectionHead/SectionHead'
import { getDatabase } from '../lib/notion'
import { PostProps } from '../lib/types'

export default function BlogsPage({ posts }: { posts: PostProps[] }) {
  return (
    <Page>
      <SectionHead centered supTitle="My Blog" title="Learnings and experiments" />
      <BlogPreview posts={posts} />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.POSTS_TABLE_ID == null) {
    return { props: { posts: [] } }
  }

  const posts = await getDatabase(process.env.POSTS_TABLE_ID)

  return {
    props: { posts },
    revalidate: 900, // 15 minutes
  }
}
