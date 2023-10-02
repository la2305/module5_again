import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./myStyle.css"
import Footer from "./components/header_footer/Footer";
import Header from "./components/header_footer/Header";
import FacilityList from "./components/facility/FacilityList";
import FacilityCreate from "./components/facility/FacilityCreate";
import FacilityEdit from "./components/facility/FacilityEdit";
import CustomerList from "./components/customer/CustomerList";
import CustomerCreate from "./components/customer/CustomerCreate"
import CustomerEdit from "./components/customer/CustomerEdit";
import ContractList from "./components/contract/ContractList"
import ContractCreate from "./components/contract/ContractCreate";


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<FacilityList></FacilityList>}></Route>
        <Route path="/facility/create" element={<FacilityCreate></FacilityCreate>}></Route>
        <Route path="/facility/edit/:id" element={<FacilityEdit></FacilityEdit>}></Route>
        <Route path="/customer" element={<CustomerList></CustomerList>}></Route>
        <Route path="/customer/create" element={<CustomerCreate></CustomerCreate>}></Route>
        <Route path="/customer/edit/:id" element={<CustomerEdit></CustomerEdit>}></Route>
        <Route path="/contract" element={<ContractList></ContractList>}></Route>
        <Route path="/contract/create" element={<ContractCreate></ContractCreate>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
