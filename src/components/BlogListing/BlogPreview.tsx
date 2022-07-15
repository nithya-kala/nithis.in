import { Container, createStyles } from '@mantine/core'
import { ArticleCard, ArticleCardProps } from '../ArticleCard/ArticleCard'

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

interface BlogPreviewProps {
  articles: ArticleCardProps[]
}

export function BlogPreview({ articles }: BlogPreviewProps) {
  const { classes } = useStyles()

  const items = []

  for (const props of articles) {
    items.push(
      <div className={classes.blogItem}>
        <ArticleCard {...props} />
      </div>
    )
  }

  return <Container className={classes.root}>{items}</Container>
}
