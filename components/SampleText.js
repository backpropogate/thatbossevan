/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/sampleText.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    console.log(actions);
    actions.text.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Text001"
        geometry={nodes.Text001.geometry}
        material={nodes.Text001.material}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1}
      />
    </group>
  )
}

useGLTF.preload('/sampleText.glb')
