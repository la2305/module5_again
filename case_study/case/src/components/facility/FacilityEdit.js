import {Form, Formik, ErrorMessage, Field } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { getListType } from "../../service/TypeRentalService";
import {  editFacility, getFacilityById } from "../../service/FacilityService";



const FacilityEdit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [facility,setFacility] = useState();
  const [typeRental,setTypeRental] = useState([]);

  const loadListTypeRental= async () =>{
    const data = await getListType();
    setTypeRental(data);
  }
  useEffect(()=>{
    loadListTypeRental();
  },[])

  const loadFacility= async (id) =>{
    const data = await getFacilityById(id);
    console.log(data);
    const newData = {...data,typeRental: `${JSON.stringify(data.typeRental)}`}
    console.log(newData);
    setFacility(newData);
  }

  useEffect(()=>{
    if(params.id) {
      loadFacility(params.id)
    }
  },[params]);

  if(!facility){
    return null;
  }
  const handleSubmit = async (values)=>{
    console.log(values);
    await editFacility(values);
    navigate("/");
  } 

  return (
    <>
      <Formik initialValues={{
        id: facility.id,
        name: facility.name,
        area: facility.area,
        image: facility.image,
        typeRental: facility.typeRental,
        description: facility.description
      }}
       validationSchema={Yup.object({
        name: Yup.string().required("Name can not empty").matches(/^[^0-9]*$/,"name can not contain number"),
        area: Yup.string().required("Area can not empty").matches(/^[1-9][0-9]*$/,"Area must be a positive integer"),
        image: Yup.string().required("Image can not empty"),
        description: Yup.string().required("Description can not empty"),
        })}
         onSubmit={async (values) =>{
          const newValue = {...values,typeRental: JSON.parse(values.typeRental)}
          await handleSubmit(newValue);
        }}>
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
              <ErrorMessage
                name="name"
                className="text-danger"
                component="span"
              ></ErrorMessage>
            </div>
            <div className="form-group">
              <label htmlFor="area">Area</label>
              <Field
                className="form-control"
                id="area"
                name="area"
                type="text"
              ></Field>
              <ErrorMessage
                name="area"
                className="text-danger"
                component="span"
              ></ErrorMessage>
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <Field
                className="form-control"
                id="image"
                name="image"
                type="text"
              ></Field>
              <ErrorMessage
                name="image"
                className="text-danger"
                component="span"
              ></ErrorMessage>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <Field
                className="form-control"
                id="description"
                name="description"
                type="text"
              ></Field>
              <ErrorMessage
                name="description"
                className="text-danger"
                component="span"
              ></ErrorMessage>
            </div>
            <div className="form-group">
              <label htmlFor="typeRental">Type rental</label>
              <Field
                as="select"
                className="form-control"
                id="typeRental"
                name="typeRental"
              >
               {typeRental.map((type)=>(
                <option value={`${JSON.stringify(type)}`}>{type.name}</option>
               ))} 
              </Field>
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
export default FacilityEdit;
