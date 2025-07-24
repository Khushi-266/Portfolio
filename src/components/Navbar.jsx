import React, { useState } from 'react';
import logo from '/public/logo.png';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gray-50 shadow z-50">
      <div className="container mx-auto flex items-center justify-between p-3">
        <a href="/">
          <img src={logo} alt="Logo" className="w-12 h-12" />
        </a>

        {/* Mobile menu button */}
        {!open && (
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {/* Hamburger icon */}
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-blue-900"></span>
              <span className="block w-6 h-0.5 bg-blue-900"></span>
              <span className="block w-6 h-0.5 bg-blue-900"></span>
            </div>
          </button>
        )}

        {/* Navigation links */}
        <nav
          className={`${
            open ? 'block' : 'hidden'
          } md:flex space-y-2 md:space-y-0 md:space-x-4`}
        >
          <a
            href="#home"
            className="px-3 py-1 text-blue-900 hover:bg-blue-900 hover:text-white rounded"
          >
            Home
          </a>
          <a
            href="#skills"
            className="px-3 py-1 text-blue-900 hover:bg-blue-900 hover:text-white rounded"
          >
            Skills
          </a>
          <a
            href="#learnings"
            className="px-3 py-1 text-blue-900 hover:bg-blue-900 hover:text-white rounded"
          >
            Learnings
          </a>
          <a
            href="#projects"
            className="px-3 py-1 text-blue-900 hover:bg-blue-900 hover:text-white rounded"
          >
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
