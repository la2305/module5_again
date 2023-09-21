import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { creatPost } from "../service/PostService";

const CreatePost = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    await creatPost(values);
    const date = new Date();
    navigate("/");
  };

  return (
    <>
      <h1 className="d-flex justify-content-center">Create and edit post</h1>
      <Formik
        initialValues={{
          title: "",
          category: "",
          content: "",
          slug: "",
          author: "",
          email: "",
          updatedAt:
            new Date().getDay() +
            "-" +
            new Date().getMonth() +
            "-" +
            new Date().getFullYear(),
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("title can not empty"),
          category: Yup.string().required("category can not empty"),
          content: Yup.string().required("content can not empty"),
          slug: Yup.string().required("slug can not empty"),
          author: Yup.string().required("author can not empty"),
          email: Yup.string().required("email can not empty").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "email is not valid"),
        })}
        onSubmit={async (values) => {
          await handleSubmit(values);
        }}
      >
        <Form>
          <>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <Field
                type="text"
                name="title"
                className="form-control"
                id="title"
              />
              <ErrorMessage
                name="title"
                className="text-danger"
                component="span"
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <Field
                type="text"
                name="category"
                className="form-control"
                id="category"
              />
              <ErrorMessage
                name="category"
                className="text-danger"
                component="span"
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                Content
              </label>
              <Field
                type="text"
                name="content"
                className="form-control"
                id="content"
              />
              <ErrorMessage
                name="content"
                className="text-danger"
                component="span"
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="slug" className="form-label">
                Slug
              </label>
              <Field
                type="text"
                name="slug"
                className="form-control"
                id="slug"
              />
              <ErrorMessage
                name="slug"
                className="text-danger"
                component="span"
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <Field
                type="text"
                name="author"
                className="form-control"
                id="author"
              />
              <ErrorMessage
                name="author"
                className="text-danger"
                component="span"
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                type="text"
                name="email"
                className="form-control"
                id="email"
              />
              <ErrorMessage
                name="email"
                className="text-danger"
                component="span"
              ></ErrorMessage>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </>
        </Form>
      </Formik>
    </>
  );
};
export default CreatePost;
