import styles from '../styles/Card.module.css'

function Card({value, content}){
    return (
        <div className={styles.card}>
            <h2>{value}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Card