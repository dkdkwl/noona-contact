import React from 'react'
import { Row,Col } from 'react-bootstrap'

const ContactItem = () => {
  return (
    <Row>
        <Col lg={1}>
            <img width={50} src="https://cdn-icons-png.flaticon.com/512/5312/5312933.png" alt="" />
        </Col>
        <Col lg={11}>
            <div>테스트</div>
            <div>01023455678</div>
        </Col>
    </Row>
  )
}

export default ContactItem