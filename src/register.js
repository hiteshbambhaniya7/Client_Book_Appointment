import Footer from "./footer";
import Navbar from "./navbar";

export default function Register() {
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
                <h2 className="fw-bold mb-5">Register</h2>
                <form>
                  {/* First Name input */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputFirstName"
                      placeholder="Hitesh"
                    />
                    <label htmlFor="floatingInputFirstName">First Name</label>
                  </div>
                  {/* Last Name input */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputLastName"
                      placeholder="Hitesh"
                    />
                    <label htmlFor="floatingInputLastName">Last Name</label>
                  </div>
                  
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
                  {/* Repeat Password input */}
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      id="registerRepeatPassword"
                      className="form-control"
                      placeholder=""
                    />
                    <label
                      className="form-label"
                      htmlFor="registerRepeatPassword"
                    >
                      Repeat password
                    </label>
                  </div>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue
                      id="registerCheck"
                      defaultChecked
                      aria-describedby="registerCheckHelpText"
                    />
                    <label className="form-check-label" htmlFor="registerCheck">
                      I have read and agree to the terms
                    </label>
                  </div>
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-3"
                  >
                    Register
                  </button>
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
