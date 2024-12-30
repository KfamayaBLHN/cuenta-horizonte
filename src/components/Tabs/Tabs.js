import React, { useState, useEffect, useContext } from 'react';
import styles from './Tabs.module.scss';

const TabPane = props => {
  return <>
    {props.children}
  </>
}


const Tabs = props => {

  const [opts, setOpts] = useState({
    fill: false,
    useMobileMode: true
  });

  useEffect(() => {
    const _opts = { ...opts };
    _opts.fill = typeof props.fill !== null ? props.fill : false
    _opts.useMobileMode = typeof props.useMobileMode === "undefined" ? true : props.useMobileMode;
    setOpts(_opts);
  }, []);


  const RenderNavItem = (props) => {
    let isActive = typeof props.active !== 'undefined' ? props.active : false;
    return <li className="nav-item" role="presentation">
      <button className={`nav-link ${isActive ? 'active' : ''}`} id={`${props.name}-tab`} data-bs-toggle="tab" data-bs-target={`#${props.name}`} type="button" role="tab" aria-controls={props.name} aria-selected={isActive}>{props.label}</button>
    </li>
  }

  const RenderAccordion = props => {
    let isActive = typeof props.active !== 'undefined' ? props.active : false;
    return <div className="accordion-item mb-2 mb-md-0">
    <div className="accordion-header d-md-none">
      <button className={`accordion-button ${isActive ? '' : 'collapsed'} ${styles['accordion-button']}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${props.name}`} aria-expanded={isActive} aria-controls={`collapse${props.name}`}>
        {props.label}
      </button>
    </div>
    <div id={`collapse-${props.name}`} className={`accordion-collapse collapse ${isActive ? 'show' : ''} ${styles['accordion-collapse']}`} aria-labelledby="headingOne" data-bs-parent=".accordion">
      <div className="accordion-body">
      {props.children}      
      </div>
    </div>
  </div>
  }

  const RenderTabPane = props => {
    
    let isActive = typeof props.active !== 'undefined' ? props.active : false;
    return (
    <div className={`tab-pane fade ${ styles['tab-pane'] } ${isActive ? 'show active' : ''}`} id={`${props.name}`} role="tabpanel" aria-labelledby={`${props.name}-tab`} tabIndex="0">
      { opts.useMobileMode ? <RenderAccordion {...props}/> : <>{props.children}</> }
      {/* <div className="accordion-item mb-2 mb-md-0">
        <div className="accordion-header d-md-none">
          <button className={`accordion-button ${isActive ? '' : 'collapsed'} ${styles['accordion-button']}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${props.name}`} aria-expanded={isActive} aria-controls={`collapse${props.name}`}>
            {props.label}
          </button>
        </div>
        <div id={`collapse-${props.name}`} className={`accordion-collapse collapse ${isActive ? 'show' : ''} ${styles['accordion-collapse']}`} aria-labelledby="headingOne" data-bs-parent=".accordion">
          <div className="accordion-body">
          {props.children}      
          </div>
        </div>
      </div> */}
    </div>
    )
  }

  return <>
    <ul className={`nav nav-tabs ${styles['nav-tabs']} ${opts.fill ? 'nav-fill' : ''} ${opts.useMobileMode ? 'd-none d-md-flex' : ''}`} role="tablist">
      {props.children.map((navItem, i) => {
        return <RenderNavItem {...navItem.props} index={i} key={i} />
      })}
    </ul>
    <div className={`${opts.useMobileMode ? `accordion ${styles['is-accordion-mobile']}` : ''}`}>
      <div className="tab-content">
        {props.children.map((paneItem, i) => {
          return <RenderTabPane {...paneItem.props} key={i} />
        })}
      </div>
    </div>
  </>
}

export { Tabs, TabPane };