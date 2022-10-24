import styles from '../sass/Cripto.module.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

async function fetchAPI(setCripto, id) {
    const API_URL = import.meta.env.VITE_API_URL

    try {
        const { data } = await axios.get(`${API_URL}assets/${id}`)

        setCripto(data.data)
    } catch (error) {
        console.error('La petición falló')
    }
}

const Cripto = () => {
    const [cripto, setCripto] = useState({
        name: 'Cargando cripto...',
        symbol: 'Cpt',
        rank: 0,
        priceUsd: 0,
        maxSupply: 0,
        changePercent24Hr: 0,
    })
    const { id } = useParams()

    useEffect(() => {
        fetchAPI(setCripto, id)
    }, [])

    const {
        name,
        symbol,
        rank,
        priceUsd,
        maxSupply,
        changePercent24Hr,
        explorer,
    } = cripto

    const price = parseFloat(priceUsd).toFixed(5)
    const mxSupply = parseFloat(maxSupply).toFixed(3)
    const changePercent = parseFloat(changePercent24Hr).toFixed(7)

    return (
        <article className={styles.item}>
            <p className={styles.itemName}>{name}</p>
            <p>{symbol}</p>
            <p>Rank: {rank}</p>
            <p className={styles.itemPrice}>Precio: {price}$</p>
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
            <p className={styles.itemPrice}>Suministro máximo: {mxSupply}$</p>
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
