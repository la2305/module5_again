const ContractCreate = () => {
  return (
    <>
      {/* form-create */}

      <div className="container">
        <div className="form-icon">
          <span>
            <i className="fa-solid fa-file-contract" />
          </span>
        </div>
        <div>
          <div className="form-group">
            <input
              name="code"
              type="text"
              className="form-control item"
              id="code"
              placeholder="Contract code"
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control item"
              id="dateStart"
              placeholder="Date start"
              name="dateStart"
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control item"
              id="dateEnd"
              placeholder="Date end"
              name="dateEnd"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="depositMoney"
              placeholder="Deposit money"
              name="depositMoney"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="totalMoney"
              placeholder="Total money"
              name="totalMoney"
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-block create-account">
            Submit
          </button>
        </div>
      </div>
      {/* form-create */}
    </>
  );
};
export default ContractCreate;
