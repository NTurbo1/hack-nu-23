import React from 'react'
import { json, useLocation, useNavigate } from 'react-router-dom'

function PaymentPage() {

    const client = useLocation()

    const navigate = useNavigate()

    function handlePayment() {
        fetch("http://91.201.214.131:8080/orders", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(client.state)
        })

        navigate("/client")
    }

  return (
    <div>
      <button onClick={handlePayment}>
        Оплатить
      </button>
    </div>
  )
}

export {
    PaymentPage
}
