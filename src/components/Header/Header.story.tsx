import { HeaderResponsive as Header} from './Header'

export default {
  title: 'components/HeaderResponsive'
}
const LINKS = [
  {link: '/', label: 'Home'},
  {link: '/about', label: 'About'},
  {link: '/projects', label: 'Projects'},
  {link: '/blogs', label: 'Blogs'},
]

export const HeaderResponsive = () => <Header links={LINKS}/>
