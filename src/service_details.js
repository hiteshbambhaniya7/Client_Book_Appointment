import Footer from "./footer";
import Navbar from "./navbar";

export default function ServiceDetails() {
  return (
    <>
      {/*wrapper start*/}
      <div className="wrapper home-default-wrapper">

        <header className="header-area header-default sticky-header">
          <Navbar />
        </header>

        <main className="main-content site-wrapper-reveal">
          {/*== Start Departments Area ==*/}
          <section className="department-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="department-wrpp">
                    {/*== Start Sidebar Wrapper ==*/}
                    <div className="sidebar-wrapper">
                      {/* == Start Sidebar Item == */}
                      <div className="widget-item">
                        <h4 className="widget-title">Departments</h4>
                        <div className="widget-side-nav">
                          <ul>
                            <li>
                              <a href="service-details.html">Psychiatry</a>
                            </li>
                            <li>
                              <a className="active" href="service-details.html">
                                Dental
                              </a>
                            </li>
                            <li>
                              <a href="service-details.html">Cardiology</a>
                            </li>
                            <li>
                              <a href="service-details.html">Immunology</a>
                            </li>
                            <li>
                              <a href="service-details.html">Hematology</a>
                            </li>
                            <li>
                              <a href="service-details.html">
                                Gastroenterology
                              </a>
                            </li>
                            <li>
                              <a href="service-details.html">Orthopedics</a>
                            </li>
                            <li>
                              <a href="service-details.html">Pulmonary</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* == End Sidebar Item == */}
                      {/* == Start Sidebar Item == */}
                      <div className="widget-item">
                        <div className="widget-work-hours">
                          <h4 className="title">Work Hours</h4>
                          <ul>
                            <li>
                              <span className="work-day">Monday</span>
                              <span className="work-hours">7:00 - 17:00</span>
                            </li>
                            <li>
                              <span className="work-day">Tuesday</span>
                              <span className="work-hours">7:00 - 17:00</span>
                            </li>
                            <li>
                              <span className="work-day">Wednesday</span>
                              <span className="work-hours">7:00 - 17:00</span>
                            </li>
                            <li>
                              <span className="work-day">Thursday</span>
                              <span className="work-hours">7:00 - 17:00</span>
                            </li>
                            <li>
                              <span className="work-day">Friday</span>
                              <span className="work-hours">7:00 - 17:00</span>
                            </li>
                            <li>
                              <span className="work-day">Saturday</span>
                              <span className="work-hours">9:00 - 11:00</span>
                            </li>
                            <li>
                              <span className="work-day">Sunday</span>
                              <span className="work-hours">9:00 - 11:00</span>
                            </li>
                          </ul>
                          <a className="btn-theme btn-white" href="#/">
                            REQUEST A CONSULTATION
                          </a>
                        </div>
                      </div>
                      {/* == End Sidebar Item == */}
                      {/* == Start Sidebar Item == */}
                      <div className="widget-item">
                        <div className="widget-appointment-form">
                          <h4 className="title">Book An Appointment</h4>
                          <form
                            id="contact-form"
                            action="http://whizthemes.com/mail-php/raju/arden/mail.php"
                            method="post"
                          >
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="con_name"
                                    placeholder="Name *"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="email"
                                    name="con_email"
                                    placeholder="Email *"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="con_phone"
                                    placeholder="Phone"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group datepicker-group">
                                  <label
                                    htmlFor="datepicker"
                                    className="form-label icofont-calendar"
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
                                    rows={4}
                                    placeholder="Message"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group mb-0">
                                  <button
                                    className="btn btn-theme"
                                    type="submit"
                                  >
                                    Reservation Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* == End Sidebar Item == */}
                    </div>
                    {/*== Ens Sidebar Wrapper ==*/}
                    <div className="department-content">
                      <h2 className="title">Dental</h2>
                      <div className="swiper-container department-gallery">
                        <div className="swiper-wrapper gallery-slider">
                          <div className="swiper-slide">
                            <img
                              src="assets/img/photos/department-s1.jpg"
                              alt="Mexi-Image"
                            />
                          </div>
                          <div className="swiper-slide">
                            <img
                              src="assets/img/photos/department-s2.jpg"
                              alt="Mexi-Image"
                            />
                          </div>
                        </div>
                        {/* Add Arrows */}
                        <div className="swiper-button-prev">
                          <i className="icofont-rounded-left" />
                        </div>
                        <div className="swiper-button-next">
                          <i className="icofont-rounded-right" />
                        </div>
                      </div>
                      <div className="content">
                        <p>
                          Meditex Clinic's Department of Dental Specialties in
                          Minnesota provides coordinated care for adults and
                          children who require specialized dental care.
                          Depending on the person's needs, care may include one
                          specialty or more than one (multispecialty care, also
                          called multidisciplinary care).
                        </p>
                        <p>
                          An attractive, healthy smile is an important part of
                          life. Our General Dentistry Department provides a
                          broad range of services to meet your family’s dental
                          needs including:
                        </p>
                        <p>Preventive Dental Care:</p>
                        <ul className="list-style1">
                          <li>
                            Oral Exam/Radiograph Study (mandatory at initial
                            visit)
                          </li>
                          <li>Periodontal Scaling/Deep Cleaning</li>
                          <li>
                            Dental care for pregnant patients consists on
                            evaluation and cleaning; mainly, to educate patients
                            on oral health care and pregnancy
                          </li>
                          <li>
                            Restorative Dentistry – Amalgam/Composite Fillings
                          </li>
                        </ul>
                      </div>
                      <div className="price-list-col2">
                        <div className="price-list">
                          <h4>Cosmetic Dentistry</h4>
                          <ul>
                            <li>
                              <span className="service-name">
                                Porcelain Veneers
                              </span>
                              <span className="service-price">$1200</span>
                            </li>
                            <li>
                              <span className="service-name">
                                Dental Bonding
                              </span>
                              <span className="service-price">$100</span>
                            </li>
                            <li>
                              <span className="service-name">
                                Laser Gum Contouring
                              </span>
                              <span className="service-price">$300</span>
                            </li>
                            <li>
                              <span className="service-name">
                                Teeth Whitening
                              </span>
                              <span className="service-price">$200</span>
                            </li>
                          </ul>
                        </div>
                        <div className="price-list">
                          <h4>Restorative Dentistry</h4>
                          <ul>
                            <li>
                              <span className="service-name">
                                Dental Bridges
                              </span>
                              <span className="service-price">$1000</span>
                            </li>
                            <li>
                              <span className="service-name">
                                Dental Crowns
                              </span>
                              <span className="service-price">$500</span>
                            </li>
                            <li>
                              <span className="service-name">
                                Dental Fillings
                              </span>
                              <span className="service-price">$100</span>
                            </li>
                            <li>
                              <span className="service-name">
                                Inlays and Onlays
                              </span>
                              <span className="service-price">$800</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-single">
                        <h2 className="title">
                          Head Of <span>Department</span>
                        </h2>
                        <div className="membr-info">
                          <h4 className="name">Dr. Genoveva Leannon</h4>
                          <h5 className="designation">Internal Medicine</h5>
                          <div className="desc">
                            <p>
                              Dr. Genoveva Leannon received his medical degree
                              from University of Minnesota Medical School and
                              has been in practice between 6-10 years.
                            </p>
                            <ul>
                              <li>
                                <span>Phone Number</span>
                                <span>(131) 839-6275</span>
                              </li>
                              <li>
                                <span>Years in Practice</span>
                                <span>6 - 10 Years</span>
                              </li>
                              <li>
                                <span>Languages</span>
                                <span>English</span>
                              </li>
                            </ul>
                            <a href="#/" className="btn-link">
                              VIEW FULL PROFILE
                            </a>
                          </div>
                        </div>
                        <div className="thumb">
                          <img
                            src="assets/img/photos/doctor-02.png"
                            alt="Mexi-Image"
                          />
                        </div>
                      </div>
                      <div className="faq-area">
                        <h2 className="title">
                          General <span>FAQs</span>
                        </h2>
                        <div className="accordian-content">
                          <div className="accordion" id="accordionStyle">
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
                                  What causes tooth decay?
                                  <i className="icon icon-plus icofont-plus" />
                                  <i className="icon icon-minus icofont-minus" />
                                </button>
                              </div>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionStyle"
                              >
                                <div className="accordion-body">
                                  Decay is caused by bacteria that collect on
                                  teeth and feed on the carbohydrates in our
                                  diet. The bacteria produce acid that wears
                                  away at the enamel on our teeth. If decay is
                                  left untreated, it can cause pain, infection
                                  and even tooth loss. Protect your teeth
                                  against decay by brushing at least twice a
                                  day, flossing daily, visiting your dentist
                                  regularly.
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
                                  What is dry mouth and what can I do about it?
                                  <i className="icon icon-plus icofont-plus" />
                                  <i className="icon icon-minus icofont-minus" />
                                </button>
                              </div>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionStyle"
                              >
                                <div className="accordion-body">
                                  Decay is caused by bacteria that collect on
                                  teeth and feed on the carbohydrates in our
                                  diet. The bacteria produce acid that wears
                                  away at the enamel on our teeth. If decay is
                                  left untreated, it can cause pain, infection
                                  and even tooth loss. Protect your teeth
                                  against decay by brushing at least twice a
                                  day, flossing daily, visiting your dentist
                                  regularly.
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div
                                className="accordion-header"
                                id="headingThree"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  How often should I change my toothbrush?
                                  <i className="icon icon-plus icofont-plus" />
                                  <i className="icon icon-minus icofont-minus" />
                                </button>
                              </div>
                              <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionStyle"
                              >
                                <div className="accordion-body">
                                  Decay is caused by bacteria that collect on
                                  teeth and feed on the carbohydrates in our
                                  diet. The bacteria produce acid that wears
                                  away at the enamel on our teeth. If decay is
                                  left untreated, it can cause pain, infection
                                  and even tooth loss. Protect your teeth
                                  against decay by brushing at least twice a
                                  day, flossing daily, visiting your dentist
                                  regularly.
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div
                                className="accordion-header"
                                id="headingFour"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseFour"
                                  aria-expanded="false"
                                  aria-controls="collapseFour"
                                >
                                  How often should I see a dentist?
                                  <i className="icon icon-plus icofont-plus" />
                                  <i className="icon icon-minus icofont-minus" />
                                </button>
                              </div>
                              <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFour"
                                data-bs-parent="#accordionStyle"
                              >
                                <div className="accordion-body">
                                  Decay is caused by bacteria that collect on
                                  teeth and feed on the carbohydrates in our
                                  diet. The bacteria produce acid that wears
                                  away at the enamel on our teeth. If decay is
                                  left untreated, it can cause pain, infection
                                  and even tooth loss. Protect your teeth
                                  against decay by brushing at least twice a
                                  day, flossing daily, visiting your dentist
                                  regularly.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="case-area">
                        <div className="section-title">
                          <h2 className="title">
                            Cases <span>Studies</span>
                          </h2>
                          <a className="btn-link" href="#/">
                            View All Cases
                          </a>
                        </div>
                        <div className="swiper-container case-slider-container">
                          <div className="swiper-wrapper case-slider">
                            {/*== Start Case Item ==*/}
                            <div className="swiper-slide case-item">
                              <div className="thumb">
                                <img
                                  src="assets/img/cases/01.jpg"
                                  alt="Mexi-Image"
                                />
                              </div>
                              <div className="content">
                                <h5 className="name">
                                  <a href="#/">Natalie Huston</a>
                                </h5>
                                <h6 className="category">
                                  Teeth Cleaning, High-tech materials
                                </h6>
                              </div>
                            </div>
                            {/*== End Case Item ==*/}
                            {/*== Start Case Item ==*/}
                            <div className="swiper-slide case-item">
                              <div className="thumb">
                                <img
                                  src="assets/img/cases/02.jpg"
                                  alt="Mexi-Image"
                                />
                              </div>
                              <div className="content">
                                <h5 className="name">
                                  <a href="#/">Angela Mayer</a>
                                </h5>
                                <h6 className="category">Teeth Cleaning</h6>
                              </div>
                            </div>
                            {/*== End Case Item ==*/}
                            {/*== Start Case Item ==*/}
                            <div className="swiper-slide case-item">
                              <div className="thumb">
                                <img
                                  src="assets/img/cases/01.jpg"
                                  alt="Mexi-Image"
                                />
                              </div>
                              <div className="content">
                                <h5 className="name">
                                  <a href="#/">Natalie Huston</a>
                                </h5>
                                <h6 className="category">
                                  Teeth Cleaning, High-tech materials
                                </h6>
                              </div>
                            </div>
                            {/*== End Case Item ==*/}
                          </div>
                          {/* Add Pagination */}
                          <div className="swiper-pagination" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*== End Departments Area ==*/}
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
