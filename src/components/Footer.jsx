import React from 'react'
import footerEffect from '../assets/footerEffect.svg'
import {motion} from 'framer-motion'

function Footer() {
  return (



    <section className="cols-con bg-primary">
    <div className="footer-col-con relative">
      <div className={`about-row-con h-[80vh] max-w-[1920px] w-11/12 flex justify-center items-center`}
      >
        <div className="div1 h-full text-2xl w-6/12 text-white p-5 flex flex-col items-start justify-center z-10">
          <h4 className='pl-2'>Contact</h4>
          <h1 className=' text-9xl text-white'>Let's Talk</h1>
        </div>
        <motion.img className='absolute left-0 bottom-0 -z-0' initial={{left:-200}} animate={{left:0}} transition={{duration:10, repeat:Infinity, repeatType: "reverse",}} src={footerEffect} alt="" />
        <div className="div2 h-full w-6/12 stack-con flex gap-10 z-10 items-center justify-center border-b-0">
          <div className='form p-10 w-full'>
              <div className='formTop flex justify-between gap-10'>
                <input type="text" placeholder='Your Name' className='w-full bg-transparent border-blue-600 border-b-2 text-white px-2 py-2' />
              <input type="text" placeholder='Your Email' className='w-full bg-transparent border-blue-600 border-b-2 text-white px-2 py-2' /> 
             </div>
              <div className='formBtm'>
              <input type="text" placeholder='Your Messege' className='h-20 mt-10 w-full bg-transparent border-blue-600 border-b-2 text-white px-2 py-2' /> 
                <button className=' px-5 py-2 mt-10 bg-blue-500 text-white hover:bg-sky-500 duration-75'>Send</button>
              </div>
          </div>
        </div>


      </div>
      <div className='footer-links border-t w-full flex justify-center'>

        <div className='footer-links h-[20vh] border-t w-11/12 flex justify-between items-center text-white px-20 border-x'>
          <div>Suman Das 2024</div>
          <div className=' space-x-10'>
            <a href="https://linkedin.com">Linkedin</a>
            <a href="https://instagram.com">instagram</a>

          </div>
        </div>
      </div>
      
    </div>

  </section>





    // <div className='footer-con h-[70vh] flex flex-col justify-end bg-primary px-5 p-5 pt-[4.25rem]'>
        
    //     <div className=' flex justify-between bg-blue h-full items-center px-10 rounded-3xl pb-10'>
    //         <div>
    //             <h4 className=' text-md ml-3 text-white'>Contact Me</h4>
    //             <h1 className=' text-9xl text-white'>Let's Talk</h1>
    //         </div>
    //         <div className=' flex gap-8 text-white text-2xl'>
    //             <div className='name'>Linkedin</div>
    //             <div className='name'>Instagram</div>
    //         </div>
    //     </div>
    // </div>  
  )
}

export default Footer