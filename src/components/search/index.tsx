import React from "react";
import styles from "./styles.module.css";
import { IoIosSearch } from "react-icons/io";

export const Search = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Olá, o que você está buscando hoje?" />
      <div className={styles.icon}>
         <IoIosSearch />
      </div>
    </div>
  );
};
