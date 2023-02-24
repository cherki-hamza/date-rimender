import React from 'react'
import { Row,Col } from 'react-bootstrap'

const AppointmentActions = ({deletUsers,viewUsers}) => {
  return (
    <Row className="justify-content-center my-2">
        <Col sm="8" className="d-flex justify-content-between">
            <button onClick={deletUsers} className="btn-style p-2">Delete All</button>
            <button onClick={viewUsers} className="btn-style p-2">Show All </button>
        </Col>
    </Row>
  )
}

export default AppointmentActions