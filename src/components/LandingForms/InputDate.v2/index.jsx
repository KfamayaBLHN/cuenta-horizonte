import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import HelperClass from './Helper.class';

const helperClass = new HelperClass();

export default props => {

  

  const [date, setDate] = useState({
    day: '',
    month: '',
    year: ''
  });

  const [isInvalid, setIsInvalid] = useState({
    day: '',
    month: '',
    year: ''
  })

  const [message, setMessage] = useState({
    year: '',
    day: ''
  });
  const [bisiesto, setBisiesto] = useState(false);

  const updateStatus = function (name, validate) {
    setIsInvalid({
      ...isInvalid,
      [name]: validate.result
    });
    setMessage({
      ...message,
      [name]: validate.message
    });
  }


  const validateDay = function (e) {
    const value = e.target.value;
    const validate = helperClass.validateDay( date.year, date.month, value);
    updateStatus('day', validate);
  }

  

  const handleChange = function (e) {
    const name = e.target.name;
    const value = e.target.value;

    setDate({
      ...date,
      [name]: value
    });
  }

  useEffect( () => {
    if ( typeof props.onChange !== "undefined" ) {
      props.onChange( props.name, date );
    }
  }, [date]);

  const validateYear = function (e) {
    const value = e.target.value;
    const validate = helperClass.validateYear( value, props.allowFuture);
    updateStatus('year', validate);
  }

  return <div className="form-group pb-3">
    <label className="form-label pb-1" htmlFor={props.name}>{props.label}</label>
    <div className={`d-flex ${styles.date_container}`}>
      <div>
        <input
          type="text"
          className={`form-control ${isInvalid.year}`}
          placeholder="Año"
          maxLength={4}
          name="year"
          onBlur={validateYear.bind(this)}
          onChange={handleChange.bind(this)}
        />
        {
          message.year !== '' && <div className="pt-1 invalid-feedback"><small>{message.year}</small></div>
        }
      </div>
      <div>
        <select
          className="form-select"
          onChange={handleChange.bind(this)}
          name="month"
        >
          <option value="">Mes</option>
          <option value="01">Enero</option>
          <option value="02">Febrero</option>
          <option value="03">Marzo</option>
          <option value="04">Abril</option>
          <option value="05">Mayo</option>
          <option value="06">Junio</option>
          <option value="07">Julio</option>
          <option value="08">Agosto</option>
          <option value="09">Setiembre</option>
          <option value="10">Octubre</option>
          <option value="11">Noviembre</option>
          <option value="12">Diciembre</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Día"
          className={`form-control ${isInvalid.day}`}
          maxLength={2}
          name="day"
          onBlur={validateDay.bind(this)}
          onChange={handleChange.bind(this)}
        />
        {
          message.day !== '' && <div className="pt-1 invalid-feedback"><small>{message.day}</small></div>
        }
      </div>
    </div>
    {props.isInvalid && <div className="pt-1 invalid-feedback d-block"><small>{props.errorMessage}</small></div>  }
  </div>
}