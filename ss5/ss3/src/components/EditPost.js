import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as PostService from "../service/PostService";

const EditPost = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState();

  const loadPost = async (id) => {
    const data = await PostService.getPost(id);
    setPost(data);
  };

  useEffect(() => {
    if (params.id) {
      loadPost(params.id);
    }
  }, [params]);

  if (!post) {
    return null;
  }

  const handleSubmit = async (values) => {
    await PostService.editPost(values);
    console.log(values);
    navigate("/");  
  };

  return (
    <>
      <h1 className="d-flex justify-content-center">Create and edit post</h1>
      <Formik
        initialValues={{
          id: post.id,
          title: post.title,
          category: post.category,
          content: post.content,
          slug: post.slug,
          author: post.author,
          email: post.email,
          updatedAt:
            new Date().getDay() +
            "-" +
            new Date().getMonth() +
            "-" +
            new Date().getFullYear()
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
export default EditPost;
