const FacilityList = () => {
  return (
    <>
      <>
        <>
          {/* Carousel Start */}
          <div className="container-fluid px-0 mb-5">
            <div
              id="header-carousel"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="image-service-panel w-100"
                    src="https://toquoc.mediacdn.vn/280518851207290880/2023/4/28/screenshot3-1682666317502330816495.png"
                    alt="Image"
                  />
                  <div className="carousel-caption">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                          <p className="fs-4 text-white animated zoomIn">
                            Welcome to{" "}
                            <strong className="text-dark">Furama Resort</strong>
                          </p>
                          <h1 className="display-1 text-white mb-4 animated zoomIn">
                            Peaceful &amp; and full of happiness resort
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="image-service-panel w-100"
                    src="https://static-images.vnncdn.net/files/publish/2023/6/23/tan-huong-ky-nghi-dang-cap-mien-di-san-voi-bo-doi-tu-new-world-hotels-resorts-664.jpg"
                    alt="Image"
                  />
                  <div className="carousel-caption">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                          <p className="fs-4 text-white animated zoomIn">
                            Welcome to{" "}
                            <strong className="text-dark">Furama Resort</strong>
                          </p>
                          <h1 className="display-1 text-white mb-4 animated zoomIn">
                            Peaceful &amp; and full of happiness resort
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#header-carousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#header-carousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* Carousel End */}
        </>
        {/* service */}
        <div className="container">
          <div className="row">
            <button className="btn btn-primary">CreateService</button>
          </div>
        </div>
        {/* service */}
      </>
    </>
  );
};
export default FacilityList;
