import React, { useState,useEffect,useRef } from 'react';

const DropdownButton = ({Title,item1,item2,item3}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // This function handles click events outside the dropdown
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add the event listener to the document when the component mounts
    document.addEventListener('click', handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full  -300 shadow-sm  text-sm font-medium text-white"
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
          className=" z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-menu-button"
        >
          {/* Dropdown items */}
          <div className="py-1" role="none">
            <a
              href="/"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
            >
              {item1}
            </a>
            <a
              href="/"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
            >
              {item2}
            </a>
            <a
              href="/"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
            >
              {item3}
            </a>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default DropdownButton;