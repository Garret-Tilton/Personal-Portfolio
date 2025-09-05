// Coin.jsx
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";

function CoinMesh({ texturePath }) {
  const texture = useLoader(TextureLoader, texturePath);
  const meshRef = useRef();

  // Idle spin
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 0.1, 64]} />
      {/* Side */}
      <meshStandardMaterial
        attach="material-0"
        color="#209CEE"
        emissive="#209CEE"
        emissiveIntensity={0.1}
        metalness={0.2}
        roughness={0.2}
      />
      {/* Top */}
      <meshStandardMaterial attach="material-1" map={texture} />
      {/* Bottom */}
      <meshStandardMaterial attach="material-2" map={texture} />
    </mesh>
  );
}

export default function Coin({ texturePath, size = 250 }) {
  return (
    <div style={{ width: size, height: size }}>
      <Canvas camera={{ position: [3, 0, 3] }}>
        <ambientLight intensity />
        <pointLight position={[5, 5, 5]} intensity={1.2} />
        <CoinMesh texturePath={texturePath} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
