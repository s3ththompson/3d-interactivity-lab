import ReactDOM from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Box(props) {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
