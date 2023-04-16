import React, { useState } from 'react'

function CreateService() {
    const [service, setService] = useState(
        {
            name: ""
        }
    )

    function handleSubmit() {

        if (service.name.length > 0) {
            let cbody = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: service.name})
            }
    
            fetch('http://91.201.214.131:8080/services', cbody)
        }
    }

    function handleNameInputChange(e) {
        setService({name: e.target.value})
    }

  return (
    <div id="service-div">
        <label htmlFor="service-name">
            Name:
            <input type="text" value={service.name} onChange={handleNameInputChange} id="service-name" name="name"/>
        </label>

        <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export {
    CreateService
}