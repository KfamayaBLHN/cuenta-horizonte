import React, {useState, useEffect} from "react";

const Select = props => {

  const defaultOption = {label:"Seleccione una opción", value: ""};
  // const [config, setConfig]= useState({
  //   label: "",
  //   default: {label:"Seleccione una opción", value: ""},
  //   options: [],
  //   errorMessage: 'test',
  //   name: '',
  //   feedbackMessage: ''
  // })
  // const [value, setValue] = useState("");
  
  // useEffect( () => {
  //   if ( props.config ) {
  //     setConfig({
  //       ...config,
  //       ...props.config
  //     })
  //   }
  // }, []);

  // useEffect( () => {
  //   setValue(props.value);
  // }, [ props.value ])


  // const handleChange = e => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   if ( props.onChange) {
  //     props.onChange(name, value);
  //   }
  //   setValue(value);
  // }

  // const handleFocus = e => {
  //   if ( props.onFocus ) {
  //     props.onFocus();
  //   }
  // }

  return <div className="form-group pb-3">
    <label className="form-label pb-1" htmlFor={props.name}>{props.label}</label>
    <select {...props.props} name={props.name} 
      className={`form-select ${props.errorStatus ? 'is-invalid' : ''}`} 
      onChange={ props.handleChange?.bind(this) }
      onFocus={ props.handleFocus?.bind(this) }
      value={ props.value }
    >
      <option value={ defaultOption.value }>{defaultOption.label}</option>
      { props.options?.map( (option, i) => {
        const _props = {}
        return <option value={option.value} key={i} {..._props}>{option.label}</option>
      })}
    </select>
    { props.feedback && <small className="d-inline-block pt-1">{props.feedback}</small> }
    <div className="pt-1 invalid-feedback"><small>{props.errorMessage}</small></div>
  </div>
}

export default Select;

/*
# Ejemplo 
<Select
  name="hola"
  label="este es el label"
  errorStatus={false}
  handleChange={(value)=> console.log('value', value)}
  handleFocus={ () => console.log('handle focus')}
  value="hola"
  options={[
    {value:"value1", label:"Es es el label 1"},
    {value:"value2", label:"Es es el label 2"}
  ]}
  feedback="Mensaje feedback"
  errorMessage="mensaje de error"
/>
*/

/* 
  
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