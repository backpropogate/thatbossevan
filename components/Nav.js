import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className=' w-full  p-5 halfGradient '>
        <nav className='flex justify-between items-center  '>
            <Link href="#"><img className=' cursor-pointer w-32' src="/Group 1.png" alt="" /></Link>
            <svg className='sm:hidden' width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.21875 11.1562H34.7812M7.21875 32.1562H34.7812H7.21875ZM7.21875 21.6562H34.7812H7.21875Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <ul className=' hidden sm:flex gap-7 text-white font-semibold text-sm md:text-lg'>
               <Link href="#"><li>Home</li></Link>
               <Link href="#"><li>Tracks</li></Link>
               <Link href="#"><li>Videos</li></Link>
               <Link href="#"><li>Contact</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default Nav