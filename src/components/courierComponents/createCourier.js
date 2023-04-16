import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from "react-select";

function CreateCourier() {
    const [courier, setCourier] = useState(
        {
            name: "",
            login: "",
            password: "",
            service: {}
        }
    )

    const [services, setServices] = useState([])

    function fetchData() {
        fetch("http://91.201.214.131:8080/services")
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const navigate = useNavigate()

    function handleSubmit() {

        if (courier.name.length > 0 && courier.password.length > 0) {
            let cbody = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: courier.name, login: courier.login, password: courier.password, service: courier.service})
            }
    
            fetch('http://91.201.214.131:8080/couriers', cbody)
            navigate("/couriers")
        }
    }

    function handleNameInputChange(e) {
        setCourier({...courier, name: e.target.value})
    }

    function handleLoginInputChange(e) {
        setCourier({...courier, login: e.target.value})
    }

    function handlePasswordInputChange(e) {
        setCourier({...courier, password: e.target.value})
    }

    function handleSelectChange(selectedOption) {
        setCourier({...courier, service: selectedOption.value})
    }

  return (
    <div id="courier-div">
        <label htmlFor="courier-name">
            Name:
            <input type="text" value={courier.name} onChange={handleNameInputChange} id="courier-name" name="name"/>
        </label>

        <label htmlFor="courier-login">
            Login:
            <input type="text" value={courier.login} onChange={handleLoginInputChange} name="login" id="courier-login"/>
        </label>

        <label htmlFor="courier-password">
            Password:
            <input type="text" value={courier.password} onChange={handlePasswordInputChange} name="password" id="courier-password"/>
        </label>

        <Select options={services.map(service => {
            return {value: {id: service.id}, label: service.name}
        })} onChange={handleSelectChange}/>

        <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export {
    CreateCourier
}
