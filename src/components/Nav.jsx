import { NavLink } from 'react-router-dom'
import styles from '../sass/Nav.module.scss'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <NavLink className={styles.navListLink} to='/'>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink className={styles.navListLink} to='/criptomonedas'>
                        Criptomonedas
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
