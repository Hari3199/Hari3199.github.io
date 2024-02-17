import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import photo from "../assets/Haresh-black.png";
import { IoLogoLinkedin } from "react-icons/io5";
import "../Styles/About.css";

const About = ({ ref, func }) => {
  const [text] = useTypewriter({
    words: ["A FullStack Developer", "A MERN Stack Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1kVk7vc7d015UVy1BWcu8ISplLrMrOkmf/view?usp=drive_link"
    );
    const link = document.createElement("a");

    link.href = Saurav_Chavan_Resume;
    link.setAttribute("download", "HareshNaina-Resume");
    link.setAttribute("id", "resume-link");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <main
      className="about section main mt-28 px-4 "
      ref={ref}
      onScroll={func}
      id="about"
    >
      <div className="heading-div" >
        <div className="heading-textbtn">
          <h1 className="text-center font-bold text-3xl shadow-md shadow-red-200 mx-20">
            About <span className="text-orange-200">Me</span>
          </h1>
        </div>
      </div>
      <div className="container1 ml-36  gap-11 flex flex-col m-auto  md:flex-row mt-11">
        <div className="text">
          <p className="mt-4 text-orange-200 hover:text-white font-sans text-lg"  id="user-detail-intro">
            Experienced and enthusiastic Full-stack/MERN-stack developer with
            over 1200 hours of coding experience and a strong background in data
            structures and algorithms (400+ DSA Problems). Skilled in front-end
            and back-end development, utilizing technologies such as ReactJS,
            Node.js, JavaScript, ExpressJS, and MongoDB. Developed clones of
            popular websites and successfully collaborated on projects with
            teams. Highly disciplined, motivated, and a problem solver Ready to
            contribute to innovative and impactful web development initiatives.
          </p>
          <button
            className="resume-button-2 px-5 shadow-gray-500 shadow-md py-2 mt-5 bg-gradient-to-t from-black rounded-full to-gray-500 hover:from-orange-500 hover:to-red-300 text-lg font-sans font-semibold text-orange-200  hover:text-white cursor-pointer"
            onClick={handleDownload}
          >
            Download Resume
          </button>
        </div>
        <div className="relative">
          <img
            className="photo home-img rounded-2xl w-auto
                md:w-auto"
            src={photo}
            alt="Haresh"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
