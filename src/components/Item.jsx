import styles from '../sass/Item.module.scss'

const Item = ({ info: { name, symbol, priceUsd, rank, explorer } }) => {
    const price = parseFloat(priceUsd).toFixed(7)

    return (
        <li className={styles.item}>
            <p className={styles.itemName}>{name}</p>
            <p>{symbol}</p>
            <p>Rank: {rank}</p>
            <p className={styles.itemPrice}>Precio: {price}</p>
            <a
                className={styles.itemLink}
                href={explorer}
                target='_blank'
                rel='noopener noreferrer'
            >
                Explorar
            </a>
        </li>
    )
}

export default Item
