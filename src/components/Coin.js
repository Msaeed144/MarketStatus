import React from 'react';
import styles from './Coin.module.css'

const Coin = ({name , ename , price , changesin24h , topPrice}) => {
    return (
        
        <div className={styles.container}>
            <span className={styles.name}>{name}</span>
            <span className={styles.ename}>{ename}</span>
            <span className={styles.price}>{price.toLocaleString()}</span>
            <span className={changesin24h>0 ? styles.changesin24h : styles.changesin24hlow}>{changesin24h.toLocaleString()}</span>
            <span className={styles.topPrice}>{topPrice.toLocaleString()}</span>

        </div>
    );
};

export default Coin;