import React, {useEffect, useState}from "react";
import {  } from "react";

import  styles from './landingFooter.module.scss';

const LandingFooter = props => {

  const [parent, setParent] = useState('Banco');
  
  const getYear = function () {
    const now = new Date( Date.now() );
    return now.getFullYear();
  }

  const year = getYear();

  useEffect( () => {
    if ( typeof props.parent !== "undefined" ) {
      if ( props.parent === 'seguros' ) {
        const str = props.parent;
        setParent( str.charAt(0).toUpperCase() + str.slice(1) );
      }    
    }
  }, []);

  return <footer className={styles.footer}>
  <div className="container-fluid">
    <div className="row">
      <div className="col text-center">
        <span className="txt-color-white">© {parent} LAFISE {year} - Todos los derechos reservados</span>
      </div>
    </div>
  </div>
</footer>
}

export default LandingFooter;