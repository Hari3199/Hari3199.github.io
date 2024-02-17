import React from "react";
import "../Styles/Contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Contactme = () => {
  const handleButtonClick = () => {
    const phoneNumber = "9773166630"; 
    window.location.href = `tel:${phoneNumber}`;
  };
  const emaillink = () => {
    window.location.href = "nainaharesh31@gmail.com";
  };
  const Linkd_llink = () => {
    window.location.href = "https://www.linkedin.com/in/nhj31/";
  };
  const github_llink = () => {
    window.location.href = "https://github.com/Hari3199";
  };

  return (
    <section className="Contact-maindiv" id="contact">
      <div className="heading-div mx-28">
        <h1 className='text-center font-bold text-3xl shadow-md shadow-red-200'>Contact <span className="text-orange-200">Me</span></h1>
      </div>

      <div className="contact">
        {/* contact details */}
        <div className="contact-details">
          <div className="details-cards">
            <div className="details-card bg-gradient-to-t from-orange-300 rounded-full to-slate-200 hover:from-gray-200 hover:to-slate-200 text-lg" onClick={handleButtonClick}>
              <div>
                <div>
                  <BsFillTelephoneFill className="contact-icon" />
                </div>
                <p id="contact-phone" className="text-black">+91 9773166630</p>
              </div>
            </div>
            <div className="details-card bg-gradient-to-t from-orange-300 rounded-full to-slate-200 hover:from-gray-200 hover:to-slate-200 text-lg" onClick={github_llink}>
              <div>
                <div>
                  <FaGithub className="contact-icon" />
                </div>
                <p className="text-black">Hari3199</p>
              </div>
            </div>
            <div
              className="details-card  bg-gradient-to-t from-orange-300 rounded-full to-slate-200 hover:from-gray-200 hover:to-slate-200 text-lg "
              onClick={emaillink}
              id="contact-email"
            >
              <div>
                <div>
                  <HiMail className="contact-icon" />
                </div>
                <p className="text-black">nainaharesh31@gmail.com</p>
              </div>
            </div>
            <div
              className="details-card  bg-gradient-to-t from-orange-300 rounded-full to-slate-200 hover:from-gray-200 hover:to-slate-200 text-lg "
              onClick={Linkd_llink}
              id="contact-email"
            >
              <div>
                <div>
                  <IoLogoLinkedin className="contact-icon" />
                </div>
                <p className="text-black">linkedin.com/in/nhj31/</p>
              </div>
            </div>
          </div>
        </div>

        {/* contact form */}

        <div className="contact-form-div mb-5 mt-5">
          <div className="contact-card bg-gradient-to-t from-white to-orange-200 hover:from-gray-200 hover:to-slate-200">
            <span className="contact-title text-black hover:text-black">Feel Free To Contact</span>
            <form
              className="contact-form"
              action="https://formsubmit.co/nainaharesh31@gmail.com"
              method="POST"
            >
              <div className="contact-group text-black">
                <input placeholder="‎" type="text" required="" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="contact-group text-black">
                <input
                  placeholder="‎"
                  type="email"
                  id="email"
                  name="email"
                  required=""
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="contact-group text-black">
                <input
                  placeholder="‎"
                  type="text"
                  id="subject"
                  name="_subject"
                  required=""
                />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="contact-group text-black">
                <textarea
                  placeholder="‎"
                  id="comment"
                  name="message"
                  rows="5"
                  required=""
                ></textarea>
                <label htmlFor="comment">Message</label>
                <input type="hidden" name="_template" value="box"></input>
              </div>
              <button type="submit" className="bg-blue-950">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
