import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

function Update() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/User/${id}`)
            .then((res) => {
                setValues(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/User/${id}`, values)
            .then((res) => {
                console.log(res);
                navigate("/view");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Container>
            <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
                <div className='bg-white shadow px-5 pt-3 pb-5 rounded'>
                    <div className='d-flex justify-content-between mb-4'>
                        <h4 style={{ fontWeight: "600" }}>Update User</h4>
                        <NavLink to="/view">
                            <Button variant="dark">View</Button>
                        </NavLink>
                    </div>
                    <Form onSubmit={handleUpdate}>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label style={{ fontWeight: "500" }}>Name:</Form.Label>
                                <Form.Control type="text" name="name" value={values.name} onChange={handleChange} placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-2">
                                <Form.Label style={{ fontWeight: "500" }}>Email:</Form.Label>
                                <Form.Control type="email" name="email" value={values.email} onChange={handleChange} placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label style={{ fontWeight: "500" }}>Phone:</Form.Label>
                                <Form.Control type="tel" name="phone" value={values.phone} onChange={handleChange} placeholder="Enter Phone" />
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </div>
            </div>
        </Container>
    );
}

export default Update;
