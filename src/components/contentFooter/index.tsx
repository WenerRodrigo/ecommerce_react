import React from "react";
import styles from "./styles.module.css";

const instragram = require('../../assets/instagram.png');
const facebook = require('../../assets/facebook.png');
const linkedin = require('../../assets/linkedin.png');

export const ContentFooter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <h2 className={styles.title}>Atendimento</h2>
                    <span>(19) 99999-9999</span>
                    <p>Seg à Sex das 8:00 as 18:00</p>
                    <p>Email: suporte@marketEletronics.com.br</p>
                </div>

                <div>
                    <h2 className={styles.title}>Institucional</h2>
                    <p>Quem Somos</p>
                    <p>Nossas Lojas</p>
                    <p>Trabalhe conosco</p>
                    <p>Política de privacidade</p>
                </div>

                <div>
                    <h2 className={styles.title}>Ajuda</h2>
                    <p>Politica de entrega</p>
                    <p>Trocas e devoluções</p>
                    <p>Central de Atendimento</p>
                </div>

                <div>
                    <h2 className={styles.title}>Acompanhe nossas redes</h2>
                    <img className={styles.logo} src={instragram} alt="Logo rede Social" />
                    <img className={styles.logo} src={facebook} alt="Logo rede Social" />
                    <img className={styles.logo} src={linkedin} alt="Logo rede Social" />
                </div>
            </div>
        </div>
    )
}