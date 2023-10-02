import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup"
import { createContract } from "../../service/ContractService";

const ContractCreate = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) =>{
    await createContract(values);
    navigate("/contract");
  }

  return (
    <>
      <Formik initialValues={{
        code: "",
        dateStart: "",
        dateEnd: "",
        depositMoney: "",
        totalMoney: ""
      }} validationSchema={Yup.object({
        code : Yup.string().required("Code can not empty"),
        dateStart: Yup.string().required("Date start can not empty"),
        dateEnd: Yup.string().required("Date End can not empty"),
        depositMoney: Yup.string().required("DePosit Money can not empty"),
        totalMoney: Yup.string().required("Total Money can not empty").matches(/^[1-9]\d*$/,"The deposit must be a positive integer.")
      })} onSubmit={(values) => (handleSubmit(values))}>
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <Form>
                <div>
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="code">Code</label>
                    </h6>
                    <Field
                      className="form-control mt-2"
                      id="code"
                      name="code"
                      type="text"
                    ></Field>
                    <ErrorMessage
                      name="code"
                      className="text-danger"
                      component="span"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="dob">Date Start</label>
                    </h6>
                    <Field
                      className="form-control mt-2"
                      id="dateStart"
                      name="dateStart"
                      type="date"
                    ></Field>
                    <ErrorMessage
                      name="dateStart"
                      className="text-danger"
                      component="span"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="identity">Date End</label>
                    </h6>
                    <Field
                      className="form-control mt-2"
                      id="dateEnd"
                      name="dateEnd"
                      type="date"
                    ></Field>
                    <ErrorMessage
                      name="dateEnd"
                      className="text-danger"
                      component="span"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="depositMoney">Deposit Money</label>
                    </h6>
                    <Field
                      className="form-control mt-2"
                      id="depositMoney"
                      name="depositMoney"
                      type="text"
                    ></Field>
                    <ErrorMessage
                      name="depositMoney"
                      className="text-danger"
                      component="span"
                    ></ErrorMessage>
                  </div>
                  <div className="form-group mt-2">
                    <h6>
                      <label htmlFor="totalMoney">Total Money</label>
                    </h6>
                    <Field
                      className="form-control mt-2"
                      id="totalMoney"
                      name="totalMoney"
                      type="text"
                    ></Field>
                    <ErrorMessage
                      name="totalMoney"
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
export default ContractCreate;
