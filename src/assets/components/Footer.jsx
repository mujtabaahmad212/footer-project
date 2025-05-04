import React from "react";
import "./Footer.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import logo from "../logo.avif";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <footer>
        <div className="all-row w-100 d-flex justify-content-around  ">
          <div className="col-1 d-flex flex-column   justify-content-center  align-items-start    ">
            <a className="logo-link" href="https://sundaybazar.com.pk/">
              <img src={logo} alt="" />
            </a>
            <a className="email-link" href="mailto:info@sundaybazar.com.pk">
              <MdOutlineMailOutline size={24} />
              info@sundaybazar.com.pk
            </a>
            <a className="wa-link" href="https://wa.me/923190371504">
              <FaWhatsapp size={24} />
              0319-0371504
            </a>
            <a className="phone-link" href="tel:+922133264788">
              <CiPhone size={24} />
              021-33264788
            </a>
            <div className="social-links  ">
              <a href="https://web.facebook.com/sundaybazarr?_rdc=1&_rdr#">
                <FaFacebook size={22} />
              </a>
              <a href="https://www.instagram.com/sundaybazar___">
                <FaSquareInstagram size={22} />
              </a>
              <a href="https://www.linkedin.com/company/sunday-bazaarr?originalSubdomain=pk">
                <FaLinkedin size={22} />
              </a>
              <a href="https://www.tiktok.com/@sundaybazar_">
                <FaTiktok size={22} />
              </a>
            </div>
          </div>

          <div className="col-2 user-text1  d-flex flex-column text-white">
            <h1 className="">User Help</h1>
            <a href="https://sundaybazar.com.pk/pages/size-chart">SIZE GUIDE</a>
            <a href="https://sundaybazar.com.pk/pages/faq">FAQS</a>
            <a href="https://sundaybazar.com.pk/pages/conditions-guide">
              CONDITION GUID
            </a>
            <a href="https://sundaybazar.com.pk/pages/about-us">ABOUT US</a>
            <a href="https://sundaybazar.com.pk/pages/terms-of-services">
              TERMS AND SERVICE
            </a>
            <a href="https://sundaybazar.com.pk/pages/operational-hours">
              OPERATIONAL HOURS
            </a>
            <a href="https://sundaybazar.com.pk/pages/track-order-1">
              TRACK ORDER
            </a>
            <a href="https://sundaybazar.com.pk/pages/shipping-policy">
              SHIPING POLICY
            </a>
            <a href="https://sundaybazar.com.pk/pages/return-and-exchange-policy">
              RETURN AND EXCHANGE
            </a>
            <a href="https://sundaybazar.com.pk/pages/privacy-policy">
              PRIVACY POLICY
            </a>
          </div>

          <div className="col-3">
            <h1>Usefull Links</h1>
            <a href="https://sundaybazar.com.pk/">Home</a>
            <a href="https://sundaybazar.com.pk/">Women</a>
            <a href="https://sundaybazar.com.pk/pages/men">Men</a>
            <a href="https://sundaybazar.com.pk/pages/kids">Kids</a>
          </div>

          <div className="col-4">
            <h1>NewsLetter Signup</h1>
            <p>Subscribe to our newsletter for upcoming discounts updates</p>

            <span className="email-details">
              <input
                className="email-input"
                placeholder="Email adress"
                type="email"
              />{" "}
              <button className="subs-btn" type="submit">
                Subscribe
              </button>
            </span>
          </div>
          {/* all divs */}
        </div>


        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Get in touch
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="col-1 d-flex flex-column   justify-content-center  align-items-start    ">
            <a className="logo-link" href="https://sundaybazar.com.pk/">
              <img src={logo} alt="" />
            </a>
            <a className="email-link" href="mailto:info@sundaybazar.com.pk">
              <MdOutlineMailOutline size={24} />
              info@sundaybazar.com.pk
            </a>
            <a className="wa-link" href="https://wa.me/923190371504">
              <FaWhatsapp size={24} />
              0319-0371504
            </a>
            <a className="phone-link" href="tel:+922133264788">
              <CiPhone size={24} />
              021-33264788
            </a>
            <div className="social-links  ">
              <a href="https://web.facebook.com/sundaybazarr?_rdc=1&_rdr#">
                <FaFacebook size={22} />
              </a>
              <a href="https://www.instagram.com/sundaybazar___">
                <FaSquareInstagram size={22} />
              </a>
              <a href="https://www.linkedin.com/company/sunday-bazaarr?originalSubdomain=pk">
                <FaLinkedin size={22} />
              </a>
              <a href="https://www.tiktok.com/@sundaybazar_">
                <FaTiktok size={22} />
              </a>
            </div>
          </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      User Help
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body   d-flex flex-column  ">
            
            <a href="https://sundaybazar.com.pk/pages/size-chart">SIZE GUIDE</a>
            <a href="https://sundaybazar.com.pk/pages/faq">FAQS</a>
            <a href="https://sundaybazar.com.pk/pages/conditions-guide">
              CONDITION GUID
            </a>
            <a href="https://sundaybazar.com.pk/pages/about-us">ABOUT US</a>
            <a href="https://sundaybazar.com.pk/pages/terms-of-services">
              TERMS AND SERVICE
            </a>
            <a href="https://sundaybazar.com.pk/pages/operational-hours">
              OPERATIONAL HOURS
            </a>
            <a href="https://sundaybazar.com.pk/pages/track-order-1">
              TRACK ORDER
            </a>
            <a href="https://sundaybazar.com.pk/pages/shipping-policy">
              SHIPING POLICY
            </a>
            <a href="https://sundaybazar.com.pk/pages/return-and-exchange-policy">
              RETURN AND EXCHANGE
            </a>
            <a href="https://sundaybazar.com.pk/pages/privacy-policy">
              PRIVACY POLICY
            </a>
          </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Usefull Links
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body  ">
            
            <a href="https://sundaybazar.com.pk/">Home</a>
            <a href="https://sundaybazar.com.pk/">Women</a>
            <a href="https://sundaybazar.com.pk/pages/men">Men</a>
            <a href="https://sundaybazar.com.pk/pages/kids">Kids</a>
          </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
     NewsLetter Signup
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
 <div className="accordion-body text-white">
            <h1>NewsLetter Signup</h1>
            <p>Subscribe to our newsletter for upcoming discounts updates</p>

            <span className="email-details ">
              <input
                className="email-input text-white"
                placeholder="Email adress"
                type="email"
              />{" "}
              <button className="subs-btn" type="submit">
                Subscribe
              </button>
            </span>
          </div>
    </div>
    
  </div>
  
</div>
      </footer>
    </>
  );
}
export default Footer;
