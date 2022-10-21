import styles from '../sass/Cripto.module.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

async function fetchAPI(setCripto, id) {
    const API_URL = import.meta.env.VITE_API_URL

    try {
        const { data } = await axios.get(`${API_URL}assets/${id}`)
        console.log(data.data)
        setCripto(data.data)
    } catch (error) {
        console.error('La petición falló')
    }
}

const Cripto = () => {
    const [cripto, setCripto] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetchAPI(setCripto, id)
    }, [])

    const { name, symbol, rank, price, changePercent, explorer } = cripto

    return (
        <article>
            <p className={styles.itemName}>{name}</p>
            <p>{symbol}</p>
            <p>Rank: {rank}</p>
            <p className={styles.itemPrice}>Precio: {price}</p>
            <p>
                Variación 24hrs:{' '}
                <span
                    className={
                        changePercent > 0 ? styles.positive : styles.negative
                    }
                >
                    {changePercent}%
                </span>
            </p>
            <a
                className={styles.itemLink}
                href={explorer}
                target='_blank'
                rel='noopener noreferrer'
            >
                Explorar
            </a>
        </article>
    )
}

export default Cripto
