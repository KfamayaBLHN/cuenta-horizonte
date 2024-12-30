"use client"

import React, {useState, useEffect} from "react";

const Header = props => {
  const [isSSR, setIsSSR] = useState(true);
  const [str, setStr] = useState(`<!--#include virtual="${props.filename}" -->`);
  useEffect(() => {
    //setIsSSR(false);
    //setStr('');
  }, []);

  return isSSR && <div dangerouslySetInnerHTML={{__html: str}}></div> 
}

export default Header;

/*
# Ejemplo:
<Header filename="/cdn/basics/header-seguros/header-slcr.html" />

# Propiedades
props.filename {String} url del archivo en el servidor

*/