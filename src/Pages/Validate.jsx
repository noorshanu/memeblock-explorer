import React from 'react'

import SearchBar from '../components/SearchBar'
import Navbar from '../components/Navbar'

import Footer from '../sections/Footer'
import ValidateSection from '../sections/ValidateSection'

function Validate() {
  return (
   <>
    <SearchBar/>
    <Navbar/>
    <div className=' max-w-6xl mx-auto'>
      <ValidateSection/>

    </div>
<Footer/>
   </>
  )
}

export default Validate