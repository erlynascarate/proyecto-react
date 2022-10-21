import styles from '../sass/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                className={styles.footerLink}
                href='https://www.flaticon.es/iconos-gratis/cargando'
                title='cargando iconos'
                target='_blank'
                rel='noreferrer'
            >
                Cargando iconos creados por Krystsina Mikhailouskaya - Flaticon
            </a>
        </footer>
    )
}

export default Footer
