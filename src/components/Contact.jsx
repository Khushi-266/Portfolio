import React, { Component } from 'react';

class Contact extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;

    if (name.value && email.value && message.value) {
      console.log('Form submitted:', {
        name: name.value,
        email: email.value,
        message: message.value,
      });

      e.target.reset(); // Reset form fields
    } else {
      console.log('Please fill in all fields.');
    }
  };

  render() {
    return (
<><h1 className="text-5xl font-serif text-center text-blue-900 mb-12">Contact Us</h1>
       
      <div className="  md:w-full flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
         
        <div className="max-w-lg w-full bg-gray-50  p-8 rounded-lg shadow-lg">
          
          <form onSubmit={this.handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </>
    );
  }
}

export default Contact;
