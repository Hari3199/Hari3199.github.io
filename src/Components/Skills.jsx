import React from 'react'
import '../Styles/Skills.css'
import html from '../assets/skill_imgs/html.png';
import css from '../assets/skill_imgs/css.png';
import js from '../assets/skill_imgs/js.png';
import react from '../assets/skill_imgs/react.png';
import redux from '../assets/skill_imgs/redux.png';
import node from '../assets/skill_imgs/node.png';
import express from '../assets/skill_imgs/express.png';
import sql from '../assets/skill_imgs/sql.png';
import mongodb from '../assets/skill_imgs/mongodb2.png';
import chakra from '../assets/skill_imgs/chakra.png';
import github from '../assets/skill_imgs/github.png';
import vscode from '../assets/skill_imgs/vscode.png';
import netlify from '../assets/skill_imgs/netlify.svg';
import vercel from '../assets/skill_imgs/vercel.svg';

const Skills = () => {

    const techSkills = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:js,
            title:'Javascript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'Reactjs',
            style:'shadow-blue-500'
        },
        {
            id:5,
            src:redux,
            title:'Redux',
            style:'shadow-violet-500'
        },
        {
            id:6,
            src:node,
            title:'Nodejs',
            style:'shadow-green-500'
        },
        {
            id:7,
            src:express,
            title:'Expressjs',
            style:'shadow-gray-500'
        },
        {
            id:8,
            src:mongodb,
            title:'mongoDB',
            style:'shadow-green-500'
        },
        {
            id:9,
            src:sql,
            title:'SQL',
            style:'shadow-blue-500'
        },
        {
            id:10,
            src:chakra,
            title:'Chakra-UI',
            style:'shadow-teal-200'
        },
        {
            id:11,
            src:github,
            title:'Github',
            style:'shadow-slate-200'
        },
        {
            id:12,
            src:vscode,
            title:'VS-Code',
            style:'shadow-sky-500'
        }, 
        {
            id:13,
            src:netlify,
            title:'Netlify',
            style:'shadow-teal-400'
        },
        {
            id:14,
            src:vercel,
            title:'Vercel',
            style:'shadow-white',
            special:'bg-gray-500 text-black text-lg'
        },
        // {
        //     id:14,
        //     src:sql,
        //     title:'DSA',
        //     style:'shadow-white',
        //     special:'bg-gray-500 text-black text-lg'
        // },

    ]
  return (
    <div className='mx-auto' id='skills'>
      <h1 className='text-center text-vi font-bold text-3xl mt-44 shadow-md shadow-orange-200'>Technical <span className="text-orange-200 mt-28">Skills</span></h1>

      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 mt-11 skill'>
          
          {techSkills.map(({id,src,title,style,special})=>(
             <div key={id}className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg skills-card ${style} ${special}` }>

                <img src={src} alt="" className='w-20 mx-auto skills-card-img'/>
                <p className='mt-2 skills-card-name'>{title}</p>
            </div>
          ))}
          
      </div>
    </div>
  )
}

export default Skills
