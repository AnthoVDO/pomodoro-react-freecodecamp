import React from 'react';
import Compteur from './Compteur';
import Config from './Config';

const Body = () => {
    return (
        <div className="body">
        <Config />
        <Compteur />
        </div>
    );
};

export default Body;