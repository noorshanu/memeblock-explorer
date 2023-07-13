import React from "react";
import BlockCard from "../components/BlockCard";
import { Link } from "react-router-dom";

function BlockSection() {
  return (
    <section className="mt-4">
      <div className="max-w-6xl mx-auto">
        <div className="card-tran bg-white h-full rounded-xl border border-gray-45  p-[2.1rem]   mb-2">
          <div className="flex justify-between items-center mb-3">
            <h1>Blocks</h1>
            <Link to='/blocks' className=" text-[#6984aa] bg-[#6984aa1a] border-transparent rounded-md px-2 py-1 font-medium text-base">
              View All Blocks
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <div><BlockCard/></div>
            <div><BlockCard/></div>

            <div><BlockCard/></div>

            <div><BlockCard/></div>

            <div><BlockCard/></div>


         
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlockSection;
