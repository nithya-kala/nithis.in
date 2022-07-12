import { NotFound } from '../components/404/404'
import { Footer } from '../components/Footer/Footer'
import { HeaderResponsive } from '../components/Header/Header'

const LINKS = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/projects', label: 'Projects' },
  { link: '/blogs', label: 'Blogs' },
]

export default function Custom404() {
  return (
    <>
      <HeaderResponsive links={LINKS} />
      <NotFound />
      <Footer />
    </>
  )
}
