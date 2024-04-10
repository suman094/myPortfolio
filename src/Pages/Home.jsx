import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import hero from '../assets/hero.png'
import Work from '../components/Work'
import Footer from '../components/Footer'
import '../App.css'
import icon6 from '../assets/icons/icon6.svg'
import icon5 from '../assets/icons/icon5.svg'
import icon4 from '../assets/icons/icon4.svg'
import icon3 from '../assets/icons/icon3.svg'
import icon2 from '../assets/icons/icon2.svg'
import icon1 from '../assets/icons/icon1.svg'
import './Home.css';
import portfolio from '../assets/Portfolio.svg'
import headerEffect from '../assets/headerEffect.svg'


function Home() {

  // const heroSize = Math.floor(Number(window.innerWidth/8));
  // const gap = Math.floor(Number(heroSize/210))

  return (
    <>
    <Navbar/>
         <section className='hero-cols-con bg-primary'>

          <div className='hero-col-con background'>


          <div className={`hero-row-con row1 max-w-[1920px] w-11/12 flex justify-center items-center border-btm`}>
              <div className='div1 h-full'>
                <div className='round-effect'></div>
              </div>
              <div className='div2 h-full smalltext-con'><h4 className='smalltext'>Front-end Developer</h4></div>
              <div className='div3 h-full'></div>
              <div className='div4 h-full'></div>
            </div>
            <div className={`hero-row-con row2 max-w-[1920px] w-11/12 flex justify-center items-center border-btm`}>
              <div className='div1 h-full'></div>
              <div className='div2 h-full'></div>
              <div className='div3 h-full'></div>
              <div className='div4 h-full'></div>
            </div>
            <div className={`hero-row-con row3 max-w-[1920px] w-11/12 flex justify-center items-center border-btm`}>
              <div className='div1 h-full'></div>
              <div className='div2 h-full img-con hero-text flex items-end justify-end'>
                <img className='' src={portfolio} alt="" />
              </div>
              <div className='div3 h-full'></div>
              <div className='div4 h-full'></div>
            </div>
            <div className='hero-row-con row4 max-w-[1920px] w-11/12 flex justify-center items-center border-btm'>
              <div className='div1 h-full'></div>
              <div className='div2 h-full'></div>
              <div className='div3 h-full'></div>
              <div className='div4 h-full'></div>
            </div>
            <div className='hero-row-con row5 h-screen max-w-[1920px] w-11/12 flex justify-center items-center border-btm'>
              <div className='div1 h-full'></div>
              <div className='div2 h-full'></div>
              <div className='div3 h-full'>
                <img className='headerEffect' src={headerEffect} alt="" />
              </div>
              <div className='div4 h-full'></div>
            </div>
          </div>
          
        </section>


       {/* <section className='about-con h-screen max-h-[1080px] flex items-center justify-center bg-primary'>
          <div className='w-10/12 flex justify-center items-start'>

                <div className='about-header-con w-4/12 font-bold text-2xl '>About</div>
                <div className='about-text-con w-8/12'>
                  <h2 className='text-5xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia facilis dolorem doloremque veritatis, corporis saepe a sint dolorum ut! Quasi mollitia facilis dolorem doloremque veritatis,</h2>
                  <div className='about-header-con font-bold text-2xl mt-24'>Tech Stack</div>
                  <div className='stack-con flex mt-5 w-full justify-between '>
                    <img src={icon5} alt="figma" />
                    <img src={icon4} alt="HTML" />
                    <img src={icon3} alt="CSS" />
                    <img src={icon2} alt="javascript" />
                    <img src={icon1} alt="react" />
                    <img src={icon6} alt="github" />
                  </div>
                </div>

            </div>
        </section>


        <section className='works-con bg-primary 2xl:pb-28'>
          <div className='works flex justify-between px-20 h-5/6 gap-5'>
            <Work />
            <Work />
            <Work />
          </div>
        </section>

        <Footer /> */}
    </>
  )
}

export default Home