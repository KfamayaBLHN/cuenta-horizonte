import CardBoostrap from 'react-bootstrap/Card';

const Card = props => {
  return (
    <CardBoostrap bsPrefix="card border border-0 shadow-sm mx-md-2 my-1 d-flex">
      <CardBoostrap.Img variant="top" src={props.img} alt={props.imgAlt ?? ''} title={props.imgTitle ?? ''} width={props.imgWidth} height={props.imgHeight}/>
      <CardBoostrap.Body bsPrefix="no-card-body p-4 d-flex flex-column h-100">
        {props.children}
      </CardBoostrap.Body>
    </CardBoostrap>
  ); 
}

export default Card;
