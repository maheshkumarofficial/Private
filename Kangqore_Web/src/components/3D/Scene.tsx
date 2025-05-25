import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { FloatingCube } from './FloatingCube';
import { NeuralNetwork } from './NeuralNetwork';

export const Scene = () => {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls enableZoom={false} enablePan={false} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Suspense fallback={null}>
        <FloatingCube />
        <NeuralNetwork />
      </Suspense>
    </Canvas>
  );
};