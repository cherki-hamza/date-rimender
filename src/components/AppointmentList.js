import React from 'react'
import { Row,Col } from 'react-bootstrap'

const AppointmentList = ({users}) => {
  return (
    <Row className="justify-content-center">
            <Col sm="8" className="">
               <div className="rectangle p-2">

                 {
                  users.length ? users.map((user)=> {
                    return(
                      <div className="d-flex border-bottom mx-3 my-2" key={user.id}>

                        <img className="img-avatar" src={(user.img) ?? 'logo512.png'} alt="cherki hamza" />
                        
                        <div className="px-3">
                          <p className="d-inline fs-5">{user.username}</p>
                          <p className="fs-6">{user.date}</p>
                        </div>
                      </div>
                    );
                  }) : (<h4 className="alert alert-warning text-danger p-5 text-center">Oops There are no appointments</h4>) 
                 }

               </div>
            </Col>
         </Row>
  )
}

export default AppointmentList