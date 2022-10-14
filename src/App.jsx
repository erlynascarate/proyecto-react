import { useEffect, useState } from 'react'
import axios from 'axios'

async function fetchAPI(setCriptos) {
    const API_URL = import.meta.env.VITE_API_URL

    try {
        const { data } = await axios.get(`${API_URL}assets`)

        setCriptos(data.data)
    } catch (error) {
        console.error('La petición falló')
    }
}

function App() {
    const [criptos, setCriptos] = useState()

    useEffect(() => {
        fetchAPI(setCriptos)
    }, [])

    return (
        <>
            <h1>Lista de criptosmonedas</h1>
            <ol>
                {criptos ? (
                    criptos.map(({ id, name, priceUsd }) => (
                        <li key={id}>
                            Nombre: {name} Precio: {priceUsd}
                        </li>
                    ))
                ) : (
                    <span>Cargando...</span>
                )}
            </ol>
        </>
    )
}

export default App
