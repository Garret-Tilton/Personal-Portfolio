import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";

function Laptop() {
  const { nodes, scene } = useGLTF("/models/mac-terminal.glb");
  console.log(nodes);

  return (
    <primitive object={scene} scale={12} />
  );
}


export default function MacTerminal() {
  return (
    <div style={{ width: "500px", height: "400px" }}>
      <Canvas camera={{ position: [2, 2, 3] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 5, 2]} />
        <Suspense fallback={null}>
          <Laptop />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
