import React, { useState } from 'react'
import styles from './styles.module.scss';

/**
 * LoadMore
 * @description: Componente que carga contenido por partes
 * @param {Object} props - Propiedades del componente
 * @returns React Component
 */
const LoadMore = props => {

  // variables
  const [count, setCount] = useState(1);
  const max = Math.ceil(props.children.length / 3);

  /**
   * createGroups
   * @description: Crea los grupos a mostrar
   * @returns Array
   */
  const createGroups = function () {
    let groups = [];
    let temp = [];
    props.children.forEach((item, i) => {
      temp.push(item);
      if (temp.length == 3) {
        groups.push([...temp]);
        temp = [];
      }
    });
    groups.push([...temp]);

    return groups;
  }

  /**
   * RenderGroups
   * @description: Crea los grupos y sus contenedores
   * @returns 
   */
  const RenderGroups = function () {
    const groups = createGroups();
    return <>
      {
        groups.map((group, i) => {
          return <div key={i} className={`${styles.group} ${count > i ? styles.group_active : ''}`} >
            <div className="row row-cols-1 row-cols-md-3 justify-content-center pt-3">
              <RenderItems items={group} />
            </div>
          </div>
        })
      }
    </>
  }

  /**
   * RenderItems
   * @description: Hace el render de cada uno de los childs enviados al componente
   * @param {Object} Props.items - Contiene cada uno de los childs del componente
   * @returns 
   */
  const RenderItems = function ({ items }) {
    return <>
      {
        items.map((item, i) => {
          return <div key={i} className="col">{item}</div>;
        })
      }
    </>
  }

  /**
   * doLoad
   * @description: Carga los bloques
   * @param {*} e 
   */
  const doLoad = function (e) {
    e.preventDefault();
    if (count < max) {
      setCount(count + 1);
    }
  }



  return <>
    <RenderGroups />
    <div className="d-flex justify-content-center my-5">
      {
        count == max ? <button className={`link h5 ${styles.btn}`} onClick={() => setCount(1)}>‹ Ver menos tarjetas</button> : <button className={`link h5 ${styles.btn}`} onClick={doLoad.bind(this)}>Ver más tarjetas ›</button>
      }
    </div>
  </>
}

export default LoadMore;

/**
 * 
 Ejemplo:
 <LoadMore>
  ... aqui debe ir solo las etiquertas card nada mas
 </LoadMore>
 */