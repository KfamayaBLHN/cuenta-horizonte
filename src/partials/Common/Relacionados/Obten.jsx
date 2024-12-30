import { Card, CardImage, CardBody, CardFooter } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images'

export default props => {
  return <Card>
    <Img name="ObtenSvg" className="card-img" />
    <CardBody>
      <h3 className="fs-5 pb-1 pt-2">
        Más intereses
      </h3>
      <p className="pb-2">
        por incremento de saldo
      </p>
    </CardBody>
  </Card>
}