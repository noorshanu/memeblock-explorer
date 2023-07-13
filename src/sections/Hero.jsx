import React from "react";
import CurrentEpoch from "../components/CurrentEpoch";
import NetworkTps from "../components/NetworkTps";
import GasPrice from "../components/GasPrice";
import AverageBlock from "../components/AverageBlock";

function Hero() {
  return (
    <section className="mt-6" id="home">
      <div className="max-w-6xl mx-auto">
        <div className="flex  justify-between gap-3">
          <div>
            <NetworkTps />
            <CurrentEpoch />
          </div>
          <div className="w-[90%]  h-full">
          <AverageBlock />
            <GasPrice />
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
