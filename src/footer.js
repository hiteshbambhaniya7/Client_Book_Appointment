export default function Footer() {
  return (
    <>
      <footer className="footer-area ">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
              <div className="widget-item">
                <div className="about-widget">
                  <a className="footer-logo" href="index-2.html">
                    <img src="assets/img/logo.png" alt="Logo" />
                  </a>
                  <p className="mb-0">
                    Sed elit quam, iaculis sed semper sit amet udin vitae nibh
                    at magna akal semperFusce.
                  </p>
                  <ul className="widget-contact-info">
                    <li className="info-address">
                      <i className="icofont-location-pin" />
                      69 Halsey St, New York, Ny 10002, United States.
                    </li>
                    <li className="info-mail">
                      <i className="icofont-email" />
                      <a href="mailto://hello@yourdomain.com">
                        hello@yourdomain.com
                      </a>
                    </li>
                    <li className="info-phone">
                      <i className="icofont-ui-call" />
                      <a href="tel://(0091) 8547 632521">(0091) 8547 632521</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 offset-md-1 col-lg-3 offset-lg-0 col-xl-3 d-lg-none d-xl-block">
              <div className="widget-item d-inline-block">
                <h4 className="widget-title line-bottom">Popular Tags</h4>
                <div className="widget-tags">
                  <ul>
                    <li>
                      <a href="#/">Amazing</a>
                    </li>
                    <li>
                      <a href="#/">Envato</a>
                    </li>
                    <li>
                      <a href="#/">Themes</a>
                    </li>
                    <li>
                      <a href="#/">Clean</a>
                    </li>
                    <li>
                      <a href="#/">Wordpress</a>
                    </li>
                    <li>
                      <a href="#/">Creative</a>
                    </li>
                    <li>
                      <a href="#/">Mutilpurpose</a>
                    </li>
                    <li>
                      <a href="#/">Retina Ready</a>
                    </li>
                    <li>
                      <a href="#/">Twitter</a>
                    </li>
                    <li>
                      <a href="#/">Responsive</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
              <div className="widget-item">
                <h4 className="widget-title line-bottom">Recent Posts</h4>
                <nav className="widget-posts">
                  <ul className="posts-item">
                    <li>
                      <a href="blog-details.html">
                        <i className="icon icofont-rounded-double-right" />
                        Lorem Ispum dolor sit amet putilor
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i className="icon icofont-rounded-double-right" />
                        Medical is all about quality.
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i className="icon icofont-rounded-double-right" />
                        Is your website user friendly ?
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i className="icon icofont-rounded-double-right" />
                        Ai offer weekly updates &amp; more.
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i className="icon icofont-rounded-double-right" />
                        Customer should love your web.
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i className="icon icofont-rounded-double-right" />
                        Your site smooth and stunning.
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 offset-md-1 col-lg-4 offset-lg-0 col-xl-3">
              <div className="widget-item">
                <h4 className="widget-title line-bottom">Newsletter</h4>
                <div className="widget-newsletter">
                  <p>
                    Sign up for our mailing list to get latest updates and
                    offers.
                  </p>
                  <form className="newsletter-form input-btn-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <button className="btn btn-theme" type="button">
                      <i className="icofont-long-arrow-right" />
                    </button>
                  </form>
                </div>
                <div className="widget-social-icons">
                  <a href="#">
                    <i className="icofont-twitter" />
                  </a>
                  <a href="#">
                    <i className="icofont-google-plus" />
                  </a>
                  <a href="#">
                    <i className="icofont-pinterest" />
                  </a>
                  <a href="#">
                    <i className="icofont-rss" />
                  </a>
                  <a href="#">
                    <i className="icofont-facebook" />
                  </a>
                  <a href="#">
                    <i className="icofont-dribbble" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-12">
                <div className="widget-copyright">
                  <p>
                    © 2025 <span>MEXI</span>. Made with
                    <i className="icofont-heart-alt" /> by
                    <a
                      target="_blank"
                      href="../../www.hasthemes.com/index.html"
                    >
                      HasThemes
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
