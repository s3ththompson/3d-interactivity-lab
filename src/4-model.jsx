import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Suspense } from "react";

function Scene() {
  const obj = useLoader(OBJLoader, "/chair.obj");

  return (
    <Suspense fallback={null}>
      <primitive object={obj} />
    </Suspense>
  );
}

function App() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
