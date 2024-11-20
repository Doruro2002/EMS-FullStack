import React, { useEffect, useState } from 'react'
import { listEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function ListEmployee() {
    const [employee, setEmployee]=useState([]);
    const navigator = useNavigate();
    useEffect(()=>{
        listEmployee().then(Response=>{
            setEmployee(Response.data);
        }).catch(Error=>{
            console.error(error);
        })
    })
    function addEmployee() {
        navigator('/add')
    }
        
    return (
        <div className='container'>
            <h2 className='text-center'>List of Employees</h2>
            <div className="employee-info">
                <button className='btn btn-primary' onClick={addEmployee}>Add</button>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <th>id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>email</th>
                    </thead>
                    <tbody>
                        {
                            employee.map(employee=>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>        
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmployee