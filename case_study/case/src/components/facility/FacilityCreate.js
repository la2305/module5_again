const FacilityCreate = () => {
  return (
    <>
      {/* form-create */}
      <div className="registration-form">
        <div className="container">
          <div className="form-icon">
            <span>
              <i className="fa-solid fa-house" />
            </span>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control item"
                  name="name"
                  placeholder="Service name"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control item"
                  name="area"
                  placeholder="Area use"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control item"
                  name="image"
                  placeholder="image service"
                />
              </div>
              <div className="form-group">
                <input
                  as="select"
                  className="form-control item"
                  name="typeRental"
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control item"
                  name="description"
                  placeholder="description"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                className=" h-100 w-100 img-thumbnail"
                src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/722781/722781/63984554_XL.jpg?auto=format,compress&fit=crop&crop=entropy&w=300&h=200&q=55"
                alt="https://upload.wikimedia.org/wikipedia/commons/e/eb/Old_Alt_House_Glover_Garden_Nagasaki_Left.JPG"
              />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-block create-account">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* form-create */}
    </>
  );
};
export default FacilityCreate;
