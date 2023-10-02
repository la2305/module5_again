import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { getListType } from "../../service/TypeRentalService";
import * as Yup from "yup";
import { createFacility } from "../../service/FacilityService";
import swal from "sweetalert";

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
    navigate("/");

    const willDelete = await swal({
      title: "Complete",
      text: "Add Facility success",
      icon: "success",
    });
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          area: "",
          image: "",
          typeRental: "",
          description: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("name can not empty")
            .matches(/^[^0-9]*$/, "name can not contain number"),
          area: Yup.string()
            .required("area can not empty")
            .matches(/^[1-9][0-9]*$/, "Area must be a positive integer"),
          image: Yup.string().required("image can not empty"),
          description: Yup.string().required("description can not empty"),
        })}
        onSubmit={async (values) => {
          await handleSubmit(values);
        }}
      >
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
                      <label htmlFor="area">Area</label>
                    </h6>
                    <Field
                      className="form-control mt-2"
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
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="image">Image</label>
                    </h6>
                    <Field
                      className="form-control mt-2"
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
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="description">Description</label>
                    </h6>
                    <Field
                      className="form-control mt-2"
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
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="typerental">Type rental</label>
                    </h6>
                    <Field
                      as="select"
                      className="form-control mt-2"
                      id="typerental"
                      name="typerental"
                    >
                      {typeRental.map((typeRental) => (
                        <option value={`${JSON.stringify(typeRental)}`}>
                          {typeRental.name}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                    <Link to={"/"}>
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
export default FacilityCreate;
