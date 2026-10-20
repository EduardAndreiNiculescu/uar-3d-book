import { Environment, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = () => {
  return (
    <>
      {/* fără podea/fundal 3D — cartea "plutește" direct peste fundalul propriu
          al paginii; pozată static, ușor înclinată, fără plutire automată (Float) */}
      <group rotation-x={-0.2} position-y={-0.1} scale={1.55}>
        <Book />
      </group>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.8}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        target={[0, 0, 0]}
      />
      <Environment preset="studio" environmentIntensity={0.35} />

      {/* lumină cheie caldă, dinspre stânga-sus — sursa principală de umbre */}
      <directionalLight
        position={[-2.4, 4, 2]}
        intensity={2.5}
        color="#fff2df"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      {/* lumină de contur (rim light) rece, din spate — decupează cartea de fundal */}
      <spotLight
        position={[1.6, 2.2, -2.6]}
        angle={0.5}
        penumbra={0.6}
        intensity={1.2}
        color="#cfe0ff"
      />
      {/* mic reflex cald pe cotor/copertă, pentru "shine"-ul cinematic cerut */}
      <pointLight position={[0.3, 0.6, 1.6]} intensity={0.5} color="#ffe9c7" distance={4} decay={2} />
    </>
  );
};
