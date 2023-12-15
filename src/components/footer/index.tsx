import React from "react";
import styles from "./styles.module.css";
import { ContentFooter } from "../contentFooter";

const logo = require('../../assets/logo.jpg');


export const Footer = () => {
    return (
        <>
            <ContentFooter />
            <div className={styles.container}>
                <img
                    className={styles.logo}
                    src={logo}
                    alt="Logo Footer"
                />
                <p className={styles.subTitle}>Market Eletronics 2023. Todos os direitos reservados</p>
            </div>
        </>
    )
}