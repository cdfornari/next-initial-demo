import { CustomLink } from "./CustomLink";
import styles from './Navbar.module.css';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <nav className={styles['navbar-container']}>
        {
          menuItems.map(({text,href}) => <CustomLink text={text} href={href} key={href} />)
        }
    </nav>
  )
}