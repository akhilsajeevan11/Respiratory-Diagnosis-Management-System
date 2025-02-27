import React from 'react'
import Header from '../components/header/Header'
import SpecialityMenu from '../components/speciality/SpecialityMenu'
import Topdoctors from '../components/topdoctors/Topdoctors'
import Banner from '../components/banner/Banner'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <Topdoctors/>
      <Banner/>
    </div>
  )
}

export default Home