import React, { useState, useEffect } from "react";


const TerminosCondiciones = props => {

  const [config, setConfig] = useState({
    label: '',
    name: ''
  });
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (typeof props.config !== 'undefined') {
      setConfig({
        ...config,
        ...props.config
      })
    }
  }, []);

  const handleChange = function (e) {
    setValue(e.target.checked);
    if (typeof props.onChange !== 'undefined') {
      props.onChange(e.target.name, e.target.checked);
    }
  }

  const handleFocus = function () {
    if (typeof props.onFocus !== 'undefined') {
      props.onFocus();
    }
  }

  return <div className="form-check form-field ">
    <div className="d-flex">
      <div>
        <input className="form-check-input me-2" type="checkbox" value="" id="TerminosyCondiciones" name={config.name} onFocus={handleFocus.bind(this)} onChange={handleChange.bind(this)} />
      </div>
      <label className="form-check-label" htmlFor="TerminosyCondiciones">
        {config.label}
      </label>
    </div>
    {props.isInvalid ? <small className="invalid-feedback d-block pt-1">{props.errorMessage}</small> : <></>}
  </div>
}
export default TerminosCondiciones;