import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function View() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/User')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log("Error:", err);
            });
    }, []);

    const handleDelete = (id) => {
        const Confirm = window.confirm("Are you sure Delete");
        if (Confirm) {
            axios.delete(`http://localhost:3000/User/${id}`).then((res) => {
                location.reload();
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <Container>
            <div className='view-container'>
                <div className='add-button'>
                    <NavLink to="/">
                        <Button variant='primary'>ADD USER</Button>
                    </NavLink>
                </div>
                <Table striped bordered hover className='user-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link to={`/Read/${user.id}`}>
                                        <Button variant='info' className='action-button me-2'>Read</Button>
                                    </Link>
                                    <Link to={`/Update/${user.id}`}>
                                        <Button variant='success' className='action-button me-2'>Update</Button>
                                    </Link>
                                    <Button variant='danger' onClick={() => handleDelete(user.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>

    );
}

export default View;
