import { useRef } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Statistics from "./Components/Statistics";
import Contact from "./Components/Contact";


function App(){
   
  const divRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = divRef.current.scrollTop;
    console.log(scrollTop); // Scroll Y value of the div
  };


  return (
    <>
     <Navbar/>
     <Home/>
     <About ref={divRef} func={handleScroll} />
     <Skills/>
     <Projects/>
     <Statistics/>
     <Contact/>
    </>
  );
}

export default App;
