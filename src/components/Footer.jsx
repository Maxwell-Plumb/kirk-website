import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="alt-brand-color">Home</a>
            </li>
            <li>
              <a href="/#about" className="alt-brand-color">About</a>
            </li>
            <li>
              <a href="/#services" className="alt-brand-color">Services</a>
            </li>
            <li>
              <a href="/contact" className="alt-brand-color">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <p className="alt-brand-color">Kirk Seubert</p>
          <p className="alt-brand-color">43-20 203rd St, Queens, NY 11361</p>
          <p className="alt-brand-color">Email: kirk@maxwellplumb.com</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Me</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="https://x.com/maxwellplumb" target="_blank" rel="noopener noreferrer" className="alt-brand-color">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3c-.943.558-1.982.959-3.093 1.174A4.92 4.92 0 0 0 16.616 2a4.92 4.92 0 0 0-4.832 6.042 13.978 13.978 0 0 1-10.153-5.15 4.822 4.822 0 0 0-.663 2.475c0 1.708.869 3.215 2.189 4.096a4.903 4.903 0 0 1-2.228-.616c-.053 2.101 1.496 4.09 3.673 4.524a4.936 4.936 0 0 1-2.224.085 4.927 4.927 0 0 0 4.599 3.417A9.865 9.865 0 0 1 0 20.771 13.94 13.94 0 0 0 7.548 23c9.142 0 14.307-7.721 14.307-14.422 0-.219-.005-.438-.015-.655A10.258 10.258 0 0 0 24 4.557z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/maxwellplumb/" target="_blank" rel="noopener noreferrer" className="alt-brand-color">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.66c-1.14 0-2.06-.93-2.06-2.06s.92-2.06 2.06-2.06c1.13 0 2.06.93 2.06 2.06 0 1.14-.93 2.06-2.06 2.06zm15.12 12.79h-3.56V14.8c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v6.75h-3.56V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/maxwellplumbmechanical/" target="_blank" rel="noopener noreferrer" className="alt-brand-color">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/maxwell_plumb_mechanical/" target="_blank" rel="noopener noreferrer" className="alt-brand-color">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2024 Kirk Seubert. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;