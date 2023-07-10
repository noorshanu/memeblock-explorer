import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BsTelegram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
let navItems = [
  {
    label: 'Home',
    route: '/',
    icon: '/assets/icons/business.png',
  },
  {
    label: 'About Us',
    route: 'Market',
    icon: '/assets/icons/finance.png',
  },
  {
    label: 'Roadmap',
    route: 'Market',
    icon: '/assets/icons/finance.png',
  },
  {
    label: 'Tokenomics',
    route: 'Market',
    icon: '/assets/icons/finance.png',
  },
  {
    label: 'How to buy',
    route: 'how-to-buy',
    icon: '/assets/icons/finance.png',
  },
]

export default function Navbar() {
  const route = '/'
  let blur = false
  return (
    // bg-[#14141f]
    <Popover
      className={`z-50 fixed top-[30px] left-0 right-0 mx-auto ${
        blur
          ? 'bg-white bg-opacity-[0.0001] backdrop-filter backdrop-blur-2xl'
          : 'bg-transparent'
      }   max-w-6xl`}
    >
      <div className="font-orbitron flex items-center justify-between  py-4 px-2 md:justify-start md:space-x-10 animate-top-left">
        <img src="/assets/logos/text-logo.svg" className="" alt="" />
        <div className=" flex items-center  flex-grow space-x-4 lg:w-0">
          <Popover.Group
            as="nav"
            className="hidden space-x-10 lg:flex justify-center  flex-grow"
          >
            {navItems.map((nav, i) => {
              return (
                <a
                  key={i}
                  href={nav.route}
                  className={`text-medium font-normal text-black hover:text-opacity-100
                     
                     ${
                       route === nav.route
                         ? ' text-opacity-100 '
                         : 'text-opacity-30'
                     }
                  `}
                >
                  <div className=" flex justify-center items-center">
                    <img src={nav.icon} className="mr-2" alt="" />
                    <span>{nav.label}</span>
                  </div>
                </a>
              )
            })}
          </Popover.Group>
          <div className="sm:flex hidden items-center gap-x-4 sm:flex-grow lg:flex-grow-0 justify-end">
          <div className="bg-[#fff] bg-opacity-20 rounded-full h-[30px] w-[2px] mr-7 hidden lg:flex"></div>
          
            <BsTelegram className="text-black hover:text-[#FD7D00]  hover:bg-white rounded-full text-2xl cursor-pointer" />
            <AiOutlineTwitter className="text-black hover:text-[#FD7D00] text-2xl cursor-pointer" />
          </div>
          <div className=" lg:hidden flex justify-end w-full sm:w-fit">
            <Popover.Button className=" inline-flex items-center justify-center  rounded-md  p-2">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" color="white" aria-hidden="true" />
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
            <div className="bg-black px-3 py-3 rounded-md">
              <div className="flex items-center justify-between">
                <div className="focus:border:0 flex items-center justify-center  focus:outline-0 focus:ring-0">
                  <img src="/assets/logos/text-logo.svg" alt="" />
                </div>
                <div className="mr-2">
                  <Popover.Button className=" inline-flex items-center justify-center rounded-md  p-2">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                      color="white"
                    />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className=" py-4 px-2">
              <div className="mb-2 grid grid-cols-1 gap-y-1 gap-x-1">
                {navItems.map((nav, i) => {
                  return (
                    <a
                      key={i}
                      href={nav.route}
                      className={`rounded-md py-2 px-2 text-base font-medium  text-white hover:bg-gray-900
                        ${
                          (!route && i === 0) || route === nav.label
                            ? ' bg-gray-900 text-[#54FF7F] '
                            : 'text-white'
                        }
                        `}
                    >
                      {/* false ? " text-pink-400 bg-gray-900 " : "" */}
                      {nav.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
