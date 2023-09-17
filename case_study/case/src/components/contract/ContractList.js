const ContractList = () => {
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
                  <div className="search-box">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="col-sm-1">
                  <a to="/contract/create">
                    <button className="btn btn-primary">Add</button>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Contract code</th>
                  <th>Date start</th>
                  <th>Date end</th>
                  <th>Deposit money</th>
                  <th>Total money</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a href="#">
                    <i className="fa fa-angle-double-left" />
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    <i className="fa fa-angle-double-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* list */}
    </>
  );
};
export default ContractList;
