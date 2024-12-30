import { Card, CardBody } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images'

export default props => {

  return <Card>
    <Img name="AdministraSvg" className="card-img"/>
    <CardBody>
      <h3 className="fs-5 pb-1 pt-2">
        Administra
      </h3>
      <p className="pb-2">
        tu dinero desde Bancanet
      </p>
    </CardBody>
  </Card>
}