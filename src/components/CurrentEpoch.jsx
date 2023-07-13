import React from "react";

function CurrentEpoch() {
  return (
    <div className="bg-[#d5f7ee] h-auto p-[2rem] mt-3 rounded-xl">
      <div className="mb-3">
        <h1 className=" text-[16px] sm:text-[16px] font-[700] text-green-600">
          Current Epoch
        </h1>
        <p className=" text-base sm:text-lg font-[700] text-green-600">90</p>
      </div>
      <div>
        <p className="font=[500] text-base text-slate-600">9h 56m left</p>
        <div className="relative w-full rounded-full bg-white">
          <div className="py-1 bg-green-500 rounded-full w-[58%]"></div>
        </div>
        <div className="mb-2 mt-4">
          <h2 className=" font-bold text-xs text-slate-600 uppercase">Started</h2>
          <p className=" font-bold text-[10px] text-slate-600 ">10:35 PM, Yesterday</p>
        </div>
        <div className="mt-3">
          <div>
            <p className="font-bold text-xs text-slate-600 uppercase">Checkpoint</p>
          </div>
          <div>
            <p className="font-bold text-xl text-slate-600 uppercase">7,456,636</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentEpoch;
