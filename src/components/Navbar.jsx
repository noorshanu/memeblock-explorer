import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { AiOutlineTwitter,AiOutlineSwap } from "react-icons/ai";
import DropdownButton2 from "./Dropdown2";
import {GiBreakingChain,GiSettingsKnobs} from 'react-icons/gi'
import {LiaCoinsSolid} from 'react-icons/lia'
import {FaTelegramPlane} from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function Navbar() {
  let blur = false;
  return (
    // bg-[#14141f]
    <Popover
      className={`z-10  top-[30px] left-0 right-0 mx-auto ${
        blur
          ? "bg-white bg-opacity-[0.0001] backdrop-filter backdrop-blur-2xl"
          : "bg-transparent"
      }   max-w-6xl`}
    >
      <div className=" flex items-center justify-between  py-4 px-4  sm:px-2 md:justify-start md:space-x-10 animate-top-left">
        <Link to='/'>
        <img src="/images/logo.png" className="h-[55px]" alt="" />
        </Link>
        <div className=" flex items-center  flex-grow space-x-4 lg:w-0">
          <Popover.Group
            as="nav"
            className="hidden space-x-10 lg:flex justify-center  flex-grow"
          >
            <div className="text-medium font-normal text-black hover:text-opacity-100">
              <div className=" flex justify-center items-center gap-2">
               
                <span><GiBreakingChain/></span> 
                <DropdownButton2
                  Title="BlockChain"
                  item1="Blocks"
                  link1='/blocks'
                  item2="Uncles"
                  link2='/uncles'
                  item3="Forked Blocks"
                  link3='/reogrs'
                 
                  
                />
              </div>
            </div>

            <div className="text-medium font-normal text-black hover:text-opacity-100">
              <div className=" flex justify-center items-center gap-2">
               
                <span><AiOutlineSwap/></span> 
                <DropdownButton2
                  Title="Transactions"
               
                  item1='Validated'
                  link1='/txs'
                  item2='Pending'
                  link2='/pending'
                />
              </div>
            </div>


            <div className="text-medium font-normal text-black hover:text-opacity-100">
              <div className=" flex justify-center items-center gap-2">
                <img src="" className="mr-2" alt="" />
                <span><LiaCoinsSolid/></span>
                <DropdownButton2
                  Title="Tokens"
                  item1="All"
                  link1='/alltoken'
                  item2="MEMB"
                  link2='/membtoken'
                  
                />
              </div>
            </div>
            <div className="text-medium font-normal text-black hover:text-opacity-100">
              <div className=" flex justify-center items-center gap-2">
                
                <span><GiSettingsKnobs/></span> 
              <a href="/" className="text-black text-sm font-medium"> API</a>
              </div>
            </div>
          </Popover.Group>
          <div className="sm:flex hidden items-center gap-x-4 sm:flex-grow lg:flex-grow-0 justify-end">
            <div className="bg-[#fff] bg-opacity-20 rounded-full h-[30px] w-[2px] mr-7 hidden lg:flex"></div>

            <FaTelegramPlane className=" p-1 bg-gray-400 text-3xl  text-black flex justify-center items-center rounded-full cursor-pointer" />
            <AiOutlineTwitter className="p-1 bg-gray-400 text-3xl text-black flex justify-center items-center rounded-full cursor-pointer" />
          </div>
          <div className=" lg:hidden flex justify-end w-full sm:w-fit">
            <Popover.Button className=" inline-flex items-center justify-center  rounded-md  p-2">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" color="black" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform py-2 transition md:hidden"
        >
          <div className=" rounded-lg bg-[#343444] shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="bg-white px-3 py-3 rounded-md">
              <div className="flex items-center justify-between">
                <div className="focus:border:0 flex items-center justify-center  focus:outline-0 focus:ring-0">
                  <img src="/images/logo.png" alt="" className="h-[55px]" />
                </div>
                <div className="mr-2">
                  <Popover.Button className=" inline-flex items-center justify-center rounded-md  p-2">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                      color="black"
                    />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className=" py-4 px-2">
              <div className="mb-2 grid grid-cols-1 gap-y-1 gap-x-1">
                <a
                  href="/"
                  className={`rounded-md py-2 px-2 text-base font-medium  text-white hover:bg-gray-900
                  
                        `}
                >
                  home
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
