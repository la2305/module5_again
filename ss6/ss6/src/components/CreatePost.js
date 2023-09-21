import { Form, Field, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { createPost } from "../service/PostService";

const CreatePost = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    await createPost(values);
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 ">
            <h1 className="d-flex justify-content-center">Create New Post</h1>
            <Formik
              initialValues={{
                title: "",
                thumbnail_url: "",
                slug: "",
                category: "",
              }}
              onSubmit={async (values) => {
                await handleSubmit(values);
              }}
            >
              <Form>
                <div>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <Field
                      className="form-control"
                      id="title"
                      name="title"
                      type="text"
                    ></Field>
                  </div>
                  <div className="form-group">
                    <label htmlFor="slug">Slug</label>
                    <Field
                      className="form-control"
                      id="slug"
                      name="slug"
                      type="text"
                    ></Field>
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <Field
                      className="form-control"
                      id="category"
                      name="category"
                      type="text"
                    ></Field>
                  </div>
                  <div className="form-group">
                    <label htmlFor="thumbnail_url">Thumbnail_url</label>
                    <Field
                      className="form-control"
                      id="thumbnail_url"
                      name="thumbnail_url"
                      type="text"
                    ></Field>
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
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};
export default CreatePost;
