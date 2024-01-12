import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";
import { Avatar2 } from "./Avatar2";

export const Experience = () => {
  return (
<group position={[0, -1, 0]}>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        {/* <Avatar  /> */}
        <Avatar2 />
        <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}
        
        >
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </group>
  );
};
