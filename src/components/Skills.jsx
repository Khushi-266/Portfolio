import React from 'react'
import web from '/public/web.png';
import library from '/public/library.png';
import programming from '/public/programming.png';

function Skills() {
  return (
    <>
    <h1 className='flex justify-center items-center text-5xl font-serif '>SKILLS</h1>
      <section id='skills' class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <img src="web.png" alt="" />
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">HTML, CSS, JS</h2>
        <p class="leading-relaxed text-base">Ability to build interactive web pages using structured HTML, styled layout with CSS, and dynamic behavior using JavaScript.</p>
        
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">REACT JS</h2>
        <p class="leading-relaxed text-base">Skilled at creating component-based, interactive user interfaces using JSX, state, props, hooks, and routing.</p>
       
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <img src="library.png" alt="" />
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
       <img src="programming.png" alt="" />
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">C, C++, JAVA</h2>
        <p class="leading-relaxed text-base">Introductory grasp of procedural and object‑oriented programming; able to write simple programs using C, C++, and Java.</p>
        
      </div>
    </div>
    
  </div>
</section>
    </>
  )
}

export default Skills
