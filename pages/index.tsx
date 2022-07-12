import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderResponsive } from '../components/Header/Header';
import { ProfileImg } from '../components/ProfileImg/ProfileImg';

const LINKS = [
  {link: '/', label: 'Home'},
  {link: '/about', label: 'About'},
  {link: '/projects', label: 'Projects'},
  {link: '/blogs', label: 'Blogs'},
]

export default function HomePage() {
  return (
    <>
      <HeaderResponsive links={LINKS} />
      <div style={{width: 150, margin: 'auto'}}>
        <ProfileImg size={150} rounded backgroundColor='rgba(155, 155, 155, .1)'/>
      </div>

      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
