import React from "react";

function NetworkTps() {
  return (
    <div>
      <div className="card-tran bg-white h-full rounded-xl border border-gray-45 p-8">
        <h1 className=" text-base sm:text-lg font-semibold text-slate-600">
          Network TPS
        </h1>

        <div className="mt-2">
          <p className=" break-words uppercase text-gray-600 text-xs font-semibold">
            TPS NOW / PEAK 30D
          </p>
          <p className=" text-lg sm:text-xl font-semibold text-slate-600 text-center">
            258 / 2,105
          </p>
        </div>
      </div>
    </div>
  );
}

export default NetworkTps;
