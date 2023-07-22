import React from 'react'

import SearchBar from '../components/SearchBar'
import Navbar from '../components/Navbar'

import Footer from '../sections/Footer'
import AddressSection from '../sections/AddressSection'

function Wallet() {
  return (
    <>
    <SearchBar/>
    <Navbar/>
    <div className=' max-w-6xl mx-auto'>
   <AddressSection/>

    </div>
<Footer/>
   </>
  )
}

export default Wallet