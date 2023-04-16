import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Services() {

    const [services, setServices] = useState([])

    const fetchData = () => {
        fetch("http://91.201.214.131:8080/services")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setServices(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const navigate = useNavigate()
    function handleCreateBtn() {
        navigate("/services/0")
    }

    function handleDeleteBtn(e) {
        const id = e.target.parentElement.firstChild.textContent

        let cbody = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }

        fetch('http://91.201.214.131:8080/services/' + id, cbody)
    }

    return (
        <div className="content-div">
            <div className="page-header">
                <span className="page-title">Services</span>
                <button onClick={handleCreateBtn} className="create-btn">Create</button>
            </div>
            <table className="info-table">
                <tbody>
                    <tr className="row-1">
                        <th className="id-header">ID</th>
                        <th className="name-header">Name</th>
                        <th className="edit-header">Edit</th>
                        {/* <th className="delete-header">Delete</th> */}
                    </tr>

                    {   
                        services.map(service => {
                            return (
                                <tr key={services.indexOf(service)} className={(services.indexOf(service) % 2 === 0) ? "row-2" : "row-1"}>
                                    <td className="id-data">{service.id}</td>
                                    <td className="name-data">{service.name}</td>
                                    <td className="edit-btn-cell">
                                        <div className="edit-btn">
                                            <Link to={"/services/" + service.id}>Edit</Link>
                                        </div>
                                    </td>
                                    {/* <td  className="delete-btn-cell">
                                        <button className="delete-btn" onClick={handleDeleteBtn}>
                                            Delete
                                        </button>
                                    </td> */}
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
    Services
}