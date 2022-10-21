import styles from '../sass/Header.module.scss'
import Nav from './Nav'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>Lista de criptomonedas</h1>
            <Nav />
        </header>
    )
}

export default Header
