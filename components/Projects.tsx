import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <>
     <div className="text-4xl font-medium mt-30 mb-20 flex justify-center items-center ">
            <h1>My Project <span className='text-[#B4B4B4]'>Highlights</span></h1>
        </div>
    <section id='projects' className="project-container ">

       

       
       <div className="project ">
            <div className="project-image ">
                <img src={"/dogSite.jpg"} alt="" className='sm:h-65 sm:w-150 rounded-2xl' />
            </div>
           <div className=" flex ">
             <div className="project-description ">
                <h1 className='text-2xl font-bold text-white mt-3'>
                    Full Stack Dog Adoption Site
                </h1>
                <div className=" mt-2 flex gap-2">
                    <button className='project-btns '>Nextjs 15</button>
                    <button className='project-btns'>API</button>
                </div>
             </div>
             
                <Link href={"https://pawsitive-alpha.vercel.app/"} className='view-btn-container'>
                  <button className='view-btn'>View</button>
                </Link>
             
           </div>
            </div>

            <div className="project  ">
            <div className="project-image ">
                <img src={"/cryptoSite.jpg"} alt="" className='sm:h-65 sm:w-150 rounded-2xl' />
            </div>
           <div className=" flex ">
             <div className="project-description ">
                <h1 className='text-2xl font-bold text-white mt-3 dark:text-white'>
                    Crypto Price Checker Website
                </h1>
                <div className=" mt-2 flex gap-2">
                    <button className='project-btns '>React</button>
                    <button className='project-btns'>API</button>
                </div>
             </div>
             
                <Link href={"https://cryp-check.vercel.app/"} className='view-btn-container'>
                  <button className='view-btn'>View</button>
                </Link>
             
           </div>
            </div>

            <div className="project  ">
            <div className="project-image ">
                <img src={"/musicSite.jpg"} alt="" className='sm:h-65 sm:w-150 rounded-2xl' />
            </div>
           <div className=" flex ">
             <div className="project-description ">
                <h1 className='text-2xl font-bold text-white mt-3'>
                    Music Player Using Java script
                </h1>
                <div className=" mt-2 flex gap-2">
                    <button className='project-btns '>Java Script</button>
                    <button className='project-btns'>css</button>
                </div>
             </div>
             
                <Link href={"/"} className='view-btn-container'>
                  <button className='view-btn'>View</button>
                </Link>
             
           </div>
            </div>
    </section></>
  )
}

export default Projects