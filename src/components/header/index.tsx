import React from 'react';
import styles from './styles.module.css';
import { Cart } from '../cart';


const logo = require('../../assets/icone.png');

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Market 
                <img 
                    className={styles.logo}
                    src={logo}
                    alt='Icone Logo'/>
                Eletronics</h1>
            </div>
            <Cart />
        </div>
    )

}