import React from "react";

function Help() {
  return (
    <div>
      <>
        {/*Section: Contact v.2*/}
        <section className="mb-4">
          {/*Section heading*/}
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>
          {/*Section description*/}
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>
          <div className="row rowSectionmain">
            {/*Grid column*/}
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="name" className="">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email" className="">
                        Your email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                    </div>
                  </div>
                  {/*Grid column*/}
                </div>
                {/*Grid row*/}
                {/*Grid row*/}
                <div className="rowSection">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject" className="">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                {/*Grid row*/}
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  <div className="col-md-12">
                    <div className="md-form">
                        <label htmlFor="message">Your message</label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows={2}
                        className="form-control md-textarea"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                {/*Grid row*/}
              </form>
              <br /><br />
              <div className="text-center text-md-left">
                <a
                  className="btn btn-primary"
                  onclick="document.getElementById('contact-form').submit();"
                >
                  Send
                </a>
              </div>
              <div className="status" />
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x" />
                  <p>Sector 49,Gurgaon,India</p>
                </li>
                <li>
                  <i className="fas fa-phone mt-4 fa-2x" />
                  <p>078273 25235</p>
                </li>
                <li>
                  <i className="fas fa-envelope mt-4 fa-2x" />
                  <p>masum.r@anttino.io</p>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
          </div>
        </section>
        {/*Section: Contact v.2*/}
      </>
    </div>
  );
}

export default Help;
