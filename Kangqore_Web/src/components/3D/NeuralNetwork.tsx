import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const NeuralNetwork = () => {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 100; i++) {
      const x = THREE.MathUtils.randFloatSpread(5);
      const y = THREE.MathUtils.randFloatSpread(5);
      const z = THREE.MathUtils.randFloatSpread(5);
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, []);

  const lineRef = useRef<THREE.LineSegments>();

  useFrame((state) => {
    if (!lineRef.current) return;
    lineRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    lineRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
  });

  const geometry = useMemo(() => {
    const vertices = [];
    const colors = [];
    const color = new THREE.Color();

    for (let i = 0; i < points.length; i++) {
      const point = points[i];
      vertices.push(point.x, point.y, point.z);
      
      color.setHSL(i / points.length, 1.0, 0.5);
      colors.push(color.r, color.g, color.b);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    return geometry;
  }, [points]);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        size={0.1}
        vertexColors
        blending={THREE.AdditiveBlending}
        transparent
        opacity={0.8}
      />
    </points>
  );
};