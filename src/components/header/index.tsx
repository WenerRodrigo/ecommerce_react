import React from 'react';
import styles from './styles.module.css';
import { Cart } from '../cart';
import { HeaderContainer } from '../headerContainer';
import { Search } from '../search';
import { Login } from '../login';


const logo = require('../../assets/icone.png');

export const Header = () => {
    return (
        <>
            <HeaderContainer />
            <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Market 
                <img 
                    className={styles.logo}
                    src={logo}
                    alt='Icone Logo'/>
                Eletronics</h1>
            </div>
            <Search />
            <Login />
            <Cart />
        </div>
        </>
    )
}