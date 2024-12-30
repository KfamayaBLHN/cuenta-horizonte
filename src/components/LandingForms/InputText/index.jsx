import React, { useEffect, useState } from "react";

const InputText = props => {

  const [config, setConfig] = useState({
    name: '',
    label: '',
    placeholder: '',
    feedbackMessage: '',
    errorMessage: '',
    type: 'text'
  });
  
  const [value, setValue] = useState("");
  const [dataValue, setDataValue ] = useState("");

  useEffect(() => {
    if (props.config) {
      setConfig({
        ...config,
        ...props.config
      })
    }
    if (props.value) {
      setValue(props.value);
    }
  }, []);


  const handleChange = function ( e ) {
    const name = e.target.name;
    const value = e.target.value;
    let _value = '';
    const temp = value.replace(/\ /g, '');

    if ( typeof props.mask !== "undefined" && props.mask !== '' ) {
      _value = applymask( temp );
      setValue( _value );
      setDataValue( temp );
    } else {
      setValue( value );
    }

    if ( props.onChange ) {
      const _val = typeof props.mask !== "undefined" ? _value : value;
      props.onChange( name, _val );
    }
  }


  const applymask = function ( value ) {
    
    let x;
    let temp = "";
    
    temp = mask_input(value);
    return temp;
  }

  /**
   * mask_input
   * @description: crea el enmascarado del input
   * @param {String} value 
   * @returns String
   */
  const mask_input = function (value) {
    const strMask = props.mask;
    const strValue = value;

    let testSeparator = (/-/g).test(strMask);
    let separator = '';
    let pattern = '';
    if ( testSeparator ) {
      separator = '-'
      pattern = /-/g;
    } else {
      testSeparator = (/\//g).test(strMask);
      if ( testSeparator ) {
        separator = '/';
        pattern = /\//g;
      } else {
        separator = ' ';
        pattern = / /g;
      }
    }


    // remove separator from value & mask
    const regex = new RegExp(pattern);
    
    let _mask = strMask.replace(regex, '');
    let _value = strValue.replace(regex, '');

    // conver str to array
    const arr_mask = _mask.split('');
    const arr_value = _value.split('');

    // iteration mask & value
    arr_mask.forEach( (item, i) => {
      // is number mask pattern
      const isNum = /\d/.test(item);
      if ( isNum ) {
        if ( typeof arr_value[i] !== 'undefined' ) {
          let temp = arr_value[i];
          arr_value[i] = temp.replace(/\D/g, '');
        }
      }

      // is char mask pattern
      const isChar = /[a-zA-Z]/.test( item );
      if ( isChar ) {
        if ( typeof arr_value[i] !== 'undefined' ) {
          let temp = arr_value[i];
          arr_value[i] = temp.replace(/\d/g, '');
        }
      }
    });


    // format groups
    const tempGroups = strMask.split(separator);
    let globalpattern = '';
    //const totalGroups = 0;
    tempGroups.forEach(group => {
      const groupLength = group.length;
      globalpattern += `(\\w{0,${groupLength}})`;
      //totalGroups++;
    });

     
    // build final string
    const regexFinal = new RegExp(globalpattern);
    const final_value = arr_value.join(''); 
    const x = final_value.match(regexFinal);
    let end = '';
    for ( let i = 1; i < x.length; i++) {
      if ( x[i] != '' ) {
        if ( i !== 1) {
          end += separator;
        }
        end += `${x[i]}`;
      } else {
        end += '';
      }
    }
    return end;
  }


  const handleFocus = function () {
    if ( props.onFocus ) {
      props.onFocus();
    }
  }


  return <div className="form-group pb-3">
    <label className="form-label pb-1" htmlFor={config.name}>{config.label}</label>
    <input
      type={config.type}
      name={config.name}
      placeholder={config.placeholder}
      className={`form-control ${props.isInvalid ? 'is-invalid' : ''}`}
      value={value}
      onChange={ handleChange.bind(this) }
      onFocus={ handleFocus.bind(this) }
      {...props.props}
      data-value={dataValue}
    />
    {config.feedbackMessage !== "" ? <small className="d-inline-block pt-1">{config.feedbackMessage}</small> : <></>}
    <div className="pt-1 invalid-feedback"><small>{props.errorMessage}</small></div>
  </div>
}

export default InputText;