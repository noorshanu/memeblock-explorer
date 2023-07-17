import React from 'react'
import SearchBar from '../components/SearchBar'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import UncleBox from '../sections/UncleBox'

function Uncles() {
  return (
    <>
    <SearchBar/>
    <Navbar/>
    <div>
        <UncleBox/>

    </div>
    <Footer/>
    </>
  )
}

export default Uncles