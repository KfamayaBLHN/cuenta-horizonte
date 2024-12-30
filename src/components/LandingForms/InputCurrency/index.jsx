/**
 * Author: Juan Pablo Torres | jptorres@lafise.com
 * Fecha: 04/10/2022
 */
 import React, { useState, useEffect } from "react";

 /**
  * Component InputCurrency 
  * @description Crea un elemento tipo input que soporta currency con o sin decimales
  * @param {*} props 
  * @returns 
  */
 const InputCurrency = props => {
 
   const [inputProps, setInputProps] = useState({
     label: '',
     name: '',
     placeholder: '',
     message: '',
     errorMessage: '',
     feedbackMessage: ''
   });
 
   const [value, setValue] = useState('');
   const [parseValue, setParseValue] = useState("0");
 
   /**
    * 
    * useEffect
    * @description 
    */
   useEffect(() => {
     
 
     if (props.value && props.value !== '') {
       const _parseValue = setOutput(props.value);
       setValue(_parseValue, props.value);
     } else {
       setOutput('0.00');
     }
   }, []);

   useEffect(()=> {
    if (props.config) {
      setInputProps({
        ...inputProps,
        ...props.config
      })
    }
   }, [props.config]) 
 
 
   const handleFocus = function () {
     if ( props.onFocus ) {
       props.onFocus();
     }
   }
 
 
   /**
    * setOutput
    * @description parse string with number formmat
    * @param {string} _in 
    */
   const setOutput = function (_in) {
     const allowDecimals = typeof props.allowDecimals !== 'undefined' ? props.allowDecimals : false;
 
     if (_in) {
       let str = _in;
       let hasDecimales = false;
 
       // remuevo los decimales
       if (!allowDecimals) {
         if (_in.indexOf('.') !== -1) {
           const temp = _in.split('.');
           str = temp[0];
           hasDecimales = true;
         }
       } else {
         if (_in.indexOf('.') !== -1) {
           hasDecimales = true;
         }
       }
 
       // creo el nuevo string
       str = str.replace(/,/g, '');// elimino separadores de miles
       str = str.replace(/\./g, '');// elimino el punto decimal
 
       // extrac decimals
       let decimals = '';
       let number = str;
       if (allowDecimals) {
         if (hasDecimales) {
           decimals = str.substr(str.length - 2, str.length);
           number = str.substr(0, str.length - 2);
         }
       }
 
       // proceso el str para agregar los separadores de milles
       const temp = Number(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 
       // set values
       setParseValue(`${temp}${decimals !== '' ? `.${decimals}` : ''}`);
     } else {
       setParseValue(allowDecimals ? `0.00` : '0');
     }
   }
 
   /**
    * handleChange
    * @description Handle input changes
    * @param {event} e 
    */
   const handleChange = function (e) {
     const _value = e.target.value;
     const strNum = _value.replace(/,/g, '');
     setOutput(strNum);
     setValue(parseValue);
   }
 
   /**
    * useEffect
    * @description Trigger onChange
    */
   useEffect(function () {
     if (props.onChange) {
       if ( parseValue !== null ) {
         const num = parseValue.replace(/,/g, '');
         props.onChange(num);
       }
     }
   }, [parseValue]);
 
   /**
    * handlePress
    * @description Allow only number
    * @param {event} e 
    * @returns 
    */
   const handlePress = function (e) {
     e = (e) ? e : window.event;
     const charCode = (e.which) ? e.which : e.keyCode;
     let status = true;
 
     if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
       e.preventDefault();
       status = false;
     }
     return status;
   }
 
   /**
    * Render Component
    */
   return <div className="form-group pb-3">
     <label className="form-label pb-1" htmlFor={inputProps.name}>{inputProps.label}</label>
     <div className="d-flex input-group-prepend">
       { 
         inputProps.message !== '' ? 
         <span className="input-group-text justify-content-center txt-medium">{inputProps.message}</span>
         : <></> 
       }
       <input
         type="text"
         className={`form-control ${inputProps.message !== '' ? 'w-50' : '' } ${props.isInvalid ? 'is-invalid' : ''}`}
         name={inputProps.name}
         aria-describedby={inputProps.name}
         placeholder={inputProps.placeholder}
         onChange={handleChange.bind(this)}
         value={parseValue}
         data-value={value}
         onKeyDown={handlePress.bind(this)}
         onFocus={handleFocus.bind(this)}
         {
           ...props.props
         }
       />
     </div>
     { inputProps.feedbackMessage !== "" ? <small className="d-inline-block pt-1">{ inputProps.feedbackMessage }</small> : <></> }
     { props.isInvalid ? <div className="pt-1 invalid-feedback d-block"><small>{inputProps.errorMessage}</small></div> : <></>}
   </div>
 
 }
 
 export default InputCurrency;

 /* 
 Ejemplo

 const props_CLI_ValorCanjePuntos = {
    config: {
      label: 'Cantidad de puntos a canjear*',
      name: 'CLI_PuntosCanjear',
      placeholder: 'Cantidad de puntos a canjear',
      message: '',
      errorMessage: 'La cantidad de puntos debe ser superior a 2,000',
      feedbackMessage: 'El mínimo de puntos a canjear es de 2,000'
    },
    allowDecimals: true,
    value: data.CLI_PuntosCanjear,
    isInvalid: error.CLI_PuntosCanjear,
    onChange: num => { handleChangeValorCanje('CLI_PuntosCanjear', num) },
    onFocus: () => { handleError('CLI_PuntosCanjear') }
  }

  <InputCurrency {...props_CLI_ValorCanjePuntos} />


  <InputCurrency
            config={{
              label: labelInversion,
              name: 'monto_prestamo',
              placeholder: '',
              message: '',
              errorMessage: 'Ingrese el monto de la inversión',
              feedbackMessage: ''
            }}
            allowDecimals={true}
            value={data.monto_prestamo}
            isInvalid={error.monto_prestamo}
            onChange={ num => handleChange('monto_prestamo', num) }
            onFocus={() => {resetError('monto_prestamo')}}
          />
 */