import React from "react";
import "./ContactusStyle.css";
import dottedborder from "./images/dotted-border.jpg";

function ContactUs() {
  function validateForm(event) {
    var y = document.forms["ContactUs-form"]["fEmail"].value;
    var z = document.forms["ContactUs-form"]["fMessage"].value;
    var x = document.forms["ContactUs-form"]["fName"].value;
    if (x === "") {
      alert("Name must be filled out");
      event.preventDefault();
    } else {
      if (!/^[A-Za-z\s]+$/.test(x) || x.length > 20) {
        alert("Name is incorrect or character limit cross is 20 ");
        event.preventDefault();
      }
    }

    if (y === "") {
      alert("E-mail must be filled out");
      event.preventDefault();
    } else {
      if (!/^[a-zA-Z0-9]+\S+@\S+\.[a-z]+$/.test(y)) {
        alert("E-mail is  incorrect");
        event.preventDefault();
      }
    }

    if (z === "") {
      alert("Message must be filled out");
      event.preventDefault();
    } else {
      if (z.length > 150) {
        alert("Message! characters limit cannot cross is 150 ");
        event.preventDefault();
      }
    }
  }
  return (
    <React.Fragment>
      <section className="container-fluid contactUs-box pb-sm-3 border">
        <section className="container pt-3 pt-sm-4 ">
          <div className="text-center">
            <h2 className="contactusheading text-white Contactusheadingfontsize  ">
              CONTACT US
            </h2>
          </div>
          <p className=" minicontact-fontsize mb-md-2 mb-0 text-center ">
            We are a full service design agency from the heart of London. We
            create perfect brands, vibrant identities, outstanding websites and
            creative concepts
          </p>
          <img src={dottedborder} alt="" className="img-fluid w-100  " />
          <form
            action="./Thanks"
            method="post"
            className=" mt-2 mt-md-5  ContactUsformclass"
            autoComplete="off"
            name="ContactUs-form"
            onSubmit={validateForm}
          >
            <div className="row mb-sm-5 mb-3">
              <div className="col-10 col-md-4 mx-auto ms-md-auto mb-3">
                <input
                  type="text"
                  name="fName"
                  id=""
                  placeholder="Name"
                  className="border-contact-form  bg-transparent  form-control mb-2 mb-md-4 rounded-0"
                />
                <input
                  type="email"
                  name="fEmail"
                  id=""
                  placeholder="Email"
                  className="border-contact-form bg-transparent form-control rounded-0"
                />
              </div>
              <div className="col-7  col-md-5 ms-auto me-md-auto mb-3 p-auto">
                <textarea
                  cols={40}
                  placeholder="Message"
                  className="resize bg-transparent border-contact-form  h-100  form-control rounded-0  "
                  name="fMessage"
                ></textarea>
              </div>
              <div className="col-3  me-auto p-auto">
                <input
                  type="submit"
                  value="Go"
                  className="form-control  rounded-circle contactsubmitbutton bg-transparent contactUs-box  "
                />
              </div>
            </div>
          </form>
        </section>
      </section>
    </React.Fragment>
  );
}

export default ContactUs;
