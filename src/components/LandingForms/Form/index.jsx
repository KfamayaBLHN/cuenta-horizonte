/**
 * Author: Juan Pablo Torres | jptorres@lafise.com
 * Fecha: 04/10/2022
 */

import React from "react";

const Form = props => {
  return <form className="lafise-forms">
    {props.children}
  </form>
}

export default Form;