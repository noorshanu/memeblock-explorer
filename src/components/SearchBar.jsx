import React from 'react'
import {BsSearch} from 'react-icons/bs'

function SearchBar() {
  return (
    <div className='bg-grad py-2'>
        <div className='flex justify-between max-w-6xl mx-auto'>
            <div>
                <div className='flex gap-4 items-center'>
                    <BsSearch className='text-white'/>
                    <input type="text" className='w-full max-w-full' placeholder='Search by Address / TX (Version) ID' />
                </div>
            </div>

            <div>
                mainnet
            </div>
        </div>
    </div>
  )
}

export default SearchBar