import React from "react";

function AverageBlock() {
  return (
    <div className="card-tran bg-white h-full rounded-xl border border-gray-45  p-[3.1rem]   mb-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 ">
          <div className=" w-[4px] bg-black rounded-full"></div>
          <div className="h-full">
            <p className="text-[#248eff] text-sm">Average block time</p>
            <h2 className=" text-xl">10 seconds</h2>
          </div>
        </div>

        <div className="flex">
          <div className=" w-[2px] bg-white rounded-xl"></div>
          <div className="h-full">
            <p>Average block time</p>
            <h2>10 seconds</h2>
          </div>
        </div>

        <div className="flex">
          <div className=" w-[2px] bg-white rounded-xl"></div>
          <div className="h-full">
            <p>Average block time</p>
            <h2>10 seconds</h2>
          </div>
        </div>

        <div className="flex">
          <div className=" w-[2px] bg-white rounded-xl"></div>
          <div className="h-full">
            <p>Average block time</p>
            <h2>10 seconds</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AverageBlock;
