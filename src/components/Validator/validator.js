class Validator {
  
  constructor() {

  }

  validateEmpty(value) {
    return value !== '';
  }

  validateNum(value) {
    const temp = value.toString();
    const num = Number(temp);
    return num > 0;
  }

  /**
   * isEmail
   * @description Validate email format
   * @param {DOM Node} node 
   * @returns 
   */
  validateEmail(email_address) {
    // const email_address = node.value;
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email_address);
  }

  getSeparator(strMask) {
    console.log('strMask', strMask);
    const pattern_separator_guion = (/-/g).test(strMask);
    if (pattern_separator_guion) {
      return '-';
    }

    const pattern_sepatator_slash = (/\//g).test(strMask);
    if (pattern_sepatator_slash) {
      return '/';
    }

    const pattern_sepatator_space = (/ /g).test(strMask);
    if (pattern_sepatator_space) {
      return ' ';
    }
  }

  buildRegExp(strMask, separator) {
    const sub_str = strMask.split(separator);
    
    let RegExp = '';
    sub_str.forEach( (str, index) => {
      let strRegExp = '';
      const _temp = str.split('');
      let num = 0;
      _temp.forEach( (element, i) => {
        if ( /\d/g.test( element )) {
          num++;
        } else {
          strRegExp += `\\d{${num}}`;
          strRegExp += `[a-zA-Z]{1}`;
          num = 0;
        }
        if ( i == _temp.length - 1) {
          strRegExp += `\\d{${num}}`;
        }
      });

      if ( index != sub_str.length - 1 ) {
        RegExp += strRegExp + separator;
      } else {
        RegExp += strRegExp;
      }
      
    })
    return RegExp;
  }

  validateMask(value, mask) {
    const _mask = mask.split(":")[1];
    const separator = this.getSeparator(_mask);
    const strRegExp = this.buildRegExp(_mask, separator);
    const regExp = new RegExp( strRegExp, 'g' );
    const validation = regExp.test( value );
    return validation;
  }

  validateMin( value, rule){
    const temp = rule.split(':');
    const numMin = Number(temp[1]);
    const numValue = Number( value );
    return numValue >= numMin;
  }

  validateInputs(inputs) {
    const inputsStatus = [];
    Object.entries(inputs).forEach(input => {
      const _status = this.validateInput(input);
      inputsStatus.push(_status);
    });

    const invalid = inputsStatus.filter(input => {
      return !input.status;
    });
    const valid = inputsStatus.filter(input => {
      return input.status;
    });

    return {
      valid: valid,
      invalid: invalid
    }
  }

  

  validateInput(value, rules) {
    let status = true;
    const _this = this;

    rules.forEach(rule => {
      if (rule == 'empty') {
        status = _this.validateEmpty(value);
      }

      if (status && rule == 'number') {
        status = _this.validateNum(value);
      }

      if (status && rule == 'email') {
        status = _this.validateEmail(value);
      }

      if (rule == 'boolean' && status) {
        status = value == true;
      }

      if (status && rule.indexOf('mask') !== -1) {
        status = _this.validateMask(value, rule);
      }

      if ( status && rule.indexOf('min') !== -1 ) {
        status = _this.validateMin( value, rule);
      }
    })
    return status;

  }
}

export default Validator;