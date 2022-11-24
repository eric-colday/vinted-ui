import React from 'react'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Items from '../../components/items/Items'
import "./home.css"

const Home = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <Items />
      <Footer />
    </div>
  )
}

export default Home