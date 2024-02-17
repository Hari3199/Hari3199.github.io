import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import '../Styles/Home.css';
import devGif from '../assets/devloperLogo.svg'

const Home = () => {
  const [text] = useTypewriter({
    words: ["A Full Stack Developer", "A MERN Stack Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div id="home">
      <h2 className="gradiant-text1 font-bold text-4xl text-orange-200 text-center mt-20" id="user-detail-name">
        Hello, I'am Haresh Naina,
      </h2>

      <h2 className="typewriter font-bold text-2xl text-center mt-3 ml-6">
        {" "}
        {text}{" "}
        <span>
          <Cursor cursorStyle="|" />
        </span>
      </h2>

      <img className="home_gif mx-auto" src={devGif} alt="" />
    </div>
  );
};

export default Home;
