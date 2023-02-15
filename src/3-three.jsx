import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";

function App() {
  return <Canvas></Canvas>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
