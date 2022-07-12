import { Container } from '@mantine/core'
import { ArticleCard } from '../components/ArticleCard/ArticleCard'
import { Footer } from '../components/Footer/Footer'
import { HeaderResponsive } from '../components/Header/Header'

const props = {
  image: 'https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=600&h=600&fit=crop&fm=png',
  link: 'https://mantine.dev/',
  title: 'Resident Evil Village review',
  rating: 'outstanding',
  description:
    'Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.',
  author: {
    name: 'Bill Wormeater',
    image: 'https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=600&h=600&fit=crop&fm=png',
  },
}

const LINKS = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/projects', label: 'Projects' },
  { link: '/blogs', label: 'Blogs' },
]

export default function HomePage() {
  return (
    <>
      <HeaderResponsive links={LINKS} />
      <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', padding: '40px 0' }}>
        <div style={{ width: 300, padding: 20 }}>
          <ArticleCard {...props} />
        </div>
        <div style={{ width: 300, padding: 20 }}>
          <ArticleCard {...props} />
        </div>
        <div style={{ width: 300, padding: 20 }}>
          <ArticleCard {...props} />
        </div>
        <div style={{ width: 300, padding: 20 }}>
          <ArticleCard {...props} />
        </div>
        <div style={{ width: 300, padding: 20 }}>
          <ArticleCard {...props} />
        </div>
      </Container>
      <Footer />
    </>
  )
}
