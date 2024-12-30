class HelperInputDate {
  constructor() {
    console.log('este es el constructor');
  }

  esBisiesto (year) {
    return (year % 400 === 0) ? true : 
          (year % 100 === 0) ? false : 
            year % 4 === 0;
  };

  daysByMonth ( year, month ) {
    return new Date(year, month, 0).getDate();
  }

  validateYear(value, allowFuture) {
    const year = Number(value);
    let message = '';
    let validation = '';
    let _esBisiesto = false;
    const d = new Date();
    if (typeof allowFuture !== 'undefined' && allowFuture == false) {
      if (year > d.getFullYear()) {
        validation = 'is-invalid';
        message = 'El año es incorrecto';
      }
    }

    if ( year < d.getFullYear()-90) {
      validation = 'is-invalid';
      message = 'El año es incorrecto';
    }

    return {
      result: validation,
      message: message
    }
  }

  validateDay ( year, month, day ){
    let result = '';
    let message = '';
    if ( year !== '' && month !== '' ) {
      const _day = Number(day);
      const _month = Number(month);
      const _year = Number(year);

      const allowDays = this.daysByMonth(_year, _month);
      if ( _day > allowDays ) {
        result = 'is-invalid';
        message = 'Día es incorrecto';
      }
    }
    return {
      result: result,
      message: message
    }
  }
}
export default HelperInputDate;