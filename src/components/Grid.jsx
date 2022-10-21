import { useEffect, useState } from 'react'
import styles from '../sass/Grid.module.scss'
import axios from 'axios'
import Item from './Item'
import Loading from './Loading'

async function fetchAPI(setCriptos) {
    const API_URL = import.meta.env.VITE_API_URL

    try {
        const { data } = await axios.get(`${API_URL}assets`)

        setCriptos(data.data)
    } catch (error) {
        console.error('La petición falló')
    }
}

const Grid = () => {
    const [criptos, setCriptos] = useState()

    useEffect(() => {
        fetchAPI(setCriptos)
    }, [])

    if (!criptos) return <Loading />
    return (
        <ol className={styles.list}>
            {criptos.map(cripto => (
                <Item key={cripto.id} info={cripto} />
            ))}
        </ol>
    )
}

export default Grid
