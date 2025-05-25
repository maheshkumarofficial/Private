import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useSpring, animated } from '@react-spring/three';

export const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  const springs = useSpring({
    scale: [1, 1, 1],
    from: { scale: [0, 0, 0] },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <animated.mesh ref={meshRef} scale={springs.scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#F17D23"
        metalness={0.8}
        roughness={0.2}
      />
    </animated.mesh>
  );
};