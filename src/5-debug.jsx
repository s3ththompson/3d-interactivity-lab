import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Scene() {
  const gltf = useGLTF("/model.gtf");

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}

function App() {
  return (
    <Canvas camera={{ fov: 75, position: [0, 1, 0] }}>
      <Scene />
    </Canvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
