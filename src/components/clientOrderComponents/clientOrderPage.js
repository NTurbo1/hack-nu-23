import React, { useState } from 'react'

import { ClientPage } from './clientPage'
import { OrderPage } from './orderPage'

function ClientOrderPage() {
    const [clientInfo, setClientInfo] = useState({})
    const [clientPageRendered, setClientPageRendered] = useState(true)

  return (
    <div className='client-order-page'>
        {clientPageRendered && <ClientPage setClientInfo = {setClientInfo} setClientPageRendered = {setClientPageRendered}/>}
        {!clientPageRendered && <OrderPage clientInfo = {clientInfo}/>}
    </div>
  )
}

export {
    ClientOrderPage
}
