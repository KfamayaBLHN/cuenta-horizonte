import React, { useEffect, useState } from 'react'

import styles from './landingHeader.module.scss'

const FormHeader = props => {

  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [logoProps, setLogoProps] = useState({
    alt: '',
    src: '',
    title: ''
  });
  const [parent, setParent] = useState('banco');
  

  useEffect( () => {
    if ( typeof props.showDisclaimer !== 'undefined' ) {
      setShowDisclaimer( props.showDisclaimer );
    }

    if ( typeof props.config !== 'undefined' ) {
      setLogoProps( props.config.logo );

      if ( props.config.parent ) {
        setParent( props.config.parent );
      }
      
    }


  }, []);

  return <header className={styles.header}>
  <div className={styles['logo-content']}>
    <div className="container-fluid">
      <div className="row">
        <div className="col text-center">
          <span className="d-inline-block">
            <img width="161" height="80" {...logoProps}/>
          </span>
        </div>
      </div>
    </div>
  </div>
  
  {
    showDisclaimer ? <div className={styles.disclaimer}>
    <div className="container-fluid">
      <div className="row">
        <div className="col text-center">
          <i className={styles['icono-candado']}></i><span>Te encuentras en un sitio seguro de { parent === 'banco' ? 'Banco' : 'Seguros' } LAFISE</span>
        </div>
      </div>
    </div>
  </div> : <></>
  }
  
  
</header>
}

export default FormHeader;