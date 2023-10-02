import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { getCustomerType } from "../../service/CustomerType";
import { useState } from "react";
import { useEffect } from "react";
import { createCustomer } from "../../service/CustomerService";


const CustomerCreate = () => {  
  const navigate = useNavigate();
  const [customerType, setCustomerType] = useState([]);

  const loadCustomerType = async () =>{
    const respon = await getCustomerType();
    setCustomerType(respon);
  }

  useEffect(() =>{ 
    loadCustomerType();
  },[]);
  const handleSubmit = (values) =>{
    const newValue ={...values,customerType: JSON.parse(values.customerType)}
    createCustomer(newValue);
    console.log(newValue);
    navigate("/customer");
  }

  return (
    <>
      <Formik initialValues={{
        name:"",
        dob:"",
        gender: "",
        identity:"",
        phone:"",
        email:"",
        customerType: `${JSON.stringify({
          id: 5,
          name: "Member"
        })}`,
        location:""
      }} validationSchema={Yup.object({
        name: Yup.string("").required("name can not empty").matches(/^(?:[A-Z][a-z]*\s?)+$/,"Customer names cannot contain numbers. And the first letters of each word must be capitalized."),
        dob: Yup.string("").required("dob can not empty"),
        gender: Yup.string("").required("gender can not empty"),
        identity: Yup.string("").required("identity can not empty").matches(/^[0-9]{9}$|^[0-9]{12}$/,"identity must be correct the format"),
        phone: Yup.string("").required("phone can not empty"),
        email: Yup.string("").required("email can not empty"),
        type: Yup.string("").required("type can not empty"),
        location: Yup.string("").required("location can not empty")
      })} onSubmit={(values) => handleSubmit(values)}>
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <Form>
                <div>
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="name">Name</label>
                    </h6>
                    <Field
                      className="form-control mt-2"
                      id="name"
                      name="name"
                      type="text"
                    ></Field>
                    <ErrorMessage
                      name="name"
                      className="text-danger"
                      component="span"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="dob">Date Of Birth</label>
                    </h6>
                    <Field
                      className="form-control mt-2"
                      id="dob"
                      name="dob"
                      type="date"
                    ></Field>
                    <ErrorMessage
                      name="dob"
                      className="text-danger"
                      component="span"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="gender">Gender</label>
                    </h6>
                    <Field
                      as="select"
                      className="form-control mt-2"
                      id="gender"
                      name="gender"
                    >
                      <option value={""}>-Option-</option>
                      <option value={true}>Male</option>
                      <option value={false}>Female</option>
                    </Field>
                    <ErrorMessage
                      name="gender"
                      className="text-danger"
                      component="span"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="identity">Identity</label>
                    </h6>
                    <Field
                      className="form-control mt-2"
                      id="identity"
                      name="identity"
                      type="text"
                    ></Field>
                    <ErrorMessage
                      name="identity"
                      className="text-danger"
                      component="span"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="phone">Phone</label>
                    </h6>
                    <Field
                      className="form-control mt-2"
                      id="phone"
                      name="phone"
                      type="text"
                    ></Field>
                    <ErrorMessage
                      name="phone"
                      className="text-danger"
                      component="span"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="email">Email</label>
                    </h6>
                    <Field
                      className="form-control mt-2"
                      id="email"
                      name="email"
                      type="text"
                    ></Field>
                    <ErrorMessage
                      name="email"
                      className="text-danger"
                      component="span"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="customerType">Customer Type</label>
                    </h6>
                    <Field
                      as="select"
                      className="form-control mt-2"
                      id="customerType"
                      name="customerType"
                    >
                      {customerType.map((customerType) =>(
                        <option value={`${JSON.stringify(customerType)}`}>{customerType.name}</option>
                      ))}
                    </Field>
                  </div>
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="location">Location</label>
                    </h6>
                    <Field
                      className="form-control mt-2"
                      id="location"
                      name="location"
                      type="text"
                    ></Field>
                    <ErrorMessage
                      name="location"
                      className="text-danger"
                      component="span"
                    ></ErrorMessage>
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                    <Link to={"/customer"}>
                      <button className="btn btn-warning">Cancel</button>
                    </Link>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};
export default CustomerCreate;
