
const CardImage = props => {
  return <img {...props} className="card-img" />
}

const CardBody = props => {
  return <div className={`card-body ${typeof props.className!= 'undefined' ? props.className : ''}`}>
    {props.children}
  </div>
}

const CardFooter = props => {
  return <div className={`card-footer bg-transparent ${ typeof props.className != 'undefined' ? props.className : ''}`}>
    {props.children}
  </div>
}

const Card = props => {
  const _cardClass = `card h-400 ${typeof props.name !== "undefined" ? props.name : ''}`;
  return <div className={_cardClass}>
    {props.children}
  </div>
}

export {Card, CardImage, CardBody, CardFooter}