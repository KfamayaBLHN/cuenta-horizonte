// import { BackgroundColor } from 'chalk';
import styles from './Separador.module.scss'

const Separador = function ({children, name, bgColor, bgImage}) {
  return <div className={`${name} ${styles.layoutContainer}`} style={{backgroundColor: bgColor}}>
    <div className={styles.imagenContent} style={{backgroundImage: `url('${bgImage}')`}}></div>
    <div className={`container-fluid ${styles.infoContainer}`}>
      {children}
    </div>
  </div>
}

export default Separador; 