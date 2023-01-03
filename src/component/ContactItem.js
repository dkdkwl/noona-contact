import React from 'react'
import { Row,Col } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <Row>
        <Col lg={1}>
            <img width={50} src="https://cdn-icons-png.flaticon.com/512/5312/5312933.png" alt="" />
        </Col>
        <Col lg={11}>
            <h4>{item?.name}</h4>
          <p>{item?.phoneNumber}</p>
        </Col>
    </Row>
  )
}

export default ContactItem