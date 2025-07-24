import React from 'react';
import web from '/public/web.png';
import library from '/public/library.png';
import programming from '/public/programming.png';

export default function Skills() {
  return (
    <section id="skills" className="py-16  text-gray-800">
      <h2 className=" text-5xl font-semibold text-center mb-12 text-blue-900">SKILLS</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Skill 1 */}
        <div className="group bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
          <div className="w-24 h-24 flex items-center justify-center mb-4">
            <img src={web} alt="HTML, CSS, JS" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-xl font-medium text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">HTML, CSS, JS</h3>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            Build interactive web pages with structured HTML, styled layout, and dynamic JavaScript behavior.
          </p>
        </div>

        {/* Skill 2 */}
        <div className="group bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
          <div className="w-24 h-24 flex items-center justify-center mb-4">
            <img src={library} alt="REACT JS" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-xl font-medium text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">REACT JS</h3>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            Skilled at component-driven UIs, managing state, props, hooks, and routing using React.
          </p>
        </div>

        {/* Skill 3 */}
        <div className="group bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
          <div className="w-24 h-24 flex items-center justify-center mb-4">
            <img src={programming} alt="C, C++, JAVA" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-xl font-medium text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">C, C++, JAVA</h3>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            Introductory grasp of procedural & object‑oriented programming in C, C++, and Java.
          </p>
        </div>
      </div>
    </section>
  );
}
