import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Orders() {

    const [orders, setOrders] = useState([])

    const fetchData = () => {
        fetch("http://91.201.214.131:8080/orders/status/2")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setOrders(data)
                console.log(data);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    function handleAcceptBtn(e) {
        const id = e.target.parentElement.parentElement.firstChild.textContent

        fetch("http://91.201.214.131:8080/orders/" + id + "/finish", {
            method: 'POST'
        })
            .then(res => {
                return fetch("http://91.201.214.131:8080/orders/status/2")
            })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setOrders(data)
                console.log(data);
            })
    }

    return (
        <div className="content-div">
            <div className="page-header">
                <span className="page-title">Orders</span>
            </div>
            <table className="info-table">
                <tbody>
                    <tr className="row-1">
                        <th className="id-header">№</th>
                        <th className="name-header">Имя получателя</th>
                        <th className="phone-header">Адрес доставки</th>
                        <th className="password-header">Имя Курьера</th>
                        <th className="date-header">Дата оформления</th>
                        <th className="accept-header">Выдать</th>
                    </tr>

                    {   
                        orders.map(order => {
                            return (
                                <tr key={orders.indexOf(order)} className={(orders.indexOf(order) % 2 === 0) ? "row-2" : "row-1"}>
                                    <td className="id-data">{order.id}</td>
                                    <td className="name-data">{order.clientName}</td>
                                    <td className="address-data">{order.destinationStreet + ", " + order.destinationHome}</td>
                                    <td className="courier-data">{order.courier.name}</td>
                                    <td className="date-data">{order.createdAt.split("T")[0]}</td>
                                    <td className="date-data"><button className='order-accept-btn' onClick={handleAcceptBtn}>Выдать</button></td>
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
    Orders
}