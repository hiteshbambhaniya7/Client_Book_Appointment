import Footer from "./footer";
import Navbar from "./navbar";

export default function HomePage() {
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
          {/*== Start Hero Area Wrapper ==*/}
          <section className="home-slider-area slider-default bg-img" data-bg-img="/assets/img/slider/main-slide-01.jpg" style={{ backgroundImage: 'url("assets/img/slider/main-slide-01.jpg")' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* Start Slide Item */}
                  <div
                    className="slider-content-area"
                    // data-aos="fade-zoom-in"
                    data-aos-duration={1300}
                  >
                    <h5>feel the difference with us</h5>
                    <h2>
                      Your Health <span>Is Our Priority</span>
                    </h2>
                  </div>
                  {/* End Slide Item */}
                  <div className="swiper-container service-slider-container">
                    <div className="swiper-wrapper service-slider service-category">
                      <div className="swiper-slide category-item">
                        <div className="icon">
                          <i className="icofont-stethoscope-alt" />
                        </div>
                        <h4>Diagnose</h4>
                        <p>Examination &amp; Diagnosis</p>
                      </div>
                      <div className="swiper-slide category-item">
                        <div className="icon">
                          <i className="icofont-brain-alt" />
                        </div>
                        <h4>Treatment</h4>
                        <p>Treatment of the disease</p>
                      </div>
                      <div className="swiper-slide category-item">
                        <div className="icon">
                          <i className="icofont-paralysis-disability" />
                        </div>
                        <h4>Care Healthy</h4>
                        <p>Care and recuperation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Hero Area Wrapper ==*/}
          {/*== Start Appointment Form Area Wrapper ==*/}
          <section className="appointment-area" data-bg-color="#eaeded">
            <div className="appointment-form-style1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="appointment-form">
                      <div className="section-title">
                        <h5>We Alway Ready Helps you</h5>
                        <h2 className="title">
                          Book An <span>Appointment</span>
                        </h2>
                      </div>
                      <form
                        id="contact-form"
                        action="http://whizthemes.com/mail-php/raju/arden/mail.php"
                        method="post"
                      >
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                name="con_name"
                                placeholder="Enter your name..."
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="email"
                                name="con_email"
                                placeholder="sample@gmail.com"
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                name="con_phone"
                                placeholder="Phone"
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group datepicker-group">
                              <label
                                htmlFor="datepicker"
                                className="form-label icon icofont-calendar"
                              />
                              <input
                                className="form-control"
                                id="datepicker"
                                type="text"
                                name="con_date"
                                placeholder="Date"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb-0">
                              <textarea
                                name="con_message"
                                rows={7}
                                placeholder="Your message here..."
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb-0">
                              <button className="btn btn-theme" type="submit">
                                Make an appointment
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Message Notification */}
                    <div className="form-message" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Appointment Form Area Wrapper ==*/}
          {/*== Start Feature Area Wrapper ==*/}
          <section
            className="feature-area feature-default-area"
            data-bg-color="#eaeded"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="section-title"
                    data-aos="fade-up"
                    data-aos-duration={1100}
                  >
                    <h5>Why Choose Mexi Medical</h5>
                    <h2 className="title">
                      The Best <span>For Your Health</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-xl-8">
                  <div
                    className="row icon-box-style1"
                    data-aos="fade-up"
                    data-aos-duration={1100}
                  >
                    <div className="col-md-6">
                      <div className="icon-box-item">
                        <div className="icon">
                          <i className="icofont-prescription" />
                        </div>
                        <div className="content">
                          <h5 className="title">Medical Counseling</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consect adipisicing elit
                            vero. Donec ultri sollicitudin lacus
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="icon-box-item">
                        <div className="icon">
                          <i className="icofont-doctor-alt" />
                        </div>
                        <div className="content">
                          <h5 className="title">Top Level Doctors</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consect adipisicing elit
                            vero. Donec ultri sollicitudin lacus
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="icon-box-item">
                        <div className="icon">
                          <i className="icofont-microscope" />
                        </div>
                        <div className="content">
                          <h5 className="title">Medical Facilites</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consect adipisicing elit
                            vero. Donec ultri sollicitudin lacus
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="icon-box-item">
                        <div className="icon">
                          <i className="icofont-ambulance-cross" />
                        </div>
                        <div className="content">
                          <h5 className="title">24 Hours Services</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consect adipisicing elit
                            vero. Donec ultri sollicitudin lacus
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="icon-box-item">
                        <div className="icon">
                          <i className="icofont-blood" />
                        </div>
                        <div className="content">
                          <h5 className="title">Personal Services</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consect adipisicing elit
                            vero. Donec ultri sollicitudin lacus
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="icon-box-item">
                        <div className="icon">
                          <i className="icofont-paralysis-disability" />
                        </div>
                        <div className="content">
                          <h5 className="title">Dedicated Patient Care</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consect adipisicing elit
                            vero. Donec ultri sollicitudin lacus
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="thumb"
              data-aos="fade-left"
              data-aos-duration={1500}
            >
              <img src="assets/img/photos/doctor-01.png" alt="Mexi-Image" />
            </div>
          </section>
          {/*== End Feature Area Wrapper ==*/}
          {/*== Start Team Area Wrapper ==*/}
          <section className="team-area team-default-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="section-title text-center"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <h5>Meet Our Docots</h5>
                    <h2 className="title">
                      Professional &amp; <span>Enthusiastic</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="swiper-container team-slider-container"
                    data-aos="fade-up"
                    data-aos-duration={1300}
                  >
                    <div className="swiper-wrapper team-slider">
                      {/*== Start Team Item ==*/}
                      <div className="swiper-slide team-member">
                        <div className="thumb">
                          <img
                            src="assets/img/team/01.jpg"
                            alt="Mexi-HasTech"
                          />
                        </div>
                        <div className="content">
                          <div className="member-info">
                            <h4 className="name">Dr. Helen Willmore</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed ut sapi euismod, auctor orci ut.
                            </p>
                            <a href="#/" className="btn-link">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*== End Team Item ==*/}
                      {/*== Start Team Item ==*/}
                      <div className="swiper-slide team-member">
                        <div className="thumb">
                          <img
                            src="assets/img/team/02.jpg"
                            alt="Mexi-HasTech"
                          />
                        </div>
                        <div className="content">
                          <div className="member-info">
                            <h4 className="name">Dr. Robert David</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed ut sapi euismod, auctor orci ut.
                            </p>
                            <a href="#/" className="btn-link">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*== End Team Item ==*/}
                      {/*== Start Team Item ==*/}
                      <div className="swiper-slide team-member">
                        <div className="thumb">
                          <img
                            src="assets/img/team/03.jpg"
                            alt="Mexi-HasTech"
                          />
                        </div>
                        <div className="content">
                          <div className="member-info">
                            <h4 className="name">Dr. Kristina Castle</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed ut sapi euismod, auctor orci ut.
                            </p>
                            <a href="#/" className="btn-link">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*== End Team Item ==*/}
                    </div>
                    {/* Add Pagination */}
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Team Area Wrapper ==*/}
          {/*== Start Testimonial Area Wrapper ==*/}
          <section
            className="testimonial-area testimonial-default-area bg-img"
            data-bg-img="assets/img/photos/testimonial-bg1.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="section-title text-center"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <h5>Testimonial</h5>
                    <h2 className="title">
                      Trusted <span>From Clients</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="swiper-container testimonial-slider-container"
                    data-aos="fade-up"
                    data-aos-duration={1100}
                  >
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
                            “It’s been an absolute pleasure to work with Mexi,
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
                            “It’s been an absolute pleasure to work with Mexi,
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
                    <div
                      className="swiper-container brand-logo-slider-container"
                      data-aos="fade-up"
                      data-aos-duration={1200}
                    >
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
                  <div
                    className="section-title text-center"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <h5>Pricing List</h5>
                    <h2 className="title">
                      Protect <span>With Health Care Card</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="row row-gutter-0 pricing-items-style1"
                data-aos="fade-up"
                data-aos-duration={1100}
              >
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
          {/*== Start Blog Area Wrapper ==*/}
          <section className="blog-area blog-default-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="section-title"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <h2 className="title">
                      Tips &amp; <span>Tricks</span>
                    </h2>
                  </div>
                  <div
                    className="post-items-style1"
                    data-aos="fade-up"
                    data-aos-duration={1100}
                  >
                    {/*== Start Blog Post Item ==*/}
                    <div className="post-item">
                      <div className="thumb">
                        <a href="blog-details.html">
                          <img src="assets/img/blog/01.jpg" alt="Mexi-Blog" />
                        </a>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a href="blog-details.html">
                            How to cleaning exterior glasses secure &amp;
                            bright?
                          </a>
                        </h4>
                        <div className="meta">
                          Sep 17th, 2020 by
                          <a className="author" href="blog.html">
                            Admin
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*== End Blog Post Item ==*/}
                    {/*== Start Blog Post Item ==*/}
                    <div className="post-item">
                      <div className="thumb">
                        <a href="blog-details.html">
                          <img src="assets/img/blog/02.jpg" alt="Mexi-Blog" />
                        </a>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a href="blog-details.html">
                            Your building look alway modern and shiny more with
                            Clenora
                          </a>
                        </h4>
                        <div className="meta">
                          Sep 17th, 2020 by
                          <a className="author" href="blog.html">
                            Admin
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*== End Blog Post Item ==*/}
                    {/*== Start Blog Post Item ==*/}
                    <div className="post-item">
                      <div className="thumb">
                        <a href="blog-details.html">
                          <img src="assets/img/blog/03.jpg" alt="Mexi-Blog" />
                        </a>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a href="blog-details.html">
                            Notes when vacuuming in <br />
                            the house
                          </a>
                        </h4>
                        <div className="meta">
                          Sep 17th, 2020 by
                          <a className="author" href="blog.html">
                            Admin
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*== End Blog Post Item ==*/}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="section-title mt-md-70"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <h2 className="title">FAQs</h2>
                  </div>
                  <div
                    className="accordian-content"
                    data-aos="fade-up"
                    data-aos-duration={1100}
                  >
                    <div
                      className="accordion accordion-style2 no-bg"
                      id="accordionStyle"
                    >
                      <div className="accordion-item">
                        <div className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Can I Get A Divorce Without A Consultant?
                            <i className="icon icon-plus icofont-thin-down" />
                            <i className="icon icon-minus icofont-close-line" />
                          </button>
                        </div>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionStyle"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur consectetur elit lacinia ornare. In
                            volutpat rutrum molestie. Vivamus efficitur orci, ac
                            gravida eros bibendum non. Nullam auctor varius fer
                            vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            I Have A Technical Problem Or Support Issue I Need
                            Resolved, Who Do I Email?
                            <i className="icon icon-plus icofont-thin-down" />
                            <i className="icon icon-minus icofont-close-line" />
                          </button>
                        </div>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionStyle"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur consectetur elit lacinia ornare. In
                            volutpat rutrum molestie. Vivamus efficitur orci, ac
                            gravida eros bibendum non. Nullam auctor varius fer
                            vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What Other Services Are You Compatible With?
                            <i className="icon icon-plus icofont-thin-down" />
                            <i className="icon icon-minus icofont-close-line" />
                          </button>
                        </div>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionStyle"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur consectetur elit lacinia ornare. In
                            volutpat rutrum molestie. Vivamus efficitur orci, ac
                            gravida eros bibendum non. Nullam auctor varius fer
                            vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Are You Hiring?
                            <i className="icon icon-plus icofont-thin-down" />
                            <i className="icon icon-minus icofont-close-line" />
                          </button>
                        </div>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionStyle"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur consectetur elit lacinia ornare. In
                            volutpat rutrum molestie. Vivamus efficitur orci, ac
                            gravida eros bibendum non. Nullam auctor varius fer
                            vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices.
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className="btn-line" href="#/">
                      View All Questions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Blog Area Wrapper ==*/}
         
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
