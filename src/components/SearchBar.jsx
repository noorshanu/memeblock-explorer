import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import DropdownButton from "./Dropdown";

function SearchBar() {
  
  return (
    <div className="bg-grad py-2">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto">
        <div>
          <div className="flex gap-4 items-center">
            <BsSearch className="text-white" />
            <input
              type="text"
              className="w-full sm:w-[500px] max-w-full bg-transparent border-transparent outline-none text-white"
              placeholder="Search by Address / TX (Version) ID"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <p className="text-white ">Powered by MEMEBLOCK</p> <span className="text-white">|</span>
          <div className=" ">
            <DropdownButton Title='TestNet'
            item1='Main Net'
            item2='Test Net'
            item3='DevNet'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
