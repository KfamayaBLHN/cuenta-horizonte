import React, {useState, useEffect} from "react";

const Select = props => {

  const [config, setConfig]= useState({
    label: "",
    default: {label:"Seleccione una opción", value: ""},
    options: [],
    errorMessage: 'test',
    name: '',
    feedbackMessage: ''
  })
  const [value, setValue] = useState("");
  
  useEffect( () => {
    if ( props.config ) {
      setConfig({
        ...config,
        ...props.config
      })
    }

    
  }, []);

  useEffect( () => {
    setValue(props.value);
  }, [ props.value ])


  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    if ( props.onChange) {
      props.onChange(name, value);
    }
    setValue(value);
  }

  const handleFocus = e => {
    if ( props.onFocus ) {
      props.onFocus();
    }
  }

  return <div className="form-group pb-3">
    <label className="form-label pb-1" htmlFor={config.name}>{config.label}</label>
    <select {...props.props} name={config.name} 
      className={`form-select ${props.isInvalid ? 'is-invalid' : ''}`} 
      onChange={handleChange.bind(this)} 
      onFocus={ handleFocus.bind(this) }
      value={ value }
    >
      <option value={ config.default.value }>{config.default.label}</option>
      { config.options.map( (option, i) => {
        const _props = {}
        // if ( props.value === option.value ) {
        //   _props['selected'] = 'selected'
        // }
        return <option value={option.value} key={i} {..._props}>{option.label}</option>
      })}
    </select>
    { config.feedbackMessage !== "" ? <small className="d-inline-block pt-1">{ config.feedbackMessage }</small> : <></> }
    <div className="pt-1 invalid-feedback"><small>{config.errorMessage}</small></div>
  </div>
}

export default Select;

/* 
  # Ejemplo 
  <Select 
  config: {
      label: "[String]",
      default: { label: "Seleccione una opción", value: "" },
      options: [
        { label: [String], value: [String] },
        ...
      ],
      errorMessage: [String],
      name: [String],
      feedbackMessage: ''
    },
    isInvalid: [Boolean],
    value: [String],
    onChange: (key, value) => { console.log(key, value) },
    onFocus: () => {  }
  />
*/