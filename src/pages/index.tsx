import { Box } from '@mantine/core'
import { BlogPreview } from '../components/BlogListing/BlogPreview'
import { HeroBlock } from '../components/HeroBlock/HeroBlock'
import { SectionHead } from '../components/SectionHead/SectionHead'

const props = {
  image: 'https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=600&h=600&fit=crop&fm=png',
  link: 'https://mantine.dev/',
  title: 'Resident Evil Village review',
  rating: 'outstanding',
  description:
    "Resident Evil Village is a direct sequel to 2017's Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
  author: {
    name: 'Bill Wormeater',
    image: 'https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=600&h=600&fit=crop&fm=png',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroBlock />
      <Box style={{ background: 'linear-gradient(#8cbff31a, transparent)' }}>
        <SectionHead
          supTitle="Articles"
          title="I love to share my knowledge through writing."
          description="Check out a few of my most recent publishings."
        />
        <BlogPreview articles={[props, props, props]} />
      </Box>
    </>
  )
}
