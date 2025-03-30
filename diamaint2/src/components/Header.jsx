import React, { useState } from 'react';
import logo from '../assets/header-img/logo.svg';
import card from '../assets/header-img/card.svg';
import { Link } from 'react-scroll';

const Navbar = () => {
  const keys = [
    { id: 0, name: 'О продукте' },
    { id: 1, name: 'Каталог' },
    { id: 2, name: 'Акции' },
    { id: 3, name: 'Полезное' },
    { id: 4, name: 'Авторы' }
  ];
  
  const [id, setId] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navSel = (key) => {
    setId(key);
  };

  return (
    <header className="bg-[#EDECF6] flex justify-center pt-3 pb-5 z-50 w-full sm:fixed top-0 relative">
      <nav className="flex justify-between r px-4 z-10 w-full h-full">
        {/* Left section: Logo and Menu */}
        <div className="flex items-center gap-4 sm:gap-[58px]">
          <img src={logo} alt="logo" className="h-15.5" />
          <ul className="hidden sm:flex items-center gap-4">
            {keys.map((key) => (
            <Link key={key.id} to={`obj-${key.id}`} smooth={true} duration={500}>
                <li
                key={key.id}
                data-id={key.id}
                onClick={() => navSel(key.id)}
                className={`cursor-pointer z-10 text-[16px] hover:opacity-[0.8] ${id === key.id ? 'bg-[#515076] text-[#EDECF6]' : 'text-[#515076]'} pt-4.5 pb-4.5 pl-4 pr-4 rounded-[3px] transition-colors duration-900 ease-in-out whitespace-nowrap`}
              >
                {key.name}
              </li>
            </Link>
            ))}
          </ul>
          {/* Mobile Menu Toggle */}
          <div className="sm:hidden relative z-10">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#515076]">
              &#9776; {/* Hamburger Icon */}
            </button>
          </div>
        </div>

        {/* Right section: Card and Social Links */}
        <div className="flex items-center gap-4 sm:gap-[25px] sm:w-full justify-end z-10 w-[150px]">
          <div className={`bg-white flex justify-center z-10 rounded-[50%] p-3 relative transition-all duration-300 ${isMenuOpen ? 'h-8 w-8' : 'h-10 w-10'}`}>
            <Link to="/">
              <img src={card} alt="card" className="h-full w-full object-cover" />
            </Link>
            <div className="font-[Montserrat] absolute top-[-1px] right-[-10px] bg-[#757AA5] px-2 py-0.5 text-white rounded-[50%] text-[12px]">1</div>
          </div>
          <div className="flex flex-col gap-[5px]">
            <a target='_blank' rel='noopener noreferrer' href="https://instagram.com" className="text-[#515076] z-10 font-[Montserrat] text-[16px] cursor-pointer">Instagram</a>
            <a target='_blank' rel='noopener noreferrer' href="https://facebook.com" className="text-[#515076] z-10 font-[Montserrat] text-[16px] cursor-pointer">Facebook</a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="sm:hidden flex flex-col items-center gap-2 py-4 bg-[#EDECF6] w-full">
          {keys.map((key) => (
            <li
              key={key.id}
              onClick={() => {
                navSel(key.id);
                setIsMenuOpen(false); // Close menu on item click
              }}
              className={`cursor-pointer ${id === key.id ? 'bg-[#515076] text-[#EDECF6]' : 'text-[#515076]'}  py-2 px-4 w-full text-center rounded-[3px] transition-colors duration-900 ease-in-out`}
            >
              {key.name}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;