import React,{Suspense,useEffect,useState} from 'react'

import {Canvas } from '@react-three/fiber'

import {meshBounds, OrbitControls,Preload,useGLTF} from '@react-three/drei'

import CanvasLoader from '../Loader'





const Computers = () => {
  const computers = useGLTF('./desktop_pc/scene.GLTF')
  return (
   <mesh>
    <hemisphereLight intensity={0.15} groundColor='black' />

    <pointLight intensity={1} />
    <primitive
    object={computers.scene}
    />

   </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
    dpr={[1,2]}
    camera={{position:[0,0,5],fov:70}}
    onCreated={({gl}) => {
      gl.toneMapping = 1
      gl.outputEncoding = 1
    }}
    >
    <Suspense fallback={<CanvasLoader/>}>
    <Computers/>
    </Suspense>
    <OrbitControls/>
    </Canvas>
  )
}

export default Computers