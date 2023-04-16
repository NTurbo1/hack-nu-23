import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function OperatorInfoForm() {

    const [operator, setOperator] = useState({})
    let { id } = useParams()

    function fetchData() {
        fetch("http://91.201.214.131:8080/operators/" + id).
            then(res => res.json()).
            then(data => {
                setOperator(data)
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
            body: JSON.stringify({ id: operator.id, login: operator.login, name: operator.name, password: operator.password})
        }

        fetch('http://91.201.214.131:8080/operators', cbody)
        navigate("/operators")
    }

    function handleNameInputChange(e) {
        setOperator({ ...operator, name: e.target.value})
    }

    function handleLoginInputChange(e) {
        setOperator({...operator, login: e.target.value})
    }

    function handlePasswordInputChange(e) {
        setOperator({...operator, password: e.target.value})
    }

    return (
        <div id="operator-div">
            <label htmlFor="operator-name">
                Name:
                <input type="text" value={operator.name=== undefined ? "" : operator.name} onChange={handleNameInputChange} id="operator-name" name="name"/>
            </label>

            <label htmlFor="operator-login">
                Login:
                <input type="text" value={operator.login=== undefined ? "" : operator.login} onChange={handleLoginInputChange} id="operator-login" name="login"/>
            </label>

            <label htmlFor="operator-password">
                Password:
                <input type="text" value={operator.password=== undefined ? "" : operator.password} onChange={handlePasswordInputChange} id="operator-password" name="password"/>
            </label>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export {
    OperatorInfoForm
}
