import styles from '../sass/Loading.module.scss'
import loading from '../assets/loading.png'

const Loading = () => {
    return (
        <div className={styles.container}>
            <img
                className={styles.containerImg}
                src={loading}
                alt='Cargando...'
            />
            <p>Cargando criptomonedas</p>
            <p>Por favor, espere...</p>
        </div>
    )
}

export default Loading
