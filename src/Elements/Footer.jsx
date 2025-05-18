import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Laysans Solutions
                </h6>
                <p>
                  Our innovative solutions boost efficiency, enhance digital presence, and drive success.
                </p>
              </div>

              {/* Products column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p><a href="#!" className="text-reset">IT & Software</a></p>
                <p><a href="#!" className="text-reset">BPO & Outsourcing</a></p>
                <p><a href="#!" className="text-reset">Consulting</a></p>
                <p><a href="#!" className="text-reset">E-Commerce</a></p>
              </div>

              {/* Useful Links column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p><a href="/#/careers" className="text-reset">Careers</a></p>
                <p><a href="/#/client" className="text-reset">Clients</a></p>
                <p><a href="/#/contact" className="text-reset">Contact</a></p>
                <p><a href="#!" className="text-reset">Help</a></p>
              </div>

              {/* Contact column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 phone-container">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> Chennai, India</p>
                <p><i className="fas fa-envelope me-3"></i> contact@laysans.com</p>
                <div className="d-flex align-items-center ms-sm-0">
                  <p><i className="fas fa-phone me-3"></i></p>
                  <p>+91 9500 26 2207 <br /> +91 9500 27 2207</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Social media */}
        <section className="mb-4">
          <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>

          <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
            <i className="fab fa-twitter"></i>
          </a>

          <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#230de7' }} href="http://linkedin.com/company/laysans" role="button">
            <i className="fab fa-linkedin"></i>
          </a>

          <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="https://www.instagram.com/laysans_solutions/profilecard/?igsh=OG51NXRraTlnbHBj" role="button">
            <i className="fab fa-instagram"></i>
          </a>

          <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#25D366' }} href="https://api.whatsapp.com/send?phone=919500272207" role="button">
            <i className="fab fa-whatsapp"></i>
          </a>
        </section>
        {/* End Social media */}
      </div>

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.46)' }}>
        © 2025 Copyright: <a className="text-white" href="#">Laysans Solutions</a>
      </div>
    </footer>
  );
}

export default Footer;
