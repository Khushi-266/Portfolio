import React from 'react'
import coding from '/public/coding.jpg';
function Hero() {
  return (
    <>
      <div id='home' className="relative h-screen w-full  ">
  <div className="absolute inset-0 bg-cover bg-center " style={{ backgroundImage: `url(coding.jpg)` }} />
  <div className="absolute inset-0 bg-black/50" />
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
      Hi There, I'm Khushi 
    </h1>
    <p className="text-gray-200 text-lg sm:text-xl md:text-2xl mb-6">
     A Frontend Developer <br /> Building Digital Journeys, One Byte at a Time
    </p>
   
  </div>
</div>

    </>
  )
}

export default Hero
