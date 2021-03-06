import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import Didusample from './Didusample'
import SampleText from './SampleText'


const Test = (props) => {
  const Model = () => {
    const gltf = useLoader(GLTFLoader, "./didusample.glb")
    
};

    function Box(props) {
        // This reference will give us direct access to the mesh
        const mesh = useRef()
        // Set up state for the hovered and active state
        const [hovered, setHover] = useState(false)
        const [active, setActive] = useState(false)
        // Subscribe this component to the render-loop, rotate the mesh every frame
        useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
        // Return view, these are regular three.js elements expressed in JSX
        return (
          <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
          </mesh>
        )
      }
      
  return (
    <Canvas className=''>
        <OrbitControls />
      <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
         
        <Didusample />
        </Suspense>
        
    </Canvas>
  )
}

export default Test