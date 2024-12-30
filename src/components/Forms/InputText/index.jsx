export default props => {
  return <div className="form-group pb-3">
    <label className="form-label pb-1" htmlFor={props.name}>{props.label}</label>
    <input
      type={props.type || 'text'}
      name={props.name}
      placeholder={props.placeholder || ''}
      className={`form-control ${props.errorStatus ? 'is-invalid' : ''}`}
      value={props.value}
      onChange={ props.handleChange?.bind(this) }
      onFocus={ props.handleFocus?.bind(this) }
      {...props.props}
    />
    { props.feedback && <small className="d-inline-block pt-1">{props.feedback}</small> }
    <div className="pt-1 invalid-feedback"><small>{props.errorMessage}</small></div>
  </div>
}

