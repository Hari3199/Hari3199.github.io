import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closemenu = () => {
    setNav(!nav);
  };

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1kVk7vc7d015UVy1BWcu8ISplLrMrOkmf/view?usp=drive_link"
    );
    const link = document.createElement("a");

    link.href = Haresh_Naina_Resume;
    link.setAttribute("download", "Haresh-Naina-Resume");
    link.setAttribute("id", "resume-link");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      id="nav-menu"
      className={`px-4 ${isScrolled ? "fixed top-0 w-full z-10 " : ""}`}
    >
      <div className="navbar">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="logo font-bold text-orange-200 font-sans">
              Haresh!
            </h1>
          </div>
          <div className="flex">
            <ul className="links hidden md:flex">
              <li>
                <a
                  href="#"
                  className="text-orange-200 hover:text-white cursor-pointer nav-link-home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-orange-200 hover:text-white cursor-pointer nav-link about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-orange-200 hover:text-white cursor-pointer nav-link skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-orange-200 hover:text-white cursor-pointer nav-link projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#statistics"
                  className="text-orange-200 hover:text-white cursor-pointer"
                >
                  Statistics
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-orange-200  hover:text-white cursor-pointer nav-link Contact"
                >
                  Contact
                </a>
              </li>
              <li className="ml-5" id="resume-button-1">
                <button
                  onClick={handleDownload}
                  className="shadow-gray-500 shadow-md py-2 px-5 bg-gradient-to-t from-black rounded-full to-gray-500 hover:from-orange-500 hover:to-red-300 text-lg font-sans font-semibold text-orange-200  hover:text-white cursor-pointer"
                >
                  Resume
                </button>
              </li>
            </ul>
            <div
              onClick={() => setNav(!nav)}
              className="small_h cursor-pointer z-10 text-orange-200  hover:text-white md:hidden"
            >
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
              <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg bg-gradient-to-b from-black to-gray-800 gap-4">
                <li>
                  <a
                    href="#"
                    className="text-orange-200  hover:text-white cursor-pointer text-3xl "
                    onClick={closemenu}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-orange-200  hover:text-white cursor-pointer text-3xl "
                    onClick={closemenu}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-orange-200  hover:text-white cursor-pointer text-3xl "
                    onClick={closemenu}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-orange-200  hover:text-white cursor-pointer text-3xl "
                    onClick={closemenu}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#statistics"
                    className="text-orange-200  hover:text-white cursor-pointer text-3xl "
                    onClick={closemenu}
                  >
                    Statisticts
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-orange-200  hover:text-white cursor-pointer text-3xl "
                    onClick={closemenu}
                  >
                    Contact
                  </a>
                </li>
                <li className="ml-5" id="resume-button-1">
                  <button
                    onClick={handleDownload}
                    className="shadow-gray-500 shadow-md py-2 px-11 bg-gradient-to-t from-black rounded-full to-gray-500 hover:from-orange-500 hover:to-red-300 text-2xl font-sans font-semibold text-orange-200  hover:text-white cursor-pointer mt-4"
                  >
                    Resume
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
