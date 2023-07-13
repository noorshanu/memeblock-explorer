import React from "react";

function AverageBlock() {
  return (
    <div className="card-tran bg-white h-full rounded-xl border border-gray-45  p-[3.5rem]   mb-2">
      <div className="flex flex-col sm:flex-row justify-between text-start gap-2 sm:gap-0 sm:items-center">
        <div className="flex gap-2 ">
          <div className=" w-[4px] bg-[#c2c0c0] rounded-full"></div>
          <div className="h-full">
            <p className="text-[#248eff] text-sm">Average block time</p>
            <h2 className=" text-xl">10 seconds</h2>
          </div>
        </div>

        <div className="flex gap-2">
          <div className=" w-[4px] bg-[#c2c0c0] rounded-full"></div>
          <div className="h-full">
            <p className="text-[#248eff] text-sm">Total transactions</p>
            <h2 className="text-xl">1</h2>
          </div>
        </div>

        <div className="flex gap-2">
          <div className=" w-[4px]  bg-[#c2c0c0] rounded-full"></div>
          <div className="h-full">
            <p className="text-[#248eff] text-sm">Total blocks</p>
            <h2 className="text-xl">16,460</h2>
          </div>
        </div>

        <div className="flex gap-2">
          <div className=" w-[4px]  bg-[#c2c0c0] rounded-full"></div>
          <div className="h-full">
            <p className="text-[#248eff] text-sm">Wallet addresses</p>
            <h2 className="text-xl">4</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AverageBlock;
