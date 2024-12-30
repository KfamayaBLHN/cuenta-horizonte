import styles from './styles.module.scss';
const Navidad =  props => {
  return (
    <div id={styles.wrapper}>
      <div className={`${styles.snow}`}>
        <span className={`${styles.copos} ${styles.f1}`}>&#10053;</span>
        <span className={`${styles.copos} ${styles.f2}`}>&#10052;</span>
        <span className={`${styles.copos} ${styles.f3}`}>&#10053;</span>
        <span className={`${styles.copos} ${styles.f4}`}>&#10052;</span>
        <span className={`${styles.copos} ${styles.f5}`}>&#10053;</span>
        <span className={`${styles.copos} ${styles.f6}`}>&#10052;</span>
        <span className={`${styles.copos} ${styles.f7}`}>&#10053;</span>
        <span className={`${styles.copos} ${styles.f8}`}>&#10052;</span>
      </div>
    </div>
  )
}
export default Navidad;