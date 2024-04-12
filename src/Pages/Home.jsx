import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import icon6 from "../assets/icons/icon6.svg";
import icon5 from "../assets/icons/icon5.svg";
import icon4 from "../assets/icons/icon4.svg";
import icon3 from "../assets/icons/icon3.svg";
import icon2 from "../assets/icons/icon2.svg";
import icon1 from "../assets/icons/icon1.svg";
import "./Home.css";
import portfolio from "../assets/Portfolio.svg";
import headerEffect from "../assets/headerEffect.svg";
import aboutEffect from "../assets/aboutEffect.svg";
import bg from "../assets/headerbg.png";
import workEffect from "../assets/workEffect.svg";

import { motion, AnimatePresence, useInView } from "framer-motion";
import Work from "../components/Work";
import WorkCon from "../components/WorkCon";






function Home() {
  const MoveWork = useRef(null);

  return (
    <>
      <Navbar />
      <section className="cols-con bg-primary relative">
        <div className="hero-col-con background">
          <div
            className={`hero-row-con row1 max-w-[1920px] w-11/12 flex justify-center items-center border-btm`}
          >
            <div className="div1 h-full">
              <div className="round-effect"></div>
            </div>
            <div className="div2 h-full smalltext-con relative overflow-hidden">
              <motion.div
                initial={{ position: "absolute", bottom: -30 }}
                animate={{ bottom: -5 }}
                transition={{ delay: 0.5, duration: 2, ease: [0, 0.9, 0, 1] }}
                className="smalltext"
              >
                Front-end Developer
              </motion.div>
            </div>
            <div className="div3 h-full"></div>
            <div className="div4 h-full"></div>
          </div>
          <div
            className={`hero-row-con row2 max-w-[1920px] w-11/12 flex justify-center items-center border-btm`}
          >
            <div className="div1 h-full"></div>
            <div className="div2 h-full"></div>
            <div className="div3 h-full"></div>
            <div className="div4 h-full"></div>
          </div>
          <div
            className={`hero-row-con row3 max-w-[1920px] w-11/12 flex justify-center items-center border-btm`}
          >
            <div className="div1 h-full"></div>
            <div className="div2 h-full img-con hero-text flex items-end justify-end relative overflow-hidden">
              <motion.img
                initial={{ position: "absolute", top: -200 }}
                animate={{ top: 0 }}
                transition={{ delay: 0.7, duration: 5, ease: [0, 0.9, 0, 1] }}
                src={portfolio}
                alt=""
              />
            </div>
            <div className="div3 h-full"></div>
            <div className="div4 h-full"></div>
          </div>
          <div className="hero-row-con row4 max-w-[1920px] w-11/12 flex justify-center items-center border-btm">
            <div className="div1 h-full"></div>
            <div className="div2 h-full"></div>
            <div className="div3 h-full"></div>
            <div className="div4 h-full"></div>
          </div>
          <div className="hero-row-con row5 max-w-[1920px] w-11/12 flex justify-center items-center border-btm">
            <div className="div1 h-full text-white flex justify-end items-end p-5 text-xl font-bold">
              ABOUT
            </div>
            <div className="div2 h-full"></div>
            <div className="div3 h-full">
              {/* <img className="headerEffect" src={headerEffect} alt="" /> */}
            </div>
            <div className="div4 h-full "></div>
          </div>
        </div>
        {/* Header Image */}
        <motion.img
          className="headerbg ml-1"
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ duration: 15, ease: [0, 0.9, 0, 1] }}
          src={bg}
          alt=""
        />
      </section>

      <section className="cols-con bg-primary">
        <div className="about-col-con relative">
          <div
            className={`about-row-con row1 max-w-[1920px] w-11/12 flex justify-center items-center border-btm`}
          >
            <div className="div1 h-full"></div>
            <div className="div2 h-full min-h-96 w-9/12 flex items-end justify-end pb-5">
              <h2 className="text-[5vh] text-white w-11/12 z-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                mollitia facilis dolorem doloremque veritatis, corporis saepe a
                sint dolorum ut! Quasi mollitia facilis dolorem doloremque
                veritatis,
              </h2>
            </div>
            <div className="div4 h-full"></div>
          </div>
          <div className="about-row-con row2 h-20 max-w-[1920px] w-11/12 flex justify-center items-center border-btm">
            <div className="div1 h-full text-2xl text-white flex items-end justify-end p-5 z-10">
              Tech Stack
            </div>
            <div className="div2 h-full w-9/12"></div>
            <div className="div4 h-full"></div>
          </div>
          <div
            className={`about-row-con row3 h-40 max-w-[1920px] w-11/12 flex justify-center items-center border-btm`}
          >
            <div className="div1 h-full"></div>
            <div className="div2 h-full min-h-96 w-9/12 stack-con flex mt-5 justify-end gap-10 z-10">
              <img src={icon5} alt="figma" />
              <img src={icon4} alt="HTML" />
              <img src={icon3} alt="CSS" />
              <img src={icon2} alt="javascript" />
              <img src={icon1} alt="react" />
              <img src={icon6} alt="github" />
            </div>
            <div className="div4 h-full">
              <img className="about-effect" src={aboutEffect} initial={{right:0}} animate={{right:-200}} transition={{duration:10, repeat:Infinity, repeatType: "reverse",}}/>
            </div>
          </div>
        </div>
      </section>

      <section className="cols-con bg-primary">
        <div className="work-col-con relative">
          <div
            className={`about-row-con row3 h-40 max-w-[1920px] w-11/12 flex justify-center items-center border-btm`}
          >
            <div className="div1 h-full text-2xl text-white p-5 flex items-end justify-end">
              WORKS
            </div>
            <div className="div2 h-full min-h-96 w-9/12 stack-con flex mt-5 justify-end gap-10 z-10"></div>
            <div className="div4 h-full"></div>
          </div>
          <div className="work-row-con h-[200vh] row4 max-w-[1920px] w-11/12 flex justify-center items-center border-btm">
            <div className="div1 h-full"></div>
            <div className="div2 h-full w-9/12 flex justify-between gap-3">
              <div ref={MoveWork} className="work-border-con w-full border-r">
                <WorkCon className="h-1/3 w-full relative">
                  <Work />
                </WorkCon>
              </div>
              <motion.img className='absolute left-0 bottom-0 -z-0' initial={{left:-200}} animate={{left:0}} transition={{duration:10, repeat:Infinity, repeatType: "reverse",}} src={workEffect} alt="" />
              <div ref={MoveWork} className="work-border-con w-full border-x">
                <WorkCon className="h-1/3 w-full relative top-1/3">
                  <Work />
                </WorkCon>
              </div>
              <div className="work-border-con w-full border-l">
                <WorkCon className="h-1/3 w-full relative top-2/3">
                  <Work />
                </WorkCon>
              </div>
            </div>
            <div className="div4 h-full"></div>
          </div>
        </div>

      </section>


      <Footer />
    </>
  );
}

export default Home;
