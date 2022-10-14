import styles from './sass/App.module.scss'
import List from './components/List'

function App() {
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>Lista de criptosmonedas</h1>
            </header>
            <main>
                <List />
            </main>
            <footer className={styles.footer}>
                <a
                    className={styles.footerLink}
                    href='https://www.flaticon.es/iconos-gratis/cargando'
                    title='cargando iconos'
                    target='_blank'
                    rel='noreferrer'
                >
                    Cargando iconos creados por Krystsina Mikhailouskaya -
                    Flaticon
                </a>
            </footer>
        </>
    )
}

export default App
