import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Services } from "./components/serviceComponents/services";
import { AdminPage } from "./components/adminPage";
import './styles/admin-page-style.css';
import { CourierInfoForm } from "./components/courierComponents/courierInfoForm";
import { ServiceInfoForm } from "./components/serviceComponents/serviceInfoForm";
import { Couriers } from "./components/courierComponents/couriers";
import { Operators } from "./components/operatorComponents/operators";
import { OperatorInfoForm } from "./components/operatorComponents/operatorInfoForm";
import { CreateCourier } from "./components/courierComponents/createCourier";
import { ClientOrderPage } from "./components/clientOrderComponents/clientOrderPage";
import { PaymentPage } from "./components/clientOrderComponents/paymentPage";
import { OperatorPage } from "./components/clientOrderComponents/operatorPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPage/>}>
          <Route path="/services" element={<Services/>}/>
          <Route path="/services/:id" element={<ServiceInfoForm/>}/>
          <Route path="/couriers" element = {<Couriers />}/>
          <Route path="/couriers/0" element = {<CreateCourier />}/>
          <Route path="/couriers/:id" element = {<CourierInfoForm />}/>
          <Route path="/operators" element = {<Operators />}/>
          <Route path="/operators/:id" element = {<OperatorInfoForm />}/>
        </Route>

        <Route path="/client" element={<ClientOrderPage/>} />
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path="/operator" element={<OperatorPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
