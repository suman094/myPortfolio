import React from 'react'
import hero from '../assets/hero.png'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollTopTop'



function Project() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <section className='hero p-4  bg-primary'>
          <div className='img-con object-cover h-screen w-full pb-20'>
            <img src={hero} alt="" className='hero-img w-full h-full object-cover rounded-3xl mb-20' />
          </div>
          <div className='hero-text-con absolute bottom-40 p-10'>
            <h4 className=' text-md ml-3 text-white '>Front-end Developer</h4>
            <h1 className=' text-9xl text-white'>Portfolio.</h1>
          </div>
        </section>
    </>
  )
}

export default Project