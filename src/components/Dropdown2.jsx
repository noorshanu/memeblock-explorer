import React, { useState } from 'react';

const DropdownButton2 = ({Title,item1,item2,item3,link1,link2,link3,Trans,item4,item5,item6,link4,link5,link6}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full  -300   text-sm font-medium text-black"
          id="dropdown-menu-button"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          {Title}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12l-6-6h12l-6 6z"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className=" z-50 origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-menu-button"
        >
          {/* Dropdown items */}
          <div className="py-1" role="none">
            <a
              href={link1}
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
            >
              {item1}
            </a>
            <a
              href={link2}
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
            >
              {item2}
            </a>
            <a
              href={link3}
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
            >
              {item3}
            </a>

            <a href="#href" className='text-gray-700 block px-4 py-2 text-lg'>
{Trans}
            </a>

            <a  href={link4} className="text-gray-700 block px-4 py-2 text-sm">
              {item4}
            </a>
            <a  href={link5} className="text-gray-700 block px-4 py-2 text-sm">
              {item5}
            </a>
            <a  href={link6} className="text-gray-700 block px-4 py-2 text-sm">
              {item6}
            </a>

            
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton2;