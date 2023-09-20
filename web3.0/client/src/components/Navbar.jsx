import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';
import { useState } from 'react';

const NavbarItem = ({ url, title, classProps }) => {
  return (
    <li className={`mx-4 ${classProps}`}>
      <a href={url}>{title}</a>
    </li>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 bg-black">
      <div className="md:flex-[0.5] flex-initial justify-center items-start">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[
          { title: 'Market', url: '#' },
          { title: 'Exchange', url: '#' },
          { title: 'Tutorials', url: '#' },
          { title: 'Wallets', url: '#' },
        ].map((item, key) => (
          <NavbarItem
            key={item.title + key}
            title={item.title}
            url={item.url}
          />
        ))}
        <li>
          <a
            href="#"
            className="py-2 px-7 mx-4 rounded-full border border-[#F48245] hover:bg-[#F48245]"
          >
            Login
          </a>
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="cursor-pointer md:hidden"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="cursor-pointer md:hidden"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -right-2 top-0 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism animate-slide-in
          "
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose
                fontSize={28}
                onClick={() => setToggleMenu(false)}
              />
            </li>
            {[
              { title: 'Market', url: '#' },
              { title: 'Exchange', url: '#' },
              { title: 'Tutorials', url: '#' },
              { title: 'Wallets', url: '#' },
            ].map((item, key) => (
              <NavbarItem
                key={item.title + key}
                title={item.title}
                url={item.url}
                classProps="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
