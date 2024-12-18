
'use client';

  import React from 'react'
  
  export default function Aboutme() {
    return (
      
           
<div className="m-5 mx-auto w-3/4 h-3/4 flex flex-col items-center bg-rose- p-8 rounded-lg shadow-lg">
<h1 className="text-center text-3xl font-bold mb-6 text-white">Contact us</h1>

<section className="about w-5/6 bg-blue-800 p-6 rounded-lg shadow-md mb-6 text-center transition-transform duration-300 transform hover:scale-105">
  <h2 className="text-2xl font-sans mb-4 border-b-2 border-white bp-2 text-white">About Me</h2>
  <p className="text-white w-3/4 ml-5">
    Hello! I'm a web developer with experience in JavaScript, TypeScript, and Next.js.
    I enjoy building dynamic and interactive applications.
  </p>
</section>

<section className="w-5/6 bg-blue-800 p-6 rounded-lg shadow-md mb-6 transition-transform duration-300 transform hover:scale-105">
  <h2 className="text-2xl font-semibold text-center mb-4 text-white">Skills</h2>
  <ul className="flex gap-9 px-32 skills-list list-disc-none list-inside text-white">
    <li>JavaScript</li>
    <li>TypeScript</li>
    <li>Next.js</li>
    <li>HTML & CSS</li>
  </ul>
</section>

<section className="w-5/6  bg-blue-800 p-6 rounded-lg shadow-md mb-6">
  <h2 className="text-2xl font-semibold text-center mb-4 text-white ">Projects</h2>
  <div className="project-card bg-blue-900 p-4 rounded-lg shadow-sm mb-4 transition-transform duration-300 transform hover:scale-105">
    <h3 className="font-semibold text-lg text-white">Currency Converter</h3>
    <p className="text-white">
      A web application that converts currency values based on real-time exchange rates.
    </p>
  </div>
  <div className=" bg-blue-900 p-4 rounded-lg shadow-sm mb-4 transition-transform duration-300 transform hover:scale-105">
    <h3 className="font-semibold text-lg text-white ">Number gasing game</h3>
    <p className="text-white transition-transform">
      A web application that converts currency values based on real-time exchange rates.
    </p>
  </div>
</section>

<section className="w-5/6  bg-blue-800 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
  <h2 className="text-2xl font-semibold text-center mb-4 text-white">Get in Touch</h2>
  <p className="text-white text-center">
    If you'd like to connect or have any queries, feel free to reach out!
  </p>
</section>
      </div>
    )
  }
  
