import { on } from "events";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./styles.module.css";

type CartMenuProps = {
  onClose: () => void;
};

export const CartMenu: React.FC<CartMenuProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div className={styles.container} onClick={handleClose}>
      <div className={styles.icon_close}>
          <IoCloseSharp />
      </div>
      <p className={styles.description}>Total R$: 00,00</p>
      <button className={styles.finalizar}>Finalizar compra</button>
    </div>
  );
};
