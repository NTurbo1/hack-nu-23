import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'

function OrderPage({clientInfo}) {

    const [services, setServices] = useState([])
    const [client, setClient] = useState(
      {
        requestId: "Request 1",
        issuingDepartment: "Department 1",
        clientName: clientInfo.firstName,
        clientSurname: clientInfo.lastName,
        clientIin: clientInfo["\"iin"],
        clientPhone: "",
        destinationStreet: "",
        destinationHome: "",
        destinationFlat: "",
        status: {"id": 1},
        price: 1000.124,
        service: {}
      }
    )

      const fetchData = () => {
          fetch("http://91.201.214.131:8080/services")
              .then(response => {
                  return response.json()
              })
              .then(data => {
                  setServices(data)
                  fetch("http://91.201.214.131:8080/phone/" + clientInfo["\"iin"])
                    .then(res => res.json())
                    .then(data => {
                      setClient({...client, clientPhone: data})

                      console.log(client);
                    })
              })
      }

      useEffect(() => {
          fetchData()
      }, [])

      const navigate = useNavigate()

      function handleSubmit() {
        navigate("/payment", {
          clientInfo: clientInfo
        })
      }

      function handleSelectChange(selectedOption) {
          setClient({...client, service: selectedOption.value})
      }

  return (
    <div className='order-page'>
      <h2 className='section-header' id='documents-heading'>ДОСТАВКА ДОКУМЕНТОВ</h2>

      <div className='order-details'>
        <span className='order-number'>Заказ № 7687682173612783621873</span>
        <span className='order-definition'>Определение кадастровой (оценочной) стоимости земельного участка</span>
      </div>
      
      <div className='department-info'> 
        <h2 className='section-header' id='department-heading'>ОТДЕЛЕНИЕ</h2>
        <span className='department-name'>Отдел №2 илоиршгрлтрои оуашкурщмшку шукопщшкопук укшпшкщоп укшпокшопщ укшпоукшукшопкушопзщукп укпоку окп</span>
      </div>

      <div className='reciever-info'>
        <h2 className='section-header' id='receiver-heading'>ДАННЫЕ ПОЛУЧАТЕЛЯ</h2>
        <div className='receiver-inputs'>
          <div className='iin-input-box'>
              <label className='receiver-label'>
                  ИИН
              </label>
              <input value={client.clientIin} onChange={e => {
                setClient({...client, clientIin: e.target.value})
              }}/>
          </div>

          <div className='name-input-box'>
              <label className='receiver-label'>
                  ИМЯ
              </label>
              <input value={client.clientName} onChange={e => {
                setClient({...client, clientName: e.target.value})
              }}/>
          </div>

          <div className='lastName-input-box'>
              <label className='receiver-label'>
                  ФАМИЛИЯ
              </label>
              <input value={client.clientSurname} onChange={e => {
                setClient({...client, clientSurname: e.target.value})
              }}/>
          </div>

          <div className='phone-input-box'>
              <label className='receiver-label'>
                  НОМЕР ТЕЛЕФОНА
              </label>
              <input value={client.clientPhone} onChange={e => {
                setClient({...client, clientPhone: e.target.value})
              }}/>
          </div>
        </div>
      </div>

      <div className='delivery-info'>
        <h2 className='section-header'>АДРЕС ДОСТАВКИ</h2>
        <label className='delivery-label'>
            УЛИЦА
            <input value={client.destinationStreet} onChange={e => {
              setClient({...client, destinationStreet: e.target.value})
            }}/>
        </label>
        <label className='delivery-label'>
            ДОМ
            <input value={client.destinationHome} onChange={e => {
              setClient({...client, destinationHome: e.target.value})
            }}/>
        </label>
        <label className='delivery-label'>
            КВАРТИРА
            <input value={client.destinationFlat} onChange={e => {
              setClient({...client, destinationFlat: e.target.value})
            }}/>
        </label>
      </div>

      <div>
        <h2>Choose courier service</h2>
        <Select options={services.map(service => {
            return {value: {id: service.id}, label: service.name}
        })} onChange={handleSelectChange}/>
      </div>

      <div>
        <label>
            Я принимаю условия <a href='#'>публичного договора-оферты</a>
            <input type='checkbox'/>
        </label>
        
        <label>
            Я ознакомлен и согласен с <a href='#' >условиями политики конфиденциальности и персональных данных</a>
            <input type='checkbox'/>
        </label>
      </div>

      <div>
        <Link to="/payment" state={client}>Отправить</Link>
      </div>
    </div>
  )
}

export {
    OrderPage
}
