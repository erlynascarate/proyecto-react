import { Link } from 'react-router-dom'
import styles from '../sass/Item.module.scss'

const Item = ({
    info: { id, name, symbol, priceUsd, rank, changePercent24Hr, explorer },
}) => {
    const price = parseFloat(priceUsd).toFixed(7)
    const changePercent = parseFloat(changePercent24Hr).toFixed(7)

    return (
        <li className={styles.item}>
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
            <Link className={styles.itemLink} to={`/criptomonedas/${id}`}>
                Ver detalles
            </Link>
        </li>
    )
}

export default Item
