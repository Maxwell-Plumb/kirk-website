import React from 'react';

const NavBar = () => {
  return (
    <header className="bg-black sticky top-0 left-0 right-0 flex justify-between items-center p-4 z-10">
      <div className="text-white text-xl font-bold"><a href='/'>Kirk Seubert</a></div>
      <nav>
        <ul className="flex space-x-4">
            <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;