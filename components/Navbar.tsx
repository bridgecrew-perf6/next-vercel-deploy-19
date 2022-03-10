import { ActiveLink } from "./ActiveLink"
import styles from './Navbar.module.css'

const menuItems = [
  {text: 'Home', href: '/'},
  {text: 'Pricing', href: '/pricing'},
  {text: 'About', href: '/about'},
  {text: 'Contact', href: '/contact'},
]

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map(({text, href}) => <ActiveLink key={href} text={text} href={href}/>)}
    </nav>
  )
}
