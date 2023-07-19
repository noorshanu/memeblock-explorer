import React from 'react'
import SearchBar from '../components/SearchBar'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import TransactionDetails from '../sections/TransactionDetails'

function TxAddress() {
  return (
    <>
    <SearchBar/>
    <Navbar/>
    <div>
        <TransactionDetails/>
    </div>
    <Footer/>
    </>
  )
}

export default TxAddress