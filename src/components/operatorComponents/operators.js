import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Operators() {

    const [operators, setOperators] = useState([])

    const fetchData = () => {
        fetch("http://91.201.214.131:8080/operators")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setOperators(data)
                console.log(data);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const navigate = useNavigate()

    function handleCreateBtn() {
        navigate("/operators/0")
    }

    function handleDeleteBtn(e) {
        const id = e.target.parentElement.parentElement.firstChild.textContent

        let cbody = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }

        fetch('http://91.201.214.131:8080/operators/' + id, cbody)
    }

    return (
        <div className="content-div">
            <div className="page-header">
                <span className="page-title">Operators</span>
                <button onClick={handleCreateBtn} className="create-btn">Create</button>
            </div>
            <table className="info-table">
                <tbody>
                    <tr className="row-1">
                        <th className="id-header">ID</th>
                        <th className="name-header">Name</th>
                        <th className="phone-header">Phone</th>
                        <th className="password-header">Password</th>
                        <th className="edit-header">Edit</th>
                        <th className="delete-header">Delete</th>
                    </tr>

                    {   
                        operators.map(operator => {
                            return (
                                <tr key={operators.indexOf(operator)} className={(operators.indexOf(operator) % 2 === 0) ? "row-2" : "row-1"}>
                                    <td className="id-data">{operator.id}</td>
                                    <td className="name-data">{operator.name}</td>
                                    <td className="phone-data">{operator.login}</td>
                                    <td className="password-data">{operator.password}</td>
                                    <td className="edit-btn-cell">
                                        <div className="edit-btn">
                                            <Link to={"/operators/" + operator.id}>Edit</Link>
                                        </div>
                                    </td>
                                    <td className="delete-btn-cell">
                                        <button className="delete-btn" onClick={handleDeleteBtn}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export {
    Operators
}