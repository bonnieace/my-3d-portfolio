// src/components/MyModel.js
import React from 'react';
import { useGLTF } from '@react-three/drei';

const MyModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
};

export default MyModel;
