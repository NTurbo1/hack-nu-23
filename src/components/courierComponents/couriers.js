import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Couriers() {

    const [couriers, setCouriers] = useState([])

    const fetchData = () => {
        fetch("http://91.201.214.131:8080/couriers")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCouriers(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const navigate = useNavigate()

    function handleCreateBtn() {
        navigate("/couriers/0")
    }

    function handleDeleteBtn(e) {
        const id = e.target.parentElement.parentElement.firstChild.textContent

        let cbody = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }

        fetch('http://91.201.214.131:8080/couriers/' + id, cbody)
        navigate("/couriers")
    }

    return (
        <div className="content-div">
            <div className="page-header">
                <span className="page-title">Couriers</span>
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
                        couriers.map(courier => {
                            return (
                                <tr key={couriers.indexOf(courier)} className={(couriers.indexOf(courier) % 2 === 0) ? "row-2" : "row-1"}>
                                    <td className="id-data">{courier.id}</td>
                                    <td className="name-data">{courier.name}</td>
                                    <td className="phone-data">{courier.login}</td>
                                    <td className="password-data">{courier.password}</td>
                                    <td className="edit-btn-cell">
                                        <div className="edit-btn">
                                            <Link to={"/couriers/" + courier.id}>Edit</Link>
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
    Couriers
}