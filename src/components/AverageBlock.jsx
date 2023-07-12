import React from 'react'

function AverageBlock() {
  return (
    <div className='bg-[#b8b7b7] h-full p-[2rem]  rounded-xl'>
      <div className='flex justify-between items-center'>
        <div>
          <div className='h-full w-[2px]'></div>
          <p>Average block time</p>
          <h2>10 seconds</h2>
        </div>

      </div>
    </div>
  )
}

export default AverageBlock