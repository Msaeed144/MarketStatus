import React from 'react';
import spinner from '../gif/289282-302330.gif'

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt='loading' />
            <h1>Loading</h1>
        </div>
    );
};

export default Loader;