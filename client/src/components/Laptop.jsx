import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";

function LaptopModel(props) {
  const { scene } = useGLTF("/models/laptop.glb");
  const ref = useRef();

  // Spin the laptop continuously
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003; // adjust speed here
    }
  });

  return <primitive ref={ref} object={scene} scale={14} {...props} />;
}

export default function Laptop() {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <LaptopModel />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
