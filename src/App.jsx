import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Experience2 } from "./components/Experience2";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience2 />
    </Canvas>
  
  );
}

export default App;
