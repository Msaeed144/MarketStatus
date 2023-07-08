import React from 'react';

const Coin = ({name , ename , price , changesin24h , topPrice}) => {
    return (
        <div>
            
            <span>{name}</span>
            <span>{ename}</span>
            <span>{price.toLocaleString()} $</span>
            <span>{changesin24h.toLocaleString()} %</span>
            <span>{topPrice.toLocaleString()} $</span>

        </div>
    );
};

export default Coin;