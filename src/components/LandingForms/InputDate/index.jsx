/**
 * Author: Juan Pablo Torres | jptorres@lafise.com
 * Fecha: 04/10/2022
 */


import React, { useEffect, useState, useRef } from "react";


/**
 example: 
const props_fecha_emision = {
  config: {
    name: 'fecha_emision_doc_identificacion',
    label: 'Fecha de emisión de tu identificación*',
    onlyPassDates: true,
    onlyFutureDates: true.
    ranges: {min: 'yyyy-mm-dd|now', max: 'yyyy-mm-dd|now'}
  },
  isInvalid: false,
  value: '02/10/2022',
  onChange: (name, value) => {
    console.log('cambio en fecha_emisión', name, value)
  }
} 
 */


/**
 * 
 * InputDate
 * @description Crea y agrega algunas validaciones al input tipo date
 * @param {Object} props 
 * @returns React Functional Component
 */
const InputDate = props => {

  const [config, setConfig] = useState({
    label: "",
    name: "",
    onlyFutureDates: false,
    onlyPassDates: false,
    feedbackMessage: ''
  });

  const inputDate = useRef(null);
  const [value, setValue] = useState('');// --> format: dd/mm/yyyy
  const [strValue, setStrValue] = useState('');

  useEffect(() => {
    if (typeof props.config !== "undefined") {
      setConfig({
        ...config,
        ...props.config
      })
    }

    if (typeof props.value !== 'undefined') {
      const temp = props.value.split('/');//format: dd/mm/yyyy
      setValue(`${temp[2]}-${temp[1]}-${temp[0]}`);//format yyyy-mm-dd
      setStrValue(props.value);
    }
  }, []);

  useEffect(() => {
    if (config.onlyFutureDates && !config.onlyPassDates) {
      setMin();
    }
    if (!config.onlyFutureDates && config.onlyPassDates) {
      setMax();
    }

    if (!config.onlyFutureDates && !config.onlyPassDates && typeof config.range !== 'undefined') {
      setRange(config.range);
    }
  }, [config]);


  /**
   * 
   * getToday
   * @descripcion hacer un parse del objeto Date al formato yyyy-mm-dd
   * @returns {String}
   */
  const getToday = function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }

  /**
   * 
   * setMin
   * @description Agrega el atributo min al input type date
   */
  const setMin = function () {
    const today = getToday();
    const _input = inputDate.current;
    _input.setAttribute('min', today);
  }

  /**
   * 
   * setMax
   * @description Agrega el atributo max al input type date
   */
  const setMax = function () {
    const today = getToday();
    const _input = inputDate.current;
    _input.setAttribute('max', today);
  }

  /**
   * 
   * setRange
   * @description: Limita el rango de fechas del componente date. El formato es yyyy-mm-dd (año-mes-día)
   * @param {Object} datas: min and max dates. 
   */
  const setRange = function (dates) {
    const str_min = dates.min === 'now' ? getToday() : dates.min;
    const str_max = dates.max === 'now' ? getToday() : dates.max;
    const _input = inputDate.current;
    _input.setAttribute('min', str_min);
    _input.setAttribute('max', str_max);
  }

  /**
   * 
   * handleFocus
   * @description Maneja el evento Focus en el input
   * @param {Event} e 
   */
  const handleFocus = function (e) {
    const _date = inputDate.current.getAttribute('data-value').split('-');//format: yyyy-mm-dd
    e.target.type = "date";
    if (_date.length >= 2) {
      e.target.value = inputDate.current.getAttribute('data-value');//format: 
    }
    if ( typeof props.onFocus !== "undefined" ) {
      props.onFocus();
    }
  }

  /**
   * 
   * handleBlur
   * @description Maneja el evento blur en el input
   * @param {Event} e 
   */
  const handleBlur = function (e) {
    e.target.type = "text";
    const _date = inputDate.current.getAttribute('data-value').split('-');// format: yyyy-mm-dd
    //console.log('_date', _date);
    if ( _date[0] !== "undefined" && _date[1] !== "undefined" && _date[2] !== "undefined") {
      e.target.value = `${_date[2]}/${_date[1]}/${_date[0]}`;// format: dd/mm/aaaa
    }
    
  }

  /**
   * 
   * handleChange
   * @description Maneja el evento change en el input
   * @param {Event} e 
   */
  const handleChange = function (e) {
    const name = e.target.name;
    const value = e.target.value;
    if (typeof props.onChange !== 'undefined') {
      props.onChange(name, value);
    }
    setValue(value);
    setStrValue(value);
  }

  
  return <div className="form-group pb-3">
    <label className="form-label pb-1" htmlFor={config.name}>{config.label}</label>
    <div className="date-container">
      <input
        type="text"
        className={`form-control date ${props.isInvalid ? 'is-invalid' : ''}`}
        placeholder="dd/mm/yyyy"
        onFocus={handleFocus.bind(this)}
        onBlur={handleBlur.bind(this)}
        ref={inputDate}
        value={ strValue }
        data-value={value}
        name={config.name}
        onChange={handleChange.bind(this)}
      />
      <i aria-hidden="true"></i>
    </div>
    {config.feedbackMessage !== "" ? <small className="d-inline-block pt-1">{config.feedbackMessage}</small> : <></>}
    {
      props.isInvalid ? <>
      <div id="" className="pt-1 invalid-feedback d-block"><small>{props.errorMessage}</small></div>
      </>: <></>
    }
  </div>
}

export default InputDate;