import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function ServiceInfoForm() {

    const [service, setService] = useState({})
    let { id } = useParams()

    function fetchData() {
        fetch("http://91.201.214.131:8080/services/" + id).
            then(res => res.json()).
            then(data => {
                setService(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const navigate = useNavigate()

    function handleSubmit() {

        let cbody = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: service.id, name: service.name})
        }

        fetch('http://91.201.214.131:8080/services', cbody)
        navigate("/services")
    }

    function handleNameInputChange(e) {
        setService({...service, name: e.target.value})
    }

    return (
        <div id="courier-div">
            <label htmlFor="courier-name">
                Name:
                <input type="text" value={service.name === undefined ? "" : service.name} onChange={handleNameInputChange} id="courier-name" name="name"/>
            </label>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export {
    ServiceInfoForm
}