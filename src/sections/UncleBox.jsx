import React from 'react'
import { Link } from 'react-router-dom'

function UncleBox() {
  return (
    <section className="mt-4">
    <div className="max-w-6xl mx-auto">
      <div className="card-tran bg-white h-full rounded-xl border border-gray-45  p-[2.1rem]   mb-2">
        <div className="flex justify-between items-center mb-3">
          <h1>Uncles</h1>
          
        </div>
        <div className="flex flex-col  justify-between items-start gap-2 sm:gap-0">
          <p>There are no blocks</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default UncleBox