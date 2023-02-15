import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, useGLTF } from "@react-three/drei";

function Scene() {
  const gltf = useGLTF("/model.gltf");

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}

function App() {
  return (
    <Canvas camera={{ fov: 50, position: [-2, 4, 6] }}>
      <Scene />
      <Environment preset="dawn" background="true" />
    </Canvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
