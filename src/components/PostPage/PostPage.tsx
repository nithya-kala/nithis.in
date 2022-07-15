import { Avatar, Container, Group } from '@mantine/core'
import React from 'react'
import { PostProps } from '../../lib/types'
import { NotionText } from '../BlogListing/NotionText'
import { Page } from '../Page/Page'
import { SectionHead } from '../SectionHead/SectionHead'

export interface Props {
  post: PostProps
  author: {
    name: string
    image: string
  }
  date: string
  children: any
}

export const PostPage: React.FC<Props> = ({ post, author, date, children }) => {
  return (
    <Page
      seo={{
        title: post.properties.Page.title[0].plain_text,
        description: post.properties.Description.text[0].text,
        author: author.name,
      }}
    >
      <Container mb={80}>
        <SectionHead
          centered
          title={<NotionText text={post.properties.Page.title} />}
          description={
            <Group sx={{display: 'flex', justifyContent: 'center'}}>
              <Avatar src={author.image} size={24} radius="xl" mr="xs" />
              <div>{author.name}</div>
              <div>{'·'}</div>
              <time dateTime={post.properties.Date.date.start}>{date}</time>
            </Group>
          }
        />
        <article>
          <section className="post text-base sm:text-lg leading-8">{children}</section>
        </article>
      </Container>
    </Page>
  )
}
