import { BsHandbag } from "react-icons/bs";
import styles from './styles.module.css';
import { useState } from "react";
import { CartMenu } from "../cartMenu";

export const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <div className={styles.container} onClick={handleOpen}>
            <span>71</span>
            <BsHandbag />
            {isOpen && <CartMenu onClose={handleClose} />}
        </div>
    )
}