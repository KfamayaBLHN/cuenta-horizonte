import React, {useState, useEffect} from "react";

const Textarea = props => {

  const [config, setConfig] = useState({
    name: '',
    label: '',
    feedbackMessage: '',
    errorMessage: ''
  });

  useEffect( () => {
    if ( typeof props.config !== "undefined" ) {
      setConfig({
        ...config,
        ...props.config
      });
    }
  }, []);

  const handleChange = function (e) {
    if ( typeof props.onChange !== "undefined" ) {
      props.onChange( e.target.name, e.target.value );
    }
  }

  const handleFocus = function () {
    console.log('b');
    if ( typeof props.onFocus !== "undefined" ) {
      props.onFocus();
    }
  }


  return <div className="form-group pb-3">
    <label className="form-label pb-1" htmlFor={config.name}>{config.label}</label>
    <textarea
      name={config.name}
      className={`form-control ${props.isInvalid ? 'is-invalid' : ''}`}
      onChange={ handleChange.bind(this) }
      onFocus={ handleFocus.bind(this) }
      {...props.props}
      defaultValue={props.value}
    >
    </textarea>
    {config.feedbackMessage !== "" ? <small className="d-inline-block pt-1">{config.feedbackMessage}</small> : <></>}
    <div className="pt-1 invalid-feedback"><small>{props.errorMessage}</small></div>
  </div>
}

export default Textarea;