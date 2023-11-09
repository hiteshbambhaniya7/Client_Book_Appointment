import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/*== Start Header Wrapper ==*/}

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="header-align">
              <div className="header-logo-area">
                <a href="index-2.html">
                  <img
                    className="logo-main"
                    src="assets/img/logo.png"
                    alt="Logo"
                  />
                  <img
                    className="logo-light"
                    src="assets/img/logo-light.png"
                    alt="Logo"
                  />
                </a>
              </div>
              <div className="header-navigation-area">
                <ul className="main-menu nav justify-content-center">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="has-submenu">
                    <Link to="/services">Services</Link>
                    <ul className="submenu-nav">
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <Link to="/service-details">Service Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li className="has-submenu">
                    <a href="blog.html">Blog</a>
                    <ul className="submenu-nav">
                      <li>
                        <a href="blog.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Single</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="header-action-area">
                <div className="login-reg">
                  <Link to="/login">log in</Link>
                  <span>/</span>
                  <Link to="/register">register</Link>
                  <i className="icon icofont-user-alt-3" />
                </div>
                <div className="widget-language">
                  <span className="current">
                    Eng <i className="icon icofont-simple-down" />
                  </span>
                  <ul>
                    <li>
                      <a href="#">Ban</a>
                    </li>
                    <li>
                      <a href="#">Ger</a>
                    </li>
                  </ul>
                </div>
                <button className="btn-menu d-lg-none">
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*== End Header Wrapper ==*/}
    </>
  );
}
