import { Link } from 'react-router-dom'
import styles from '../sass/Home.module.scss'

const Home = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.containerTitle}>
                Hola, bienvenido a EDmarket
            </h1>
            <p className={styles.containerText}>
                Cónoce las 100 criptos más usadas
            </p>
            <Link className={styles.containerBtn} to='/criptomonedas'>
                Ver criptomonedas
            </Link>
        </section>
    )
}

export default Home
