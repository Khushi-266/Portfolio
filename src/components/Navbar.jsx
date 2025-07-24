import React from 'react'
 import logo from '/public/logo.png';
function Navbar() {
  return (
    <>
      <header class=" text-blue-900 fixed top-0 w-full bg-gray-50 z-50   ">
  <div class="container mx-auto flex flex-wrap p-2 md:p-3 flex-col md:flex-row items-center ">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="logo.png" className='w-12 h-12 ' alt="" />
      
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href='#home' class="mr-5 px-2 py-1 text-xl rounded-md hover:hover:bg-blue-900 hover:text-white cursor-pointer">Home</a>
      <a href='#skills' class="mr-5 px-2 py-1 text-xl rounded-md hover:bg-blue-900 hover:text-white cursor-pointer">Skills</a>
      <a href='#learnings' class="mr-5 px-2 py-1 text-xl rounded-md hover:bg-blue-900 hover:text-white cursor-pointer">Learnings</a>
      <a href='#projects' class="mr-5 px-2 py-1 text-xl rounded-md hover:bg-blue-900 hover:text-white cursor-pointer">Projects</a>
    </nav>
    
  </div>
</header>
    </>
  )
}

export default Navbar
