import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { BsInfoCircleFill, BsCheckCircle } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
function TransactionDetails() {
  return (
    <section className="mt-4">
      <div className="max-w-6xl mx-auto">
        <div className="card-tran bg-white h-full rounded-xl border border-gray-45  p-[2.1rem]   mb-2">
          <div className="flex justify-between items-center mb-3">
            <h1 className="">Transaction Details</h1>
          </div>
          <div className="">
            <div className="flex justify-between max-w-3xl ">
              <div className="flex items-center gap-1">
                <BsInfoCircleFill
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello world!"
                  data-tooltip-place="top"
                  className="text-[#a3a9b5] text-sm"
                />
                <h2 className="text-[#6c757d] text-sm">Transactions Hash </h2>
              </div>
              <div className="flex">
                <p className="flex items-center gap-1 text-sm" id="copy">
                  0x7e0778bfa42f7a96823be2ef3ca952acb51772c80cbd34f71bb65dd9463e776c{" "}
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
                <h2 className="text-[#6c757d] text-sm">Result </h2>
              </div>
              <div className="flex">
                <p
                  className="flex text-[#28a745] items-center gap-1 text-sm"
                  id="copy"
                >
                  <span>
                    <BsCheckCircle className="text-[#28a745]" />
                  </span>
                  Success{" "}
                </p>
              </div>
            </div>

            <div className="flex justify-between max-w-[545px] mt-3 mb-3 ">
              <div className="flex items-center gap-1">
                <BsInfoCircleFill
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello world!"
                  data-tooltip-place="top"
                  className="text-[#a3a9b5] text-sm"
                />
                <h2 className="text-[#6c757d] text-sm">Status</h2>
              </div>
              <div className="flex items-center gap-3">
                <p className=" text-[#28a745]  text-sm bg-[#28a74533] py-2 px-7 rounded-md">Confirmed </p>
                <p className="bg-[#a3a9b596] py-2 px-7 text-sm rounded-md">Confirmed by 8,328</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReactTooltip id="my-tooltip" />

      <ReactTooltip id="copy" />
    </section>
  );
}

export default TransactionDetails;
      