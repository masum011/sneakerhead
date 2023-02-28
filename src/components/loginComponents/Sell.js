import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];
let user_avtar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSVk1DiBq4Us5qCMhx3ox1UGcFLJyTlUCfg&usqp=CAU';
function Sell() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <>
      <div className="col-md-9 mb-md-0 mb-5 mainSell">

      {/* <h2>upload product for i want to sell</h2> */}
        <div className="loginavtar d-flex justify-content-center">
          <img src={user_avtar} alt="user" />
        </div>
        <form id="contact-form" method="POST">
          <div className="row">
            <div className="col-md-6">
              <div className="md-form mb-0">
                <label htmlFor="name" className="">
                   Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="md-form mb-0">
                <label htmlFor="email" className="">
                   Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="md-form mb-0">
                <label htmlFor="subject" className="">
                  Title
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
          <div className="row">
            <div className="col-md-12">
              <div className="md-form mb-0">
                <label htmlFor="subject" className="">
                  Price
                </label>
                <input
                  placeholder=""
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="md-form">
                <label htmlFor="message">Product Description </label>
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
        </form>
        <div className="imgUpload">
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        </div>
        <br />
        <div className="text-center text-md-left">
          <a
            className="btn btn-primary"
            onclick="document.getElementById('contact-form').submit();"
          >
            Update
          </a>
        </div>
        <div className="status" />
      </div>
    </>
  );
}

export default Sell;
