import React from 'react'
import { Link } from 'react-router-dom'
import BlockCard3 from '../components/BlockCard3'
function ValidateSection() {
  return (
    <section className="mt-4">
    <div className="max-w-6xl mx-auto">
      <div className="card-tran bg-white h-full rounded-xl border border-gray-45  p-[2.1rem]   mb-2">
        <div className="flex justify-between items-center mb-3">
          <h1>Validated Transactions</h1>
          <Link to='/blocks' className=" text-[#6984aa] bg-[#6984aa1a] border-transparent rounded-md px-2 py-1 font-medium text-base">
           Pages
          </Link>
        </div>
        <div className="flex flex-col  justify-between  gap-2 sm:gap-0">

            <div>
                <BlockCard3/>
            </div>
       
            <div>
                <BlockCard3/>
            </div>
       
            <div>
                <BlockCard3/>
            </div>
       
            <div>
                <BlockCard3/>
            </div>
       


       
        </div>
      </div>
    </div>
  </section>
  )
}

export default ValidateSection