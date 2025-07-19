import styles from '../styles/Card.module.css'

function Card({ name, image, onClick }) {
  return (
    <div className={styles.card} tabIndex={0} onClick={onClick} onKeyDown={e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    }}>
      <img className={styles.image} src={image} alt={name} loading="lazy" />
      <div className={styles.cardName}>{name}</div>
    </div>
  );
}


export default Card