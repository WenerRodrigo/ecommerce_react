import React from "react";
import styles from "./styles.module.css";

export const HeaderContainer = () => {
  return (
    <div className={styles.content}>
      <span className={styles.title}>
        Pague com PIX e aprove seu pedido na hora.
      </span>
      <button className={styles.link}>saiba mais</button>
    </div>
  );
};
