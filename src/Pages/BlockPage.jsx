import React from 'react'
import SearchBar from '../components/SearchBar'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import BlockPageSection from '../sections/BlockPageSection'

function BlockPage() {
  return (
   <>
   <SearchBar/>
   <Navbar/>
<BlockPageSection/>
   <Footer/>
   </>
  )
}

export default BlockPage