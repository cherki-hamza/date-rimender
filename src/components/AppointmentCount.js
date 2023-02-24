import React from 'react'
import { Row,Col } from 'react-bootstrap'

const AppointmentCount = ({users}) => {
  return (
    <Row className="justify-content-center my-2">
    <Col sm="8" className="">
        You Have <span className="text-center badge rounded-pill bg-danger"> {users.length} </span> Appointments
    </Col>
 </Row>
  )
}

export default AppointmentCount