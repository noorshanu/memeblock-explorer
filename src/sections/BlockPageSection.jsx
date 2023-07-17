import React from "react";
import BlockCard2 from "../components/BlockCard2";
import { Link } from "react-router-dom";

function BlockPageSection() {
  return (
    <section className="mt-4">
      <div className="max-w-6xl mx-auto">
        <div className="card-tran bg-white h-full rounded-xl border border-gray-45  p-[2.1rem]   mb-2">
          <div className="flex justify-between items-center mb-3">
            <h1>Blocks</h1>
            <Link
              to="/"
              className=" text-[#6984aa] bg-[#6984aa1a] border-transparent rounded-md px-2 py-1 font-medium text-base"
            >
              Page Number
            </Link>
          </div>
          <div className="flex flex-col  justify-between items-start gap-2 sm:gap-0">
            <div>
              <BlockCard2 />
            </div>
            <div>
              <BlockCard2 />
            </div>

            <div>
              <BlockCard2 />
            </div>

            <div>
              <BlockCard2 />
            </div>

            <div>
              <BlockCard2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlockPageSection;
