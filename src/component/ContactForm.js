import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap'

const ContactForm = () => {
    const [name,setName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');

  return (
    <div>
        <Form>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>이름</Form.Label>
            <Form.Control onChange={(event)=>{setName(event.target.value); console.log(event.target.value)}} type="text" placeholder="이름을 입력해주세요."/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
            <Form.Label>전화번호</Form.Label>
            <Form.Control onChange={(event)=>{setPhoneNumber(event.target.value); console.log(event.target.value)}} type="number" placeholder="전화번호를 입력해주세요." />
        </Form.Group>
        <Button variant="primary" type="submit">추가</Button>
        </Form>
    </div>
  )
}

export default ContactForm