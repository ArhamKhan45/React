import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// routes
import Navbar from "../Components/NavbarComponent";
import Carousel from "../Components/CarouselComponent";
import FormComponent from "../Components/FormComponent";
import TwoPersonComponent from "../Components/TwoPersonComponent";
import CustomerSays from "../Components/CustomerSays";
import CallBar from "../Components/CallBar";
import OurStats from "../Components/OurStats";
import Smoothshipping from "../Components/Smoothshipping.jsx";
import FooterComponent from "../Components/FooterComponent";
import Madeby from "../Components/Madeby.jsx";
import Headertext from "../Components/Headertext";
import ServiceFormComponent from "../Components/ServiceFormComponent";
import Ourteam from "../Components/Ourteam";
import AboutUs from "../Components/AboutUs";
import Contactus from "../Components/Contactus";

function Routepage() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <Carousel />
          <FormComponent />
          <TwoPersonComponent />
          <CustomerSays />
          <Smoothshipping />
          <CallBar />
          <OurStats />
        </Route>

        <Route path="/Home">
          <Carousel />
          <FormComponent />
          <TwoPersonComponent />
          <CustomerSays />
          <Smoothshipping />
          <CallBar />
          <OurStats />
        </Route>

        {/* about page */}
        <Route path="/About">
          <Carousel />
          <Headertext
            headingtext="About Us"
            paratext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!"
          />
          <AboutUs />
          <CallBar />
          <Headertext
            headingtext="Our Team"
            paratext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!"
          />
          <Ourteam />
        </Route>

        {/* Contact */}

        <Route path="/Contact">
          <Carousel />
          <Headertext
            headingtext="Contact Us"
            paratext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!"
          />
          <Contactus />
          <CallBar />
        </Route>

        {/* service */}
        <Route path="/Service">
          <Carousel />
          <Headertext
            headingtext="Services"
            paratext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!"
          />
          <ServiceFormComponent />
          <Smoothshipping />
          <CallBar />
        </Route>
        <FooterComponent />
        <Madeby />
      </BrowserRouter>
    </>
  );
}

export default Routepage;
