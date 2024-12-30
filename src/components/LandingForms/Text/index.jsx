/**
 * Author: Juan Pablo Torres | jptorres@lafise.com
 * Fecha: 04/10/2022
 */
import React, {useState, useEffect} from "react";

/**
 * 
 * ReactInputText
 * @description Componente de Input typo text, password, number, email
 * @param {*} props 
 * @returns 
 */
 const InputText = props => {
  const [value, setValue] = useState('');
  const [type, setType] = useState('text');

  const handleChange = function (e) {
    setValue(e.target.value);
    try {
      props.onChange( e.target.name, e.target.value);
    } catch (err) {
      console.log('Existe un error: ', err);
    }
  }

  const handleFocus = function () {
    try {
      props.onFocus();
    } catch (err) {
      console.log('Existe un error: ', err);
    }
  }

  useEffect( () => {
    setValue( props.value);
    if ( props.type ) {
      const type = props.type;
      if ( type === 'number' || type === 'password' || type === 'email' ) {
        setType( props.type );
      }
    }
  }, []);

  return <div className="form-group">
    <label className="form-label pb-1" htmlFor={props.name}>{props.label}</label>
    <input 
      name={props.name}
      type={type} 
      className={`form-control ${props.isInvalid ? 'is-invalid' : ''}`} 
      placeholder={props.placeholder} 
      onChange={handleChange.bind(this)}
      onFocus={handleFocus.bind(this)}
      value={value}
    />
    <div className="pt-1 invalid-feedback"><small>{props.errorMessage}</small></div>
  </div>
}

export default InputText;