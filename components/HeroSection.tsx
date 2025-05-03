import Link from 'next/link'
import React from 'react'
import Tools from './Tools'
import Projects from './Projects'

const HeroSection = () => {
  return (
  <>
    <section className='hero-container'>
       <div className='flex flex-row'>
       <div className="hero-description">
          <div className='description-text'>
            <div><h1>Aspiring</h1></div>
            <div><h2>Full-Stack</h2></div>
            <div><h3 className='text-[#909090]'>
                Web Developer
            </h3></div>
          </div>
          <div className="   hero-btns ">
           <Link href={'https://github.com/yatin-coder07'}>
           <button className="contact  ">Projects</button></Link>
           <Link href={'/About'}>
           <button className="contact  ">Read More</button></Link>
            
          </div>
        </div>
       </div>
        <div className="sm:h-80 sm:w-80  h-60 w-60 md:h-90 md:w-90 ">
            <img src={"/pfp.jpg"} alt="" className='rounded-full' />
        </div>
    </section>
    <section className=' sm:mt-50 mt-10'>
        <div className='p-5 bg-linear-to-r from-[#D4D4D4] to-[#909090] sm:m-10 m-5 md:text-[15px] md:font-medium rounded-2xl dark:text-black font-medium'>
           <p>
            Welcome! I am Yatin a Web Developement enthusiast, With a liking to <br />
            creating visually stunning and highly functional websites. <br />
            I am currently in my Second year at Gurunanak dev university <br />
            I am an eager learner who is working hard to improve everyday.
            </p> 
            <h1 className='text-3xl font-bold mt-3'>
                5<span className='text-2xl text-cyan-600 '>+</span>
            </h1>
            <p> Projects created</p>
        </div>
        </section>

        <Tools/>
        <div className='gap-5 grid sm:grid-cols-1 md:grid-cols-3'>
          <Projects/>
        </div>
        </>
   
  )
}

export default HeroSection