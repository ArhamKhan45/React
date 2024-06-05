import React from "react";
import SvgData from "./Data/SvgData";
import "../Styles/Footer.css";
import "../Styles/Mainfooter.css";

function Footer(props) {
  const mainFooterSuppportDisplay = props.mainfooterdata.support.map(
    (item, index) => {
      return (
        <p key={index} className="footerItem">
          <a href={item.url} className="footerlinks">
            {item.name}
          </a>
        </p>
      );
    }
  );
  const mainFootersShopAndLearnDisplay = props.mainfooterdata.shopAndLearn.map(
    (item, index) => {
      return (
        <p key={index} className="footerItem">
          <a href={item.url} className="footerlinks">
            {item.name}
          </a>
        </p>
      );
    }
  );
  const mainFootersRetailStoreDisplay = props.mainfooterdata.retailStore.map(
    (item, index) => {
      return (
        <p key={index} className="footerItem">
          <a href={item.url} className="footerlinks">
            {item.name}
          </a>
        </p>
      );
    }
  );
  const mainFootersAboutDisplay = props.mainfooterdata.aboutUS.map(
    (item, index) => {
      return (
        <p key={index} className="footerItem">
          <a href={item.url} className="footerlinks">
            {item.name}
          </a>
        </p>
      );
    }
  );
  const mainFootersContactUsDisplay = props.mainfooterdata.contactUs.map(
    (item, index) => {
      return (
        <p key={index} className="footerItem">
          <a href={item.url} className="footerlinks">
            {item.name}
          </a>
        </p>
      );
    }
  );

  return (
    <>
      <div className="prefooter">
        <div>
          {SvgData.repeatIcon}
          <p>
            <span>Hassle-free replacement</span>
            <br />
            10-day easy replacement policy on mi.com
          </p>
        </div>
        <div>
          {SvgData.shieldIcon}
          <p>
            <span>100% secure payments</span>
            <br />
            We support Cards, Wallets, EMI and COD
          </p>
        </div>
        <div>
          {SvgData.holoMapIcon}
          <p>
            <span>Vast service network</span>
            <br />
            1000 Mi service-centers across 600 cities
          </p>
        </div>
      </div>

      {/* prefooter 2 */}
      <div className="prefooter2">
        <div>
          <h3>LET'S STAY IN TOUCH</h3>
          <p>Get updates on sales specials and more</p>
        </div>
        <div>
          <div>
            <form action="" method="post">
              <input
                type="email"
                name=""
                id=""
                className="emailinput"
                placeholder="Enter your Email "
              />
              <button>{SvgData.arrowforwardIcon}</button>
            </form>
          </div>
          <p>Thanks. You're on our email list for special offers.</p>
        </div>
        <div>
          <h3>FOLLOW MI</h3>
          <p>We want to hear from you!</p>
        </div>
        <div>
          {SvgData.facebookIcon}
          {SvgData.youTubeIcon}
          {SvgData.instagramIcon}
          {SvgData.twitterIcon}
        </div>
      </div>
      {/* mainfooter 3 */}
      <div className="Main-footer">
        <div>
          <p>SUPPORT</p>
          {mainFooterSuppportDisplay}
        </div>
        <div>
          <p>SHOP AND LEARN</p>
          <br />
          {mainFootersShopAndLearnDisplay}
        </div>

        <div>
          <p>RETAIL STORE</p>
          {mainFootersRetailStoreDisplay}
        </div>
        <div>
          <p>ABOUT</p>
          {mainFootersAboutDisplay}
        </div>

        <div>
          <p>CONTACT US</p>
          {mainFootersContactUsDisplay}
        </div>
        <div>
          <p>Chat with our Virtual AI Bot(24/7 Live Agent Support)</p>
          <button>CHAT NOW</button>
        </div>
      </div>
      <div class="footerBorder">
        <p>
          Copyright © 2010 - 2021 Xiaomi. All Rights Reserved. Developed By
          Arham Ullah Khan
        </p>
      </div>
    </>
  );
}

export default Footer;
