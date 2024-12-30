import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import styles from './styles.module.scss';

const SignaturePad = (props) => {
  // Create a reference to the signature canvas element
  const signatureRef = useRef();

  // Function to clear the signature canvas
  const clearSignature = (e) => {
    e.preventDefault();
    signatureRef.current.clear();
  };

  return (
    <div className="form-group pb-3">
      <label className="form-label pb-1" htmlFor={props.name || ''}>{props.label || ''}</label>
      <div className={styles.signature_container}>
        <SignatureCanvas
          penColor="black"
          canvasProps={{ width: 320, height: 200, className: 'signature-canvas' }}
          ref={signatureRef}
        />
      </div>
      <button onClick={clearSignature} className='link fw-bold px-0 fz-14'>Borrar firma</button>
    </div>
  );
};

export default SignaturePad;

/*
  <SignaturePad 
    label="Example label"
    name="ejemplo"
  />
*/