import { Link } from "react-router-dom";

const Header = () => (
  <>
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark text-light px-0 py-2">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <span className="fa fa-phone-alt me-2" />
              <span>+012 345 6789</span>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <span className="far fa-envelope me-2" />
              <span>info@example.com</span>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center mx-n2">
              <span>Follow Us:</span>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a
          href="index.html"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h1 className="m-0">Furama</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to={"/"}><a className="nav-item nav-link active">
              Home
            </a></Link>
            <Link to={"/"}><a className="nav-item nav-link active">
              Service
            </a></Link>
            <Link to={"/customer"}><a className="nav-item nav-link">
              Customer
            </a></Link>
            <Link to={"/contract"}><a className="nav-item nav-link">
              Contract
            </a></Link>
            <div className="nav-item dropdown">
              <Link><a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a></Link>
              <div className="dropdown-menu bg-light m-0">
                <a href="feature.html" className="dropdown-item">
                  Features
                </a>
                <a href="quote.html" className="dropdown-item">
                  Free Quote
                </a>
                <a href="team.html" className="dropdown-item">
                  Our Team
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div>
            <Link><a href="contact.html" className="nav-item nav-link">
              Contact
            </a></Link>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
      {/* Carousel Start */}
      <div className=" container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="height-panner w-100"
                src="https://static-images.vnncdn.net/files/publish/2023/6/23/tan-huong-ky-nghi-dang-cap-mien-di-san-voi-bo-doi-tu-new-world-hotels-resorts-664.jpg"
                alt="Image"
              />
              <div className="height-panner carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h1 className="display-1 text-white mb-5 animated slideInDown">
                        Make Your Home Like Garden
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="height-panner w-100"
                src="https://toquoc.mediacdn.vn/280518851207290880/2023/4/28/screenshot3-1682666317502330816495.png"
                alt="Image"
              />
              <div className="height-panner carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-1 text-white mb-5 animated slideInDown">
                        Create Your Own Small Garden At Home
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
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}
    </>
  </>
);
export default Header;
