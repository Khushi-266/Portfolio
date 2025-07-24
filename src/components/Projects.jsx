import React from 'react';

function Projects() {
  return (
    <>
      <h1 id="projects" className=" text-5xl font-serif text-center text-blue-900 mb-12">
        PROJECTS
      </h1>
      <section className="text-gray-600 body-font overflow-hidden relative pl-8 before:content-[''] before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gray-800">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">Project 1</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Readify - BookStore</h2>
                <p className="leading-relaxed">
                  A simple web app where users explore diverse books, view details, add favorites, and manage basic shopping cart orders.
                </p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">Project 2</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">PassManager - Your own password manager</h2>
                <p className="leading-relaxed">
                  A straightforward tool to store, retrieve, and organize user passwords in a secure and private interface.
                </p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">Project 3</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Todo List App</h2>
                <p className="leading-relaxed">
                  An uncomplicated task manager letting users create, mark complete, and delete to-dos with clean and intuitive UI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
