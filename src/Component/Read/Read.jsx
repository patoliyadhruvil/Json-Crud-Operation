import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'

function Read() {

    const [data, setData] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/User/${id}`).then((res) => {
            setData(res.data);
        }).catch((err) => {
            console.log(err);
        })
    })


    return (
        <>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
                <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                    <h3>Detail of Users</h3>
                    <div className='mb-2'>
                        <strong>Name: {data.name}</strong>
                    </div>
                    <div className='mb-2'>
                        <strong>Email: {data.email}</strong>
                    </div>
                    <div className='mb-3'>
                        <strong>Phone: {data.phone}</strong>
                    </div>
                    <Link to={`/Update/${data.id}`}>
                        <Button variant='success' className='action-button me-2'>Update</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Read
