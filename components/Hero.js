import React, { useRef, useState, Suspense, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.css'
import Test from './Test'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";





const Hero = () => {
    
      
    
  return (
    <div className='flex flex-col sm:flex-row justify-evenly w-full items-center halfGradient p-10 relative  mb-30 h-screen overflow-hidden    '>
        <section className='sm:hidden bg-transparent  flex flex-col items-center  h-full px-10 mb-10 ' >
            
        
            <img className=' jello  z-1  w-64' src="/thatboss.png" alt="" />
          
        


            
            
        </section>
        <div className= ' w-1/2 flex justify-center items-center sm:items-start  flex-col gap-6  h-full md:px-10  '>
            <div className='heroTitle'>
            <h1 className=' text-4xl lg:text-5xl font-bold'>ThatBossEvan</h1>
            <img className='crown animate-bounce ' src="/crown.png" alt="" />
            </div>
            <h3 className= ' text-center sm:text-left text-lg'>
                "I dont make beats, I create experiences"</h3>
            <div className='flex gap-4 '>
                <Link href="#">
                <a className=' primaryButton rounded whitespace-nowrap  '>Shop Beats</a>
                </Link>
                <Link href="#">
                <a  className=' secondaryButton rounded whitespace-nowrap ' >Contact</a>
                </Link>
            </div>
        </div>
        
        <section className=' w-1/2 hidden  sm:flex flex-col justify-center items-center  h-full px-10 ' >
            
           
            <img className=' jello w-80' src="/thatboss.png" alt="" />
        


            
            
        </section>
        <div className=" hidden sm:block custom-shape-divider-bottom-1645870750">
         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
        </div>
        
         </div>
  )
}

export default Hero