import React from "react";
import ContactUs from "./ContactUs";
import GreatTeam from "./GreatTeam";
import Portfolio from "./Portfolio";
import Vintage from "./Vintage";
import Services from "./Services";

function Home() {
  return (
    <>
      <Vintage />
      <Services />
      <GreatTeam />
      <Portfolio />
      <ContactUs />
    </>
  );
}

export default Home;
