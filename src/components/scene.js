// src/components/Scene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MyModel from './model';

const Scene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[100, 100, 100]} />
      <MyModel modelPath="/morty_-_ready_for_ue4_rigged.glb" />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
