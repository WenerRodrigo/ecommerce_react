import React from "react";
import { FaHouse } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { FaBed } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import styles from "./styles.module.css";
import { Home } from "../../pages/home";

export const HeaderContent = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <ul className={styles.contentHeader}>
                        <li><FaHouse /> Pagina Inicial</li>
                        <li><IoGameController /> Eletrônicos</li>
                        <li><FaBed /> Casa, mesa e decoração</li>
                        <li><MdComputer /> Informatica</li>
                        <li><FaHeadphonesAlt /> Acessórios</li>
                    </ul>
                </div>
            </div>
            <Home />
        </>
    )
}