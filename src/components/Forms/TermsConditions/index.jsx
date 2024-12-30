import React, { useState, useEffect } from "react";


const TerminosCondiciones = props => {

  // const [config, setConfig] = useState({
  //   label: '',
  //   name: ''
  // });
  // const [value, setValue] = useState(false);

  // useEffect(() => {
  //   if (typeof props.config !== 'undefined') {
  //     setConfig({
  //       ...config,
  //       ...props.config
  //     })
  //   }
  // }, []);

  const handleChange = function (e) {
    // setValue(e.target.checked);
    if (typeof props.handleChange !== 'undefined') {
      props.handleChange(e.target.name, e.target.checked);
    }
  }

  const handleFocus = function () {
    if (typeof props.handleFocus !== 'undefined') {
      props.handleFocus();
    }
  }

  return <div className="form-check form-field">
    <div className="d-flex">
      <div>
        <input className="form-check-input me-2" type="checkbox" value="" id="TerminosyCondiciones" name={props.name} onFocus={handleFocus.bind(this)} onChange={handleChange.bind(this)} />
      </div>
      <label className="form-check-label" htmlFor="TerminosyCondiciones">
        {props.label}
      </label>
    </div>
    {props.errorStatus && <small className="invalid-feedback d-block pt-1">{props.errorMessage}</small>}
  </div>
}
export default TerminosCondiciones;

/* 

<TerminosCondiciones
  label="hola mundo"
  name="hola"
  handleFocus={()=> console.log('focus')}
  handleChange={ (name, value) => console.log('name, value', name, value)}
  errorStatus={false}
/>

*/