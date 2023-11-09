import { Link } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

export default function LogIn() {
  return (
    <>
      <header className="header-area header-default transparent sticky-header">
        <Navbar />
      </header>

      {/* Section: Design Block */}
      <section className="text-center">
        {/* Background image */}
        <div
          className="p-5 bg-image"
          style={{
            "background-image":
              "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
            height: "300px",
          }}
        />
        {/* Background image */}
        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            "margin-top": "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            "backdrop-filter": "blur(30px)",
          }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <h2 className="fw-bold mb-5">LogIn</h2>
                <form>
                  
                  {/* Email input */}
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      id="registerEmail"
                      className="form-control"
                      placeholder="hitesh@gmail.co,"
                    />
                    <label className="form-label" htmlFor="registerEmail">
                      Email
                    </label>
                  </div>
                  {/* Password input */}
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      id="registerPassword"
                      className="form-control"
                      placeholder=""
                    />
                    <label className="form-label" htmlFor="registerPassword">
                      Password
                    </label>
                  </div>
                  {/* 2 column grid layout */}
                  <div className="row mb-4">
                    <div className="col-md-6 d-flex justify-content-center">
                      {/* Checkbox */}
                      <div className="form-check mb-3 mb-md-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="loginCheck"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="loginCheck"
                        >
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                      {/* Simple link */}
                      <a href="#!">Forgot password?</a>
                    </div>
                  </div>
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Log in
                  </button>
                  {/* Register buttons */}
                  <div className="text-center">
                    <p>
                      Not a member? <Link to="/register">Register</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
      <Footer />
    </>
  );
}
