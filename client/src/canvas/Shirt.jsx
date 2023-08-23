import { easing } from "maath";
import { snapshot, useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

function Shirt() {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("./shirt_baked.glb");

  const LogoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  return (
    <group>
      <mesh castShadow geometry={nodes.T_Shirt_male.geometry} matrix={materials.lambert1} material-roughness={1} dispose={null}>
        {snap.isFullTexture && <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} map={fullTexture} />}
        {snap.isLogoTexture && <Decal position={[0, 0.04, 0.15]} rotation={[0, 0, 0]} scale={0.15} map={LogoTexture} map-anisotropy={16} depthTest={false} depthWrite={true} />}
      </mesh>
    </group>
  );
}

export default Shirt;
