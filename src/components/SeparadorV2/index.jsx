import React from 'react';
import styles from './styles.module.scss';

const SeparadorV2 = props => {

  return <section>
    <div className={styles.separador_bg} style={{"--bg-separator": `url('${props.bgSource}')`, "backgroundColor": props.bgColor}} >
      <div className={styles.contenido}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className={styles.box_separador}>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default SeparadorV2;