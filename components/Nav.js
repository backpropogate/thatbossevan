import React, {useState} from 'react'
import Link from 'next/link'

const Nav = () => {
  const [nav, setnav] = useState(false)
  const Opennav = () => {
        setnav(!nav)
    }
  return (
    <div className=' w-full  p-7 halfGradient '>
        <nav className='flex justify-between items-center md:ml-5 md:mr-5  '>
            <Link href="#"><img className=' cursor-pointer w-32' src="/Group 1.png" alt="" /></Link>
            <svg className='hamburger sm:hidden' onClick={Opennav} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.21875 11.1562H34.7812M7.21875 32.1562H34.7812H7.21875ZM7.21875 21.6562H34.7812H7.21875Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <ul className=' hidden sm:flex gap-7 text-white font-semibold text-sm md:text-lg'>
               <Link href="#"><li className='cursor-pointer navMain'>Home</li></Link>
               <Link href="#player" ><li className='cursor-pointer navMain'>Tracks</li></Link>
               <Link href="#"><li className='cursor-pointer navMain'>Videos</li></Link>
               <Link href="#contact"><li className='cursor-pointer navMain'>Contact</li></Link>
            </ul>
        </nav>
        <nav className={`${!nav ? 'hiddenNav' : ' visibleNav'} h-screen `}>
                 <div className='closeNav ' onClick={Opennav} >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.192 6.34399L11.949 10.586L7.70697 6.34399L6.29297 7.75799L10.535 12L6.29297 16.242L7.70697 17.656L11.949 13.414L16.192 17.656L17.606 16.242L13.364 12L17.606 7.75799L16.192 6.34399Z" fill="black"/>
                </svg>


                 </div>
                <ul>
                <Link href="#"><li className='cursor-pointer navMain'  onClick={Opennav}>Home</li></Link>
               <Link href="#player" ><li className='cursor-pointer navMain'  onClick={Opennav}>Tracks</li></Link>
               <Link href="#"><li className='cursor-pointer navMain'  onClick={Opennav}>Videos</li></Link>
               <Link href="#contact"><li className='cursor-pointer navMain'  onClick={Opennav}>Contact</li></Link>
                 
                </ul>
            </nav>
    </div>
  )
}

export default Nav