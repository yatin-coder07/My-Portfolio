import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './theme-btn'

const Navbar = () => {
  return (
    <section className='header-container'>
        <div className="ml-2">
           <Link href={"/"}>
           <h1 className='text-2xl font-bold'>Yatin Sharma</h1>
           </Link>
        </div>
        <div className="mt-2 mr-2 ">
            <ModeToggle />
        </div>

    </section>
  )
}

export default Navbar