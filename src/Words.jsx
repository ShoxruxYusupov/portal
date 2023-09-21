import { Text3D } from "@react-three/drei";

export default function Words() {
  return (
    <Text3D
      font={"/fonts/Roboto_Regular.json"}
      size={0.575}
      height={0.065}
      curveSegments={12}
      position={[2.75, 5.4, 0.75]}
      rotation={[-0.1, -0.4, -0.15]}
    >
      Wantxo
      <meshStandardMaterial color={[1, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
    </Text3D>
  );
}
