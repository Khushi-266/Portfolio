
import React from 'react'

function Projects() {
  return (
    <>
    <h1 id='projects' className=' flex justify-center items-center text-5xl font-serif'>PROJECTS</h1>
      <section  class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Project 1</span>
          
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Readify - BookStore</h2>
          <p class="leading-relaxed">A simple web app where users explore diverse books, view details, add favorites, and manage basic shopping cart orders.</p>
          
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Project 2</span>
          
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">PassManager - Your own password manager</h2>
          <p class="leading-relaxed">A straightforward tool to store, retrieve, and organize user passwords in a secure and private interface.

</p>
          
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Project 3</span>
          
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Todo List App</h2>
          <p class="leading-relaxed">An uncomplicated task manager letting users create, mark complete, and delete to‑dos with clean and intuitive UI.</p>
         
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Projects
