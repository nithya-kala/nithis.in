import { Footer } from '../components/Footer/Footer'
import { HeaderResponsive } from '../components/Header/Header'
import { HeroBlock } from '../components/HeroBlock/HeroBlock'

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
      <HeroBlock />
      <Footer />
    </>
  )
}
