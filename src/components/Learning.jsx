import React from 'react';

export default function Learning() {
  return (
    <section id="learnings" className="py-16  text-gray-800">
      <h1 className="text-5xl font-serif text-center text-blue-900 mb-12">FAMILIAR WITH</h1>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div className="group relative flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-30 rounded-xl transition-opacity duration-300"></div>
          <h2 className="relative text-xl font-medium text-gray-900 group-hover:text-white z-10">MongoDB</h2>
        </div>

        <div className="group relative flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-30 rounded-xl transition-opacity duration-300"></div>
          <h2 className="relative text-xl font-medium text-gray-900 group-hover:text-white z-10">NextJS</h2>
        </div>

        <div className="group relative flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-30 rounded-xl transition-opacity duration-300"></div>
          <h2 className="relative text-xl font-medium text-gray-900 group-hover:text-white z-10">Linux</h2>
        </div>

        <div className="group relative flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-30 rounded-xl transition-opacity duration-300"></div>
          <h2 className="relative text-xl font-medium text-gray-900 group-hover:text-white z-10">NodeJS</h2>
        </div>

        <div className="group relative flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-30 rounded-xl transition-opacity duration-300"></div>
          <h2 className="relative text-xl font-medium text-gray-900 group-hover:text-white z-10">Express</h2>
        </div>

        <div className="group relative flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-30 rounded-xl transition-opacity duration-300"></div>
          <h2 className="relative text-xl font-medium text-gray-900 group-hover:text-white z-10">MySQL</h2>
        </div>
      </div>
    </section>
  );
}
