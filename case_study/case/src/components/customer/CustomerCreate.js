const CustomerCreate = () => {
  return (
    <>
      <>
        {/* form-create */}

        <div className="registration-form">
          <div className="container-fluid" />
          <div className="container">
            <div className="form-icon">
              <span>
                <i className="fa-solid fa-user" style={{ color: "#ffffff" }} />
              </span>
            </div>

            <div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control item"
                  placeholder="Customer name"
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  name="dob"
                  className="form-control item"
                  placeholder="Date of birth"
                />
              </div>
              <div className="form-group">
                <input
                  as="select"
                  name="gender"
                  className="form-control item form-select"
                >
                  <option disabled="" selected="">
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </input>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="identity"
                  className="form-control item"
                  id="identity-card-number"
                  placeholder="Identity card number"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="phone"
                  className="form-control item"
                  id="phone-number"
                  placeholder="Phone number"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control item"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  as="select"
                  name="customerType"
                  className="form-control item form-select"
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="location"
                  className="form-control item"
                  id="location"
                  placeholder="Location"
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
    </>
  );
};
export default CustomerCreate;
