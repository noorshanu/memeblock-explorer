import React from 'react'
import SearchBar from '../components/SearchBar'
import Navbar from '../components/Navbar'
import TransactionTable from '../components/TransactionTable'
import Footer from '../sections/Footer'

function TransactionPage() {
  return (
    <>
    <SearchBar/>
    <Navbar/>
    <div className=' max-w-6xl mx-auto'>
      <TransactionTable/>

    </div>
<Footer/>
    </>
  )
}

export default TransactionPage