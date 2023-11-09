import Footer from "./footer";
import Navbar from "./navbar";

export default function Services() {
  return (
    <>
      {/*wrapper start*/}
      <div className="wrapper home-default-wrapper">
        {/*== Start Preloader Content ==*/}
        <div className="preloader-wrap">
          <div className="preloader">
            <span className="dot" />
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        {/*== End Preloader Content ==*/}

        <header className="header-area header-default transparent sticky-header">
          <Navbar />
        </header>

        <main className="main-content site-wrapper-reveal">
          {/*== Start Page Title Area ==*/}
          <section
            className="page-title-area bg-img bg-img-top"
            data-bg-img="assets/img/slider/main-slide-01.jpg"
            style={{
              backgroundImage: `url("assets/img/slider/main-slide-01.jpg")`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-xl-7 m-auto">
                  <div className="page-title-content content-style2 text-center">
                    <p>Best solution for your heatlh</p>
                    <h4 className="title">
                      Services <span>That We Provide</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Page Title Area ==*/}
          {/*== Start Service Area Wrapper ==*/}
          <section className="service-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <h5>Our services</h5>
                    <h2 className="title">
                      Best Solution <span>For Your Health</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="row service-style2">
                    <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div className="icon">
                        <i className="icofont-brain" />
                      </div>
                      <div className="content">
                        <h5 className="service-name">Psychiatry</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a className="btn-link" href="service-details.html">
                          More <i className="icofont-simple-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div className="icon">
                        <i className="icofont-eye" />
                      </div>
                      <div className="content">
                        <h5 className="service-name">Opthalmology</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a className="btn-link" href="service-details.html">
                          More <i className="icofont-simple-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div className="icon">
                        <i className="icofont-heart-beat" />
                      </div>
                      <div className="content">
                        <h5 className="service-name">Cardiology</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a className="btn-link" href="service-details.html">
                          More <i className="icofont-simple-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div className="icon">
                        <i className="icofont-microscope-alt" />
                      </div>
                      <div className="content">
                        <h5 className="service-name">Immumnology</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a className="btn-link" href="service-details.html">
                          More <i className="icofont-simple-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div className="icon">
                        <i className="icofont-blood-drop" />
                      </div>
                      <div className="content">
                        <h5 className="service-name">Hematology</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a className="btn-link" href="service-details.html">
                          More <i className="icofont-simple-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div className="icon">
                        <i className="icofont-laboratory" />
                      </div>
                      <div className="content">
                        <h5 className="service-name">Laboratory</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a className="btn-link" href="service-details.html">
                          More <i className="icofont-simple-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div className="icon">
                        <i className="icofont-pills" />
                      </div>
                      <div className="content">
                        <h5 className="service-name">Oncology</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a className="btn-link" href="service-details.html">
                          More <i className="icofont-simple-right" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div className="icon">
                        <i className="icofont-tooth" />
                      </div>
                      <div className="content">
                        <h5 className="service-name">Dental</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a className="btn-link" href="service-details.html">
                          More <i className="icofont-simple-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Service Area Wrapper ==*/}
          {/*== Start Testimonial Area Wrapper ==*/}
          <section
            className="testimonial-area testimonial-default-area bg-img"
            data-bg-img="assets/img/photos/testimonial-bg1.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <h5>Testimonial</h5>
                    <h2 className="title">
                      Trusted <span>From Clients</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="swiper-container testimonial-slider-container">
                    <div className="swiper-wrapper testimonial-slider">
                      {/*== Start Testimonial Item ==*/}
                      <div className="swiper-slide testimonial-item">
                        <div className="thumb">
                          <img
                            src="assets/img/testimonial/01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="client-content">
                          <p>
                            “It’s been an absolute pleasure to work with Mexi,{" "}
                            <br />
                            their response to our brief exceeded expectations
                            and the execution was efficient, professional and
                            very reassuring. I’d fully recommend theme.”
                          </p>
                        </div>
                        <div className="client-info">
                          <div className="desc">
                            <h4 className="name">Steven Gerrard</h4>
                            <p className="client-location">
                              Golden Lotus Apartment, Brooklyn, USA
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*== End Testimonial Item ==*/}
                      {/*== Start Testimonial Item ==*/}
                      <div className="swiper-slide testimonial-item">
                        <div className="thumb">
                          <img
                            src="assets/img/testimonial/02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="client-content">
                          <p>
                            “It’s been an absolute pleasure to work with Mexi,{" "}
                            <br />
                            their response to our brief exceeded expectations
                            and the execution was efficient, professional and
                            very reassuring. I’d fully recommend theme.”
                          </p>
                        </div>
                        <div className="client-info">
                          <div className="desc">
                            <h4 className="name">Kristina Castle</h4>
                            <p className="client-location">
                              Golden Lotus Apartment, HasTech, BNA
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*== End Testimonial Item ==*/}
                    </div>
                    {/* Add Arrows */}
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="brand-logo-area brand-logo-default-area">
                    <div className="swiper-container brand-logo-slider-container">
                      <div className="swiper-wrapper brand-logo-slider">
                        <div className="swiper-slide brand-logo-item">
                          <a href="#/">
                            <img
                              src="assets/img/brand-logo/01.png"
                              alt="Mexi-Brand-Logo"
                            />
                          </a>
                        </div>
                        <div className="swiper-slide brand-logo-item">
                          <a href="#/">
                            <img
                              src="assets/img/brand-logo/02.png"
                              alt="Mexi-Brand-Logo"
                            />
                          </a>
                        </div>
                        <div className="swiper-slide brand-logo-item">
                          <a href="#/">
                            <img
                              src="assets/img/brand-logo/03.png"
                              alt="Mexi-Brand-Logo"
                            />
                          </a>
                        </div>
                        <div className="swiper-slide brand-logo-item">
                          <a href="#/">
                            <img
                              src="assets/img/brand-logo/04.png"
                              alt="Mexi-Brand-Logo"
                            />
                          </a>
                        </div>
                        <div className="swiper-slide brand-logo-item">
                          <a href="#/">
                            <img
                              src="assets/img/brand-logo/05.png"
                              alt="Mexi-Brand-Logo"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Testimonial Area Wrapper ==*/}
          {/*== Start Pricing Area Wrapper ==*/}
          <section className="pricing-area pricing-default-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <h5>Pricing List</h5>
                    <h2 className="title">
                      Protect <span>With Health Care Card</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row row-gutter-0 pricing-items-style1 noborder-line">
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="pricing-item item-one">
                    <div className="pricing-title">
                      <h5>Trial</h5>
                    </div>
                    <div className="pricing-amount">
                      <h2>
                        <sup>$</sup>5
                      </h2>
                      <span className="period">/ month</span>
                    </div>
                    <div className="pricing-content">
                      <p className="desc">
                        Free with 14 days trial, then you can choose plan
                      </p>
                      <ul className="pricing-list">
                        <li>
                          <i className="icofont-check-circled" /> 1 Cleaner
                        </li>
                        <li>
                          <i className="icofont-check-circled" /> Floor Cleaning
                        </li>
                        <li>
                          <i className="icofont-check-circled" /> 2 Rooms
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a className="btn-theme btn-border" href="#/">
                        Get Started Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="pricing-item item-two">
                    <div className="pricing-title">
                      <h5>Standard</h5>
                    </div>
                    <div className="pricing-amount">
                      <h2>
                        <sup>$</sup>29
                      </h2>
                      <span className="period">/ month</span>
                    </div>
                    <div className="pricing-content">
                      <p className="desc">
                        Free with 14 days trial, then you can choose plan
                      </p>
                      <ul className="pricing-list">
                        <li>
                          <i className="icofont-check-circled" /> 3 Cleaners
                        </li>
                        <li>
                          <i className="icofont-check-circled" /> All House
                          Cleaning
                        </li>
                        <li>
                          <i className="icofont-check-circled" /> All Rooms
                        </li>
                        <li>
                          <i className="icofont-check-circled" /> Equipment
                          Cleaning
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a className="btn-theme btn-border active" href="#/">
                        Get Started Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="pricing-item item-three">
                    <div className="pricing-title">
                      <h5>premium</h5>
                    </div>
                    <div className="pricing-amount">
                      <h2>
                        <sup>$</sup>59
                      </h2>
                      <span className="period">/ month</span>
                    </div>
                    <div className="pricing-content">
                      <p className="desc">
                        Free with 14 days trial, then you can choose plan
                      </p>
                      <ul className="pricing-list">
                        <li>
                          <i className="icofont-check-circled" /> 2 Cleaners
                        </li>
                        <li>
                          <i className="icofont-check-circled" /> Normal Clean
                        </li>
                        <li>
                          <i className="icofont-check-circled" /> 3 Rooms
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a className="btn-theme btn-border" href="#/">
                        Get Started Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="pricing-item item-four">
                    <div className="pricing-title">
                      <h5>Ultimate</h5>
                    </div>
                    <div className="pricing-amount">
                      <h2>
                        <sup>$</sup>99
                      </h2>
                      <span className="period">/ month</span>
                    </div>
                    <div className="pricing-content">
                      <p className="desc">
                        Free with 14 days trial, then you can choose plan
                      </p>
                      <ul className="pricing-list">
                        <li>
                          <i className="icofont-check-circled" /> 5 Cleaners
                        </li>
                        <li>
                          <i className="icofont-check-circled" /> All Office
                          Cleaning
                        </li>
                        <li>
                          <i className="icofont-check-circled" /> All Rooms
                        </li>
                        <li>
                          <i className="icofont-check-circled" /> Equipments
                          Cleaning
                        </li>
                        <li>
                          <i className="icofont-check-circled" /> Exterior
                          Glasses
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a className="btn-theme btn-border" href="#/">
                        Get Started Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Pricing Area Wrapper ==*/}
          {/*== Start Divider Area Wrapper ==*/}
          <section
            className="divider-area bgcolor-theme bg-img"
            data-bg-img="assets/img/shape/01.jpg"
          >
            <div className="container">
              <div className="row content-align-center">
                <div className="col-lg-12">
                  <div className="divider-content-area divider-content-style1">
                    <div className="content-inner">
                      <h2>
                        Book An <span>Appointment</span>
                      </h2>
                      <p>
                        We prodive a dedicated support 24/7 for any your
                        question
                      </p>
                    </div>
                    <a href="#/" className="btn btn-theme btn-white">
                      Reservation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Divider Area Wrapper ==*/}
        </main>

        <Footer />

        {/*== Scroll Top Button ==*/}
        <div className="scroll-to-top">
          <span className="icofont-rounded-up" />
        </div>
        {/*== Start Side Menu ==*/}
        <aside className="off-canvas-wrapper">
          <div className="off-canvas-inner">
            <div className="off-canvas-overlay" />
            {/* Start Off Canvas Content Wrapper */}
            <div className="off-canvas-content">
              {/* Off Canvas Header */}
              <div className="off-canvas-header">
                <div className="logo-area">
                  <a href="index-2.html">
                    <img src="assets/img/logo.png" alt="Logo" />
                  </a>
                </div>
                <div className="close-action">
                  <button className="btn-close">
                    <i className="lnr lnr-cross" />
                  </button>
                </div>
              </div>
              <div className="off-canvas-item">
                {/* Start Mobile Menu Wrapper */}
                <div className="res-mobile-menu">
                  {/* Note Content Auto Generate By Jquery From Main Menu */}
                </div>
                {/* End Mobile Menu Wrapper */}
              </div>
              {/* Off Canvas Footer */}
              <div className="off-canvas-footer" />
            </div>
            {/* End Off Canvas Content Wrapper */}
          </div>
        </aside>
        {/*== End Side Menu ==*/}
      </div>
    </>
  );
}
