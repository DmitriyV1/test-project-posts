import styles from "../../_components/Spinner.module.css";

function loading() {
  return <div className={styles.spinner}></div>;
}

export default loading;
