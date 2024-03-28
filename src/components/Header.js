import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Header() {
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className={`py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <h1 className="font-bold text-3xl uppercase text-center">
        Fanta Blogs
      </h1>
      <div className="flex justify-center items-center">
        <button onClick={toggleTheme}>
          {theme === 'light' ? 
            <MdDarkMode size={24} /> : 
            <MdOutlineLightMode size={24} />
          }
        </button>
      </div>
    </header>
  );
}
