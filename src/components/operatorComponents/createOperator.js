import React, { useState } from 'react'

function CreateOperator() {
    const [operator, setOperator] = useState(
        {
            name: "",
            login: "",
            password: ""
        }
    )

    function handleSubmit() {

        if (operator.name.length > 0 && operator.password.length > 0) {
            let cbody = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: operator.name, password: operator.password})
            }
    
            fetch('http://91.201.214.131:8080/operators', cbody)
        }
    }

    function handleNameInputChange(e) {
        setOperator({name: e.target.value, ...operator})
    }

    function handleLoginInputChange(e) {
        setOperator({login: e.target.value, ...operator})
    }

    function handlePasswordInputChange(e) {
        setOperator({password: e.target.value, ...operator})
    }

  return (
    <div id="operator-div">
        <label htmlFor="operator-name">
            Name:
            <input type="text" value={operator.name} onChange={handleNameInputChange} id="operator-name" name="name"/>
        </label>

        <label htmlFor="operator-login">
            Login:
            <input type="text" value={operator.login} onChange={handleLoginInputChange} name="login" id="operator-login"/>
        </label>

        <label htmlFor="operator-password">
            Password:
            <input type="text" value={operator.password} onChange={handlePasswordInputChange} name="password" id="operator-password"/>
        </label>

        <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export {
    CreateOperator
}
