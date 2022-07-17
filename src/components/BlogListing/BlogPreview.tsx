import { Container, createStyles } from '@mantine/core'
import dayjs from 'dayjs'
import { PostProps } from '~/src/lib/types'
import { ArticleCard, ArticleCardProps } from '../ArticleCard/ArticleCard'
import { NotionText } from './NotionText'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    padding: '40px 0',
  },

  blogItem: {
    width: 320,
    padding: 10,
  },
}))


const DUMMY_IMG = 'https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=600&h=600&fit=crop&fm=png'
const AUTHOR_IMG = '/nithya-img.png'

function postToArticles(posts: PostProps[]) {
  const articles: ArticleCardProps[] = []

  for (const post of posts) {
    let image = DUMMY_IMG

    if ( post.cover) {
      if (post.cover.file && post.cover.file.url) image = post.cover.file.url
      if (post.cover.external && post.cover.external.url) image = post.cover.external.url
    }

    const when = dayjs(post.properties.Date.date.start)
    const date = when.isBefore(30, 'days') ? when.format('YYYY-MM-DD') : when.fromNow()

    articles.push({
      image,
      link: `/blogs/${post.properties.Slug.rich_text[0].plain_text}`,
      title: <NotionText text={post.properties.Page.title} />,
      description: <NotionText text={post.properties.Description.rich_text} />,
      author: {
        name: post.properties.Author.rich_text[0].plain_text,
        image: AUTHOR_IMG,
      },
      date: date
    })
  }

  return articles
}

interface BlogPreviewProps {
  posts: PostProps[]
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  const { classes } = useStyles()

  const articles = postToArticles(posts)
  const items = []

  for (const props of articles) {
    items.push(
      <div className={classes.blogItem} key={props.link}>
        <ArticleCard {...props} />
      </div>
    )
  }

  return <Container className={classes.root}>{items}</Container>
}

