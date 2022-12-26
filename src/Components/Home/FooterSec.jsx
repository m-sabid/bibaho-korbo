import React from "react";

const footerData = [
  {
    footerItems: "Help & Support",
    footerNavNames: [
      "Get Free Registration",
      "Membership Plans",
      "Contact us",
      "FAQ",
      "Sitemap",
    ],
  },
  {
    footerItems: "Corporate",
    footerNavNames: [
      "About Us",
      "Mission & Vision",
      "Affiliates/B2B",
      "VIP Service",
      "LifeStyle Blogs",
    ],
  },
  {
    footerItems: "Legal",
    footerNavNames: [
      "Privacy Policy",
      "Terms and Condition",
      "Fraud Alert",
      "Cookie Policy",
    ],
  },
];

const FooterSec = () => {
  return (
    <>
      <div className="my-footer">
        {/* main footer  */}

        {/* Footer top section */}
        <div className="my-footer-top">
          {/*1 content section */}
          <div className="top-footer-content">
            <h1 className="top-footer-title">
              Want to know more about BD Marriage and its services?
            </h1>
            <div className="button-group">
              <button className="myBtn myEmailBtn">Contact Us</button>
              <button className="myBtn myPhoneBtn">+88 09613821331</button>
            </div>
          </div>
          {/*2 image section */}
          <div className="img-sec">
            <img
              src="https://i.ibb.co/FsYYh2W/customer-support.png"
              alt=""
              className="topImage"
            />
          </div>
        </div>
        {/* footer bottom section */}
        <div className="my-footer-bottom">
          <div className="my-footer-nav">
            {footerData.map((dt, index) => {
              return (
                <>
                  <ul>
                    <li className="my-footer-nav-item">
                      {dt.footerItems} <hr />
                      <ul>
                        {dt.footerNavNames.map((item, index) => {
                          return (
                            <>
                              <li className="my-footer-nav-links">{item}</li>
                            </>
                          );
                        })}
                      </ul>
                    </li>
                  </ul>
                </>
              );
            })}
          </div>
          {/* footer ad section */}
          <div className="my-footer-ads">
            <h4 className="my-footer-nav-item">Download App</h4>
            <p>
              Download bibaho-korbo app to get better experience and get notify
              when someone response
            </p>
            <img
              className="play-store-image"
              src="https://i.ibb.co/VtzLryf/get-it-on-google-play-google-play-badge-png-logos-23.png"
              alt=""
            />
          </div>

          <div className="text-center w-full">
            <p>
              <hr /> Copyright © 2021 BD Marriage | All rights reserved.
            </p>
            <p>
              All content and graphics on this web site are the property of XYZ
              Limited.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSec;
