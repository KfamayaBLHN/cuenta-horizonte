import AccordionBootstrap from 'react-bootstrap/Accordion';
import styles from './accordion.module.scss';

const Accordion = props => {
  return (
    <AccordionBootstrap bsPrefix={`accordion ${styles.accordion}`} defaultActiveKey="0">
      {props.children}
    </AccordionBootstrap>
  );
}

const Item = props => {
  return (
    <AccordionBootstrap.Item bsPrefix={`accordion-item ${styles['accordion-item']}`} eventKey={props.index}>
      <AccordionBootstrap.Header bsPrefix={`accordion-header ${styles['accordion-header']}`}>
        <div className="pe-2">{props.label}</div>
      </AccordionBootstrap.Header>
      <AccordionBootstrap.Body bsPrefix={`accordion-body ${styles['accordion-body']}`}>
        {props.children}
      </AccordionBootstrap.Body>
    </AccordionBootstrap.Item>
  )
}

Accordion.Item = Item
export default Accordion;
