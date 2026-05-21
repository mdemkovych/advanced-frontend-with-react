import styles from "./Input.module.css";

function Input() {
  return <input type="text" className={styles.active} placeholder="your text" />;
}

export default Input;
