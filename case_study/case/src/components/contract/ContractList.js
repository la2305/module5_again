import { Link } from "react-router-dom";
import ModalDelete from "../modal/ModalDelete";
import { useState } from "react";
import { deleteContract, getContractList } from "../../service/ContractService";
import { useEffect } from "react";

const ContractList = () => {
  const [contracts,setContracts] = useState([]);
  const loadContractList = async ()=>{
    const respon = await getContractList();
    setContracts(respon);
  }
  useEffect(() =>{
    loadContractList();
  },[]);

  //delete
  const [modal,setModal] = useState({
    show: false,
    info: {} 
  });
  const showModalDelete = (contract) =>{
    setModal({
      show: true,
      info: contract
    })
  }
  const hideModalDelete = () =>{
    setModal({
      show: false,
      info: {}
    })
  }
  const deleteConfirm = async (id) =>{
    await deleteContract(id);
    hideModalDelete();
    loadContractList();
  }

  return (
    <>
      {/* list */}
      <div className="container">
        <div className="table">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row mt-2">
                <div className="col-md-4">
                  <h2>Contract list</h2>
                </div>
                <div className="col-md-4"></div>
                <div className="search-box col-md-3">
                  <div className="input-group">
                    <div className="form-outline">
                      <input type="search" id="form1" className="form-control"  placeholder="Search Code"/>
                    </div>
                    <button type="button" className="btn btn-primary">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-1">
                  <Link to={"/contract/create"}><button type="button" className="btn btn-primary">
                    Add
                  </button></Link>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Code</th>
                  <th>Date Start</th>
                  <th>Date End</th>
                  <th>Deposit Money</th>
                  <th>Total Money</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((contract,index) =>(
                  <tr key={contract.id}>
                    <td>{index+1}</td>
                    <td>{contract.code}</td>
                    <td>{contract.dateStart}</td>
                    <td>{contract.dateEnd}</td>
                    <td>{contract.depositMoney}</td>
                    <td>{contract.totalMoney}</td>
                    <td><button className="btn btn-warning">Edit</button></td>
                    <td><button className="btn btn-danger" onClick={()=>(showModalDelete(contract))}>Delete</button></td>
                  </tr>
              ))}
              </tbody>
            </table>
            <ModalDelete showModal={modal} hideModal={hideModalDelete} confirm={deleteConfirm}></ModalDelete>

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
export default ContractList;
