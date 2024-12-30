"use client"

import React, {useState, useEffect} from "react";

const Footer = props => {
  
  const [isSSR, setIsSSR] = useState(true);
  const [str, setStr] = useState(`<!--#include virtual="${props.filename}" -->`);
  useEffect(() => {
    // setIsSSR(false);
    // setStr('');
  }, []);

  return isSSR && <div dangerouslySetInnerHTML={{__html: str}}></div> 
}


export default Footer;

/*
  #Descripción: Es el componente encargado de importar el footer único a los proyectos react. Usado únicamente para producción

  # Ejemplo 
  <Footer filename="/cdn/basics/footer-seguros/footer-slcr.html"/>

  # Propiedades
  props.filename {String}
  Es el url del archivo footer único en el servidor
*/