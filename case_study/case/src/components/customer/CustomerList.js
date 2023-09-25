const CustomerList = () => {
  return (
    <>
      {/* list */}
      <div className="container">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-7">
                  <h2>Customer list</h2>
                </div>
                <div className="col-sm-4">
                  <div className="search-box-inline">
                    <input
                      type="search"
                      placeholder="Search"
                      className="form-control mr-sm-2"
                      id="search"
                    />
                    <button class="btn btn-primary" type="button">
                      Search
                    </button>
                  </div>
                </div>
                <div className="col-sm-1">
                  <button type="button" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Date Of Birth</th>
                  <th>Gender</th>
                  <th>Identity Card Number</th>
                  <th>Number Phone</th>
                  <th>Customer Type</th>
                  <th>Location</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td>{index + 1}</td>
                  <td>{customer.name}</td>
                  <td>{customer.dob}</td>
                  <td>{customer.gender}</td>
                  <td>{customer.identity}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.customerType.name}</td>
                  <td>{customer.location}</td> */}
                  <td>
                    <button type="button" className="btn btn-primary">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* //phantrang */}
            <div className="d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <button className="page-link">Previous</button>
                  </li>
                  <li className="page-item">
                    <span
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    ></span>
                  </li>
                  <li className="page-item">
                    <button className="page-link">Next</button>
                  </li>
                </ul>
              </nav>
            </div>
            {/* // */}
          </div>
        </div>
      </div>
      {/* list */}
    </>
  );
};
export default CustomerList;
