const Footer = () => {
  return (
    <>
      {/* Footer End */}
      <div
        className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Our Office</h4>
              <p className="mb-2">536/17A Điện Biên Phủ, Thanh Khê, Đà Nẵng</p>
              <p className="mb-2">+012 345 67890</p>
              <p className="mb-2">info@example.com</p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href=""
                >
                  <i className="fa-brands fa-twitter" />
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-youtube" />
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Information</h4>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Our Services
              </a>
              <a className="btn btn-link" href="">
                Terms Condition
              </a>
              <a className="btn btn-link" href="">
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Business Hours</h4>
              <a className="btn btn-link" href="">
                Monday - Friday
              </a>
              <a className="btn btn-link" href="">
                09:00 am - 07:00 pm
              </a>
              <a className="btn btn-link" href="">
                Saturday
              </a>
              <a className="btn btn-link" href="">
                09:00 am - 12:00 pm
              </a>
              <a className="btn btn-link" href="">
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Newsletter</h4>
              <p>Please leave your contact information.</p>
              <div className="position-relative w-100">
                <input
                  className="form-control bg-light border-light w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
};
export default Footer;
