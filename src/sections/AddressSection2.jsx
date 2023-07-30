import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { BsInfoCircleFill, BsCheckCircle,BsQrCode } from "react-icons/bs";
import {BiCopyAlt} from 'react-icons/bi'
import { AiOutlineCopy } from "react-icons/ai";
import Transtab3 from "./Transtab3";

function AddressSection() {
  return (
    <section className="mt-4">
      <div className="max-w-6xl mx-auto">
        <div className="card-tran bg-white h-full rounded-xl border border-gray-45  p-[2.1rem]   mb-2">
          <div className="flex justify-between items-start mb-3">
            <div>
            <h1 className="">Address Details</h1>
            <p>0x868B132291e8b93AFbD10A799Ec0Da0CE17A2e35</p>

            </div>
            <div className="flex justify-between gap-2">
              <BiCopyAlt/>
              <BsQrCode/>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between max-w-[387px] ">
              <div className="flex items-center gap-1">
                <BsInfoCircleFill
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello world!"
                  data-tooltip-place="top"
                  className="text-[#a3a9b5] text-sm"
                />
                <h2 className="text-[#6c757d] text-sm">Balance</h2>
              </div>
              <div className="flex">
                <p className="flex items-center gap-1 text-sm" id="copy">
                45 MEMEB
                  <span>
                    <AiOutlineCopy  
              
                      data-tooltip-id="copy"
                      data-tooltip-content="Copy"
                      data-tooltip-place="top"
                    />
                  </span>
                </p>
              </div>
            </div>

            <div className="flex justify-between max-w-[300px] mt-3 mb-3 ">
              <div className="flex items-center gap-1">
                <BsInfoCircleFill
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello world!"
                  data-tooltip-place="top"
                  className="text-[#a3a9b5] text-sm"
                />
                <h2 className="text-[#6c757d] text-sm">Tokens </h2>
              </div>
              <div className="flex">
                <p
                  className="flex text-[#000000] items-center gap-1 text-sm"
                  id="copy"
                >
                
                  0 tokens
                </p>
              </div>
            </div>

            <div className="flex justify-between max-w-[335px] mt-3 mb-3 ">
              <div className="flex items-center gap-1">
                <BsInfoCircleFill
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello world!"
                  data-tooltip-place="top"
                  className="text-[#a3a9b5] text-sm"
                />
                <h2 className="text-[#6c757d] text-sm"> Transactions</h2>
              </div>
              <div className="flex items-center gap-3">
                
                <p className="  text-sm ">
                9 Transactions
                </p>
              </div>
            </div>

            <div className="flex justify-between max-w-[296px] mt-3 mb-3 ">
              <div className="flex items-center gap-1">
                <BsInfoCircleFill
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello world!"
                  data-tooltip-place="top"
                  className="text-[#a3a9b5] text-sm"
                />
                <h2 className="text-[#6c757d] text-sm">Gas Used</h2>
              </div>
              <div className="flex items-center gap-3">
                <p className=" text-[#000000]  text-sm ">189,000 </p>
              </div>
            </div>

            <div className="flex justify-between max-w-[293px] mt-3 mb-3 ">
              <div className="flex items-center gap-1">
                <BsInfoCircleFill
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello world!"
                  data-tooltip-place="top"
                  className="text-[#a3a9b5] text-sm"
                />
                <h2 className="text-[#6c757d] text-sm">Last Balance Update</h2>
              </div>
              <div className="flex items-center gap-3">
                <div className=" flex text-[#000000]  text-sm ">
                  <p className="flex items-center">
                  111451
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between max-w-[293px] mt-3 mb-3 ">
              <div className="flex items-center gap-1">
                <BsInfoCircleFill
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello world!"
                  data-tooltip-place="top"
                  className="text-[#a3a9b5] text-sm"
                />
                <h2 className="text-[#6c757d] text-sm">Blocks Validated</h2>
              </div>
              <div className="flex items-center gap-3">
                <div className=" flex text-[#000000]  text-sm ">
                  <p className="flex items-center">
                  111,453
                  </p>
                </div>
              </div>
            </div>


        

   

          </div>
        </div>
      </div>

      <ReactTooltip id="my-tooltip" />

      <ReactTooltip id="copy" />

      <Transtab3/>
    </section>
  )
}

export default AddressSection