import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
  useTexture,
} from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";
import { useThree } from "@react-three/fiber";

export const Experience2 = () => {
  const { color } = useControls({
    color: "#ffffff",
  });
  const texture = useTexture("/textures/room.jpg");
  const viewport = useThree((state) => state.viewport);
  const aspect = viewport.width / viewport.height;
  return (
    <>
      <OrbitControls />
      {/* <Sky /> */}
      <Environment preset="sunset" />
     
        <Avatar 
        position={[1.45, -1, 2]}
        scale={1.35}
        />
        <mesh>
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshStandardMaterial
            map={texture}
            color={color}
            roughness={0.5}
            metalness={0.5}
          />

        </mesh>
       
    </>
  );
};
