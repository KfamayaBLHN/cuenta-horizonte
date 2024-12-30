import React, { useState, useEffect, useRef } from "react";

const File = props => {

  const [config, setConfig] = useState({
    label: '',
    name: '',
    description: '',
    feedbackMessage: '',
    errorMessage: ''
  })
  const [fileState, setFileState] = useState('idle');
  const [fileProps, setFileProps] = useState({
    name: '',
    base64: ''
  });

  let inputFile = useRef(null);

  /**
   * 
   * set inicial del componente
   */
  useEffect(() => {
    if (typeof props.config !== 'undefined') {
      setConfig({
        ...config,
        ...props.config
      })
    }
  }, []);


  /**
   * 
   * handleChange
   * @description Manejador de los cambios en el input tipo file
   * @param {Event} e 
   */
  const handleChange = function (e) {
    const file = e.target.files;
    if (file.length >= 1) {

      // validate file size
      const maxSize = 5;// 5 MB
      const fileSize = (file[0].size / 1048576).toFixed(2);

      if (fileSize <= maxSize) {
        aceptedFile(file[0]);
      } else {
        e.target.value = null;
        declinedFile(fileSize);
      }
    }
  }

  /**
   * 
   * aceptedFile
   * @description Maneja las acciones cuando el file es permitido
   * @param {File} file 
   */
  const aceptedFile = function (file) {
    setFileState('file-upload');
    const temp_file = { ...fileProps };
    temp_file.name = file.name;
    
    setConfig({
      ...config,
      errorMessage: ''
    })

    // convierte la imagen a base64
    getBase64(file).then(_data => {
      temp_file.base64 = _data
      setFileProps({
        ...fileProps,
        ...temp_file
      });

      // output component
      if ( typeof props.onChange !== "undefined" ) {
        props.onChange( config.name, _data );
      }
    });
  }

  /**
   * 
   * declinedFile
   * @description Acciones cuando el archivo no es permitido
   * @param {*} fileSize 
   */
  const declinedFile = function (fileSize) {
    setFileState('idle');

    const msj = `El archivo seleccionado pesa ${fileSize}MB. Procura que el peso sea menor a 5MB`;
    setConfig({
      ...config,
      errorMessage: msj
    })
    setFileProps({
      ...fileProps,
      base64: '',
      name: ''
    });
    props.onChange( config.name, '' );
  }

  /**
   * getBase64
   * @description Convierte el file a base64
   * @param {File Object} file 
   * @returns 
   */
  const getBase64 = function (file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const reUploadFile = function (e) {
    e.preventDefault();

    setConfig({
      ...config,
      errorMessage: ''
    })
    setFileProps({
      ...fileProps,
      base64: '',
      name: ''
    });
    setFileState('idle');

    // trigger click
    var ele = inputFile.current;
    if(typeof ele.click == 'function') {
      ele.click()
    } else if(typeof ele.onclick == 'function') {
      ele.onclick()
    }
  }

  /**
   * Return Componente
   */
  return <div className="form-group pb-3 file-container">
    {config.label !== '' ? <label className="form-label pb-1" htmlFor={config.name}>{config.label}</label> : <></>}
    {config.description}
    <div className={`mt-2 input-file-upload-images-container ${fileState} ${props.isInvalid ? 'is-invalid' : ''}`}>
      <input type="file" onChange={handleChange.bind(this)} accept=".jpg, .jpeg, .png" ref={inputFile} />
      <input type="hidden" name={config.name} value={fileProps.base64} />
      <div className="d-flex w-100 h-100 align-items-center justify-content-between file-step step-1">
        <div>
          <button>Seleccionar archivo</button>
        </div>
        <div>
          <span>Ningún archivo seleccionado</span>
        </div>
      </div>
      <div className="d-flex w-100 h-100 align-items-center justify-content-between file-step step-2">
        <div className="file-name-box">
          <span className="d-block">{fileProps.name}</span>
        </div>
        <div className="file-icon">
          <i aria-hidden="true">icono</i>
        </div>
      </div>
    </div>
    {config.feedbackMessage !== "" ? <small className="d-inline-block pt-1">{config.feedbackMessage}</small> : <></>}
    {props.isInvalid ? <small className="d-block msj-error pt-1">{config.errorMessage}</small> : <></>}
    {fileState === 'file-upload' ? <div><button className="link txt-small px-0" onClick={reUploadFile.bind(this)}>Subir otra foto</button></div> : ''}
  </div>
}

export default File;