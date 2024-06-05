import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import GreatTeam from "./GreatTeam";
import Portfolio from "./Portfolio";
import Vintage from "./Vintage";
import Services from "./Services";
import SetupNavbar from "./SetupNavbar";
import Go from "./Go";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <SetupNavbar />
        <Go />
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/Vintage" component={Vintage} />
        <Route path="/Service" component={Services} />
        <Route path="/GreatTeam" component={GreatTeam} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/ContactUs" component={ContactUs} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routing;
