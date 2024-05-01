import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

function Create() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setValues({ ...values, [name]: value });
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post('http://localhost:3000/User', values).then((res) => {
            console.log(res);
            navigate("/view")
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <>
            <Container>
                <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
                    <div className='bg-white shadow px-5 pt-3 pb-5 rounded'>
                        <div className='d-flex justify-content-between mb-4'>
                            <h4 style={{ fontWeight: "600" }}>Add The Users</h4>
                            <NavLink to={"/view"}>
                                <button className='bg-dark text-light'>View</button>
                            </NavLink>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label style={{ fontWeight: "500" }}>Name : </Form.Label>
                                    <Form.Control type="name" name="name" value={values.name} onChange={handleChange} placeholder="Enter The Name" />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-2">
                                    <Form.Label style={{ fontWeight: "500" }}>Email : </Form.Label>
                                    <Form.Control type="email" name="email" value={values.email} onChange={handleChange} placeholder="Enter The email" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label style={{ fontWeight: "500" }}>Phone : </Form.Label>
                                    <Form.Control type="number" name="phone" value={values.phone} onChange={handleChange} placeholder="Enter The phone" />
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form >
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Create
