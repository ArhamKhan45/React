import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PrevNavbar from "./PrevNavbar";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Offers from "./Offers.jsx";
import HeadingBar from "./HeadingBar.jsx";
import StarProducts from "./StarProducts.jsx";
import HotAccessoriesMenu from "./HotAccessoriesMenu.jsx";
import HotAccessories from "./HotAccessories.jsx";
import ProductReview from "./ProductReview.jsx";
import Videolist from "./Videolist.jsx";
import Bannerslider from "./Bannerslider.jsx";
import Footer from "./Footer.jsx";

import data from "./Data/data.json";

function RoutePage() {
  return (
    <>
      <BrowserRouter>
        <PrevNavbar />
        <Navbar />
        <Slider />
        <Offers />
        <HeadingBar Text="STAR PRODUCTS" />
        <StarProducts />
        <HeadingBar Text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />
        <Route exact path="/music">
          <HotAccessories
            cover={data.hotAccessoriesCover.music}
            hotAccessoriesData={data.hotAccessories.music}
          />
        </Route>
        <Route exact path="/smartDevices">
          <HotAccessories
            cover={data.hotAccessoriesCover.smartDevice}
            hotAccessoriesData={data.hotAccessories.smartDevice}
          />
        </Route>
        <Route exact path="/home">
          <HotAccessories
            cover={data.hotAccessoriesCover.home}
            hotAccessoriesData={data.hotAccessories.home}
          />
        </Route>
        <Route exact path="/lifeStyle">
          <HotAccessories
            cover={data.hotAccessoriesCover.lifeStyle}
            hotAccessoriesData={data.hotAccessories.lifeStyle}
          />
        </Route>
        <Route exact path="/mobileAccessories">
          <HotAccessories
            cover={data.hotAccessoriesCover.mobileAccessories}
            hotAccessoriesData={data.hotAccessories.mobileAccessories}
          />
        </Route>
        <HeadingBar Text="PRODUCT REVIEWS" />
        <ProductReview productReviewData={data.productReviews} />
        <HeadingBar Text="VIDEOS" />
        <Videolist videoData={data.videos} />
        <HeadingBar Text="IN THE PRESS" />

        <Bannerslider bannerData={data.banner.end} />
        <Footer mainfooterdata={data.footer} />
      </BrowserRouter>
    </>
  );
}

export default RoutePage;
