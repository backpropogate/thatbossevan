import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import Didusample from './Didusample'
import Test from './Test';
import Crown from './Crown'
import Typewriter from 'typewriter-effect';

const SplashScreen = () => {
 //state
 const [visibility, setVisibility] = useState()
    //variables
    //utility functions 
 
   
    //effects
    useEffect(() => {
         const timer = setTimeout(() => {
            setVisibility("hidden")
          }, 4000);
          return () => clearTimeout(timer);
    
     
     }, [])
    
  return (
    <div  className={`${visibility} overlay bg-black flex flex-col items-center  `}>
      <div className='text-4xl whitespace-nowrap text-white font-extrabold mt-20' >
      <Typewriter className='text-3xl text-white font-bold mt-10'
  options={{
    strings: ['"Did You Sample That?"'],
    autoStart: true,
    loop: false,
    delay: 1,
  }}
/>


</div>

      <Canvas camera={{ fov: 25, position: [4, -2, -6] }} >
       
      <ambientLight  position={[0, -2, 0]}  intensity={10} />
        <pointLight position={[0, 7, 0]}  intensity={10} />
        <Suspense fallback={null}>
         
        <Crown />
        </Suspense>
        
    </Canvas>
        
        
    </div>
  )
}

export default SplashScreen