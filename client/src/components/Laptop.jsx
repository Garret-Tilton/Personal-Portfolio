import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function LaptopModel(props) {
  const { scene } = useGLTF("/models/mac-terminal.glb");
  return <primitive object={scene} scale={10} {...props} />; // scale up!
}

export default function Laptop() {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <LaptopModel />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
