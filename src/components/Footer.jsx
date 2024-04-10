import React from 'react'

function Footer() {
  return (
    <div className='footer-con h-[70vh] flex flex-col justify-end bg-primary px-5 p-5 pt-[4.25rem]'>
        
        <div className=' flex justify-between bg-blue h-full items-center px-10 rounded-3xl pb-10'>
            <div>
                <h4 className=' text-md ml-3 text-white'>Contact Me</h4>
                <h1 className=' text-9xl text-white'>Let's Talk</h1>
            </div>
            <div className=' flex gap-8 text-white text-2xl'>
                <div className='name'>Linkedin</div>
                <div className='name'>Instagram</div>
            </div>
        </div>
    </div>  
  )
}

export default Footer