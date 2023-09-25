import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteFacility, getFacilityList } from "../../service/FacilityService";

const FacilityList = () => {
  const [facilityList, setFacilityList] = useState([]);

  const loadFacilityList = async () => {
    const data = await getFacilityList();
    setFacilityList(data);
  };

  useEffect(() => {
    loadFacilityList();
  }, []);

  const getDeleteFacility= async (id) =>{
    await deleteFacility(id);
    loadFacilityList();
  }

  return (
    <>
      
      {/* service */}
      <div className="container">
      <div className="d-flex justify-content-end mt-4"><Link to={"/facility/create"}>
        <button className="btn btn-primary">Create Facility</button>
      </Link></div>
        <div className="row">
          {facilityList.map((service, index) => (
            <div className="col-sm-6 col-md-4 mt-4">
              <div className="card" key={index}>
                <img
                  className="image-height card-img-top "
                  src={service.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex justify-content-center mx-auto">
                    <Link to={`/facility/edit/${service.id}`}><button className="btn btn-warning m-1" >Edit</button></Link>
                    <button className="btn btn-danger m-1" onClick={()=> (getDeleteFacility(service.id))}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* service */}
    </>
  );
};
export default FacilityList;
