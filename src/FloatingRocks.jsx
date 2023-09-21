import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function FloatingRocks() {
  const rocks1 = useLoader(GLTFLoader, "/models/floating_rock_1.glb");
  const rocks2 = useLoader(GLTFLoader, "/models/floating_rock_2.glb");
  const rocks3 = useLoader(GLTFLoader, "/models/floating_rock_3.glb");

  return (
    <>
      <Float
        speed={1.5}
        rotationIntensity={1.6}
        floatIntensity={0}
        position={[-20.5, -7, -19]}
      >
        <primitive object={rocks1.scene} />
      </Float>
      <Float
        speed={1.5}
        rotationIntensity={1.6}
        floatIntensity={0}
        position={[-5, 10, -33]}
      >
        <primitive object={rocks2.scene} />
      </Float>
      <Float
        speed={1.5}
        rotationIntensity={1.6}
        floatIntensity={0}
        position={[20, 3.5, -9]}
      >
        <primitive object={rocks3.scene} />
      </Float>
    </>
  );
}
