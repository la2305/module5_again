import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { getListType } from "../../service/TypeRentalService";
import * as Yup from "yup";
import { createFacility } from "../../service/FacilityService";

const FacilityCreate = () => {
  const navigate = useNavigate();
  const [typeRental, setTypeRental] = useState([]);

  const loadListTypeRental = async () => {
    const data = await getListType();
    setTypeRental(data);
  };

  useEffect(() => {
    loadListTypeRental();
  }, []);

  const handleSubmit = async (formData) => {
    await createFacility(formData);
    navigate("/")
  };

  return (
    <>
      <Formik initialValues={{
        name:"",
        area:"",
        image:"",
        typeRental:"",
        description:""
      }} 
      validationSchema={Yup.object({
        name: Yup.string().required("name can not empty").matches(/^[^0-9]*$/,"name can not contain number"),
        area: Yup.string().required("area can not empty").matches(/^[1-9][0-9]*$/,"Area must be a positive integer"),
        image: Yup.string().required("image can not empty"),
        description: Yup.string().required("description can not empty")
      })} onSubmit={async (values) =>{
        await handleSubmit(values)
      }} >

        <Form>
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field
                className="form-control"
                id="name"
                name="name"
                type="text"
              ></Field>
              <ErrorMessage name="name" className="text-danger" component="span"></ErrorMessage>
            </div>
            <div className="form-group">
              <label htmlFor="area">Area</label>
              <Field
                className="form-control"
                id="area"
                name="area"
                type="text"
              ></Field>
              <ErrorMessage name="area" className="text-danger" component="span"></ErrorMessage>
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <Field
                className="form-control"
                id="image"
                name="image"
                type="text"
              ></Field>
              <ErrorMessage name="image" className="text-danger" component="span"></ErrorMessage>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <Field
                className="form-control"
                id="description"
                name="description"
                type="text"
              ></Field>
              <ErrorMessage name="description" className="text-danger" component="span"></ErrorMessage>
            </div>
            <div className="form-group">
              <label htmlFor="typerental">Type rental</label>
              <Field
                as = "select"
                className="form-control"
                id="typerental"
                name="typerental"
              >{typeRental.map((typeRental) =>( 
                <option value={`${JSON.stringify(typeRental)}`}>{typeRental.name}</option>
              ))}</Field>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
              <Link to={"/"}>
                <button className="btn btn-warning">Cancel</button>
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default FacilityCreate;
