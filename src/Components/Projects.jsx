import React from "react";

import school from '../assets/projects_imgs/school.png'
import boat from '../assets/projects_imgs/boat.png'
import portfolio from '../assets/projects_imgs/portfolio.png'
import figma from '../assets/projects_imgs/figma.png'

import "../Styles/Projects.css";


const data = [
    {
        img: school,
        projectTitle: "GIIS-Clone",
        techStack: ["Html", "CSS", "Javascript", "json-server"],
        description:"This project aims to design and develop a comprehensive website for a school that facilitates seamless communication, enhances engagement, and provides easy access to educational resources for students, parents, teachers, and administrators.",
        githubLink: "https://github.com/Hari3199/coding-guru-1234",
        appLink: "https://coding-guru-1234.netlify.app/",
    },
    {
        img: boat,
        projectTitle: "boAt-clone",
        techStack: ["HTML5","CSS","BootStrap"],
        description: "This project aims to create a dynamic e-commerce platform,offering premium audio products. With seamless navigation, enhanced engagement features, and effortless access to a wide range of audio electronics.",
        githubLink: "https://github.com/Hari3199/innovative-byte-6543",
        appLink: "https://innovative-byte-project-bootstrap.netlify.app/",
    },
    {
        img:figma,
        projectTitle: "figma-About",
        techStack: ["HTML", "CSS", "Sass"],
        description: "This project offers a collection of professional and customizable web components and the pixle perfectnesst of the given figma-design using Html css and Sass.",
        githubLink: "https://github.com/Hari3199/innovative-byte-6543",
        appLink: "https://innovative-bytes-figma.netlify.app/"
    },
    {
        img:portfolio,
        projectTitle: "My Portfolio",
        techStack: ["React", "CSS", "JavaScript"],
        description: "I am proud to present my personal portfolio website, built using React, a powerful JavaScript library for building user interfaces. This project reflects my skills, experiences, and the projects I've undertaken.",
        githubLink: "https://github.com/Hari3199/Hari3199.github.io",
        appLink: "https://Hari3199.github.io/"
    }
]
const Projects = () => {
  return (
    <div id="projects">
      <h1 className='heading text-center text-vi font-bold  text-3xl mt-28 shadow-md shadow-orange-200 mx-auto'>My <span className="text-orange-200 mt-52">Projects</span></h1>
      <div className="mt-20">
      {data.map((e, index) => {
        return index % 2 == 0 ? (
          <div key={index} className="project-card proCard1" >
            <div className="projectImg">
              <img src={e.img} alt="" className="shadow-blue-400 shadow-lg"/>
            </div>
            <div className="projectDetail">
              <h2 className="project-title text-white">
                {index + 1 + ". " + e.projectTitle}
              </h2>
              <div className="project-tech-stack">
                {e.techStack.map((ele, ind) => {
                  return <span key={ind} className="shadow-orange-500 shadow-md 
                  bg-gradient-to-t from-black rounded-full to-gray-500 hover:from-orange-500 hover:to-red-300 text-lg font-sans font-semibold text-orange-200  hover:text-white cursor-pointer">{ele}</span>;
                })}
              </div>
              <p className="project-description text-orange-200  hover:text-white">{e.description}</p>
              <div
                className={
                  e.backendLink ? "projectButtons2" : "projectButtons1"
                }
              >
                <a
                  href={e.githubLink}
                  target="_blank"
                  className="project-github-link  shadow-gray-500 shadow-md 
                bg-gradient-to-t from-black rounded-full to-gray-500 hover:from-orange-500 hover:to-red-300 text-lg font-sans font-semibold text-orange-200  hover:text-white cursor-pointer mt-5"
                >
                  {e.backendLink ? "Frontend Code" : "View Code"}
                </a>
                {e.backendLink ? (
                  <a
                    href={e.backendLink}
                    target="_blank"
                    className="project-github-link"
                  >
                    Backend Code
                  </a>
                ) : (
                  <></>
                )}
                <a
                  href={e.appLink}
                  target="_blank"
                  className="project-deployed-link  shadow-slate-200 shadow-md 
                  bg-gradient-to-t from-orange-500 rounded-full to-orange-300 hover:from-orange-500 hover:to-red-300 text-lg font-sans font-semibold text-black hover:text-white cursor-pointer mt-5"
                >
                  View Live App
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="project-card proCard2" key={index}>
            <div className="projectDetails">
              <h2 className="project-title">
                {index + 1 + ". " + e.projectTitle}
              </h2>
              <div className="project-tech-stack">
                {e.techStack.map((ele, ind) => {
                  return <span key={ind} className="shadow-orange-500 shadow-md 
                  bg-gradient-to-t from-black rounded-full to-gray-500 hover:from-orange-500 hover:to-red-300 text-lg font-sans font-semibold text-orange-200  hover:text-white cursor-pointer">{ele}</span>;
                })}
              </div>
              <p className="project-description text-orange-200  hover:text-white">{e.description}</p>
              <div
                className={
                  e.backendLink ? "projectButtons2" : "projectButtons1"
                }
              >
                <a
                  href={e.githubLink}
                  target="_blank"
                  className="project-github-link shadow-gray-500 shadow-md 
                  bg-gradient-to-t from-black rounded-full to-gray-500 hover:from-orange-500 hover:to-red-300 text-lg font-sans font-semibold text-orange-200  hover:text-white cursor-pointer mt-5"
                >
                  {e.backendLink ? "Frontend Code" : "View Code"}
                </a>
                {e.backendLink ? (
                  <a
                    href={e.backendLink}
                    target="_blank"
                    className="project-github-link"
                  >
                    Backend Code
                  </a>
                ) : (
                  <></>
                )}
                <a
                  href={e.appLink}
                  target="_blank"
                  className="project-deployed-link shadow-slate-200 shadow-md 
                  bg-gradient-to-t from-orange-500 rounded-full to-orange-300 hover:from-orange-500 hover:to-red-300 text-lg font-sans font-semibold text-black hover:text-white cursor-pointer mt-5"
                >
                  View Live App
                </a>
              </div>
            </div>
            <div className="projectImg">
              <img src={e.img} alt="" className="shadow-slate-400 shadow-lg"/>
            </div>
          </div>
        );
      })}
      </div>
     
    </div>
  );
};

export default Projects;
