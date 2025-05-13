import React from 'react'
import Footer from '../../Footer/Footer'
import Banner from '../../Banner/Banner'
import Header from '../../Header/Header'
import VideoCard from '../../VideoCard/VideoCard'
import RowList from "../../Rows/RowList/RowList"

function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <RowList/>
    <Footer/>
    </>
  )
}

export default Home