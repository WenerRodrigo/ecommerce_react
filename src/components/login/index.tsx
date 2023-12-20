import { VscAccount } from "react-icons/vsc";
import { RiCustomerService2Line } from "react-icons/ri";
import styles from "./styles.module.css";

export const Login = () => {
  return (
    <div className={styles.container}>
      <span className={styles.icons}>
        <VscAccount />
      </span>
      <p className={styles.description}>Login</p>
      <span className={styles.icons}>
        <RiCustomerService2Line />
      </span>
      <p className={styles.description}>Central de Atendimento</p>
    </div>
  );
};
