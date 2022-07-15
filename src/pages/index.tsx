import { Box, Button, Container, Group } from '@mantine/core'
import { GetStaticProps } from 'next'
import { BlogPreview } from '../components/BlogListing/BlogPreview'
import { HeroBlock } from '../components/HeroBlock/HeroBlock'
import { Page } from '../components/Page/Page'
import { SectionHead } from '../components/SectionHead/SectionHead'
import { getDatabase } from '../lib/notion'

export default function HomePage({ posts }: { posts: any[] }) {
  return (
    <Page>
      <HeroBlock />
      <Box style={{ background: 'linear-gradient(#8cbff31a, transparent)' }}>
        <SectionHead
          supTitle="Articles"
          title="I love to share my knowledge through writing."
          description="Check out a few of my most recent publishings."
        />
        <BlogPreview posts={posts} />
        <Container mt={0} mb={30}>
          <Button
            variant='default'
            component="a"
            href="/blogs"
            radius="xl"
            size="md"
          >
            See all articles
          </Button>
        </Container>
      </Box>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.POSTS_TABLE_ID == null) {
    return { props: { posts: [] } }
  }

  const posts = await getDatabase(process.env.POSTS_TABLE_ID)

  return {
    props: { posts: posts.slice(0, 3) },
    revalidate: 900, // 15 minutes
  }
}
