import { useEffect, useState } from 'react'
import styles from '../sass/List.module.scss'
import axios from 'axios'
import Item from './Item'
import Loading from './Loading'

async function fetchAPI(setCriptos) {
    const API_URL = import.meta.env.VITE_API_URL

    try {
        const { data } = await axios.get(`${API_URL}assets`)
        console.log(data.data)
        setCriptos(data.data)
    } catch (error) {
        console.error('La petición falló')
    }
}

const List = () => {
    const [criptos, setCriptos] = useState()

    useEffect(() => {
        fetchAPI(setCriptos)
    }, [])

    return (
        <ol className={styles.list}>
            {criptos ? (
                criptos.map(cripto => <Item key={cripto.id} info={cripto} />)
            ) : (
                <Loading />
            )}
        </ol>
    )
}

export default List
