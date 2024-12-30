import React, {useState, useEffect, useRef } from 'react';


const FileUpload = props => {

  const [filename, setFilename] = useState('');
  const [srcThumb, setThumb] = useState('');
  const inputHidden = useRef(null);
  const [imgBase64, setImgBase64 ] = useState(null);
  const inputFile = useRef( null );
  const [ uploading, setUploading] = useState( false );


  const handleFileUpload = function (e) {

    const archivo = e.target.files[0];
    if ( typeof archivo !== "undefined"  ) {
      preloadUpload();
      getBase64(archivo).then( _data => {
        setImgBase64( _data );
        setThumb( _data );
        setFilename( archivo.name );
        successUpload();
      })
    }
  }


  const preloadUpload = function () {
    setUploading( true );
  }

  const successUpload = function () {
    setUploading( false );
  }

  useEffect( () => {
    props.onChange( props.name, srcThumb);
  }, [srcThumb]);

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

  const clearAction = function (e) {
    e.preventDefault();
    e.currentTarget.value = '';
    setThumb('');
    setFilename('');
    

    var evt = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    var canceled = !inputFile.current.dispatchEvent(evt);
  }

  const handleFocus = function () {
    if ( typeof props.onFocus !== "undefined" ) {
      props.onFocus();
    }
  }

  return <div className="pb-md-0 pt-32">
    <div className={`file-upload-v2 ${props.isInvalid ? '' : 'is-invalid'}`}>
      <label htmlFor="CED_CaraTrasera" className="form-label pb-1">{props.label}</label>
      <div className={`custom-input-file ${ props.isInvalid ? 'is-invalid' : ''}`}>
        <input type="file" onChange={handleFileUpload.bind(this)} ref={inputFile} onFocus={ handleFocus.bind(this) } />
        <button className="btn btn-lafise-esmeralda-seo">Subir archivo</button>
        <div className="initial-message">
          <small>Adjunta la imagen o clic en subir archivo</small>
          {srcThumb === '' ? <></> : <>
            <div className="img-file" style={{ backgroundImage: `url(${srcThumb})` }} data-name={filename}></div>
          </>}
        </div>
        { uploading && 
        <div className="preload">
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
        }
        <input type="hidden" name={props.name} ref={inputHidden} />
      </div>
      { srcThumb !== '' && <button className="mt-1 link" onClick={clearAction.bind(this)}>Subir otro archivo</button> }
      { props.feedbackMessage && props.feedbackMessage !== "" && <small className="d-inline-block pt-1">{props.feedbackMessage}</small> }
      { props.isInvalid == true && <small className="d-block invalid-feedback pt-1">{props.errorMessage}</small> }

    </div>
  </div>
}

export default FileUpload;

/**
 * @example
 
  <FileUpload
    isInvalid={Boolean}
    label={String}
    name={String}
    feedbackMessage={String}
    errorMessage={String}
    onChange={function}
    onFocus={function}
  />
 * 
 */