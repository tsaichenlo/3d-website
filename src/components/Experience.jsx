import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"],
    },
  });

  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <Avatar animation={animation} />
      </group>
      <ambientLight intensity={2}></ambientLight>
    </>
  );
};
