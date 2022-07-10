import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';


export default function Users() {

    const [users, setUsers] = new useState([]);
    const [mode, setMode] = new useState('online');

    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then((rs) => {
            rs.json().then(result => {
                localStorage.setItem('users', JSON.stringify(result))
                setUsers(result)
            })
        }).catch(err => {
            alert("catch block")
            setMode('offline')
            let collection = localStorage.getItem('users')
            setUsers(JSON.parse(collection))
        })
    }, [])


    return <>
        <div> {mode == 'offline' ? <div className='alert alert-warning' role="alert">You are in offline mode or issue with your Internet connection </div>: null} </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>username</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item, i) => (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td> {item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </>
}