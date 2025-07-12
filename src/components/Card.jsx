import { useState } from 'react'
import styles from '../styles/Card.module.css'

function Card({value, content, onClick}){
    
    function handleClick(){
        setClicked(true);
    } 

    return (
        <div className={styles.card} onClick={onClick}>
            <h2>{value}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Card