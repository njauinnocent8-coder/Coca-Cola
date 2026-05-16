import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, Float, PresentationControls, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function BottleModel({ color = "#E31937" }: { color?: string }) {
  // Creating a simple bottle using Three primitives since we don't have a GLTF model asset
  return (
    <group>
      {/* Bottle Body */}
      <mesh position={[0, -0.5, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.7, 2, 32]} />
        <meshPhysicalMaterial 
          color={color} 
          transmission={0.8} 
          thickness={0.5} 
          roughness={0.1} 
          metalness={0.1}
          clearcoat={1}
        />
      </mesh>
      {/* Bottle Neck */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.5, 0.8, 32]} />
        <meshPhysicalMaterial 
          color={color} 
          transmission={0.8} 
          thickness={0.5} 
          roughness={0.1}
        />
      </mesh>
      {/* Cap */}
      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.1, 32]} />
        <meshStandardMaterial color="#E31937" roughness={0.3} metalness={0.8} />
      </mesh>
      {/* Label */}
      <mesh position={[0, -0.5, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.71, 0.71, 0.8, 32, 1, true]} />
        <meshBasicMaterial color="white" side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default function CokeBottle({ color }: { color?: string }) {
  return (
    <div className="w-full h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <PresentationControls
            global
            snap
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
          >
            <Float rotationIntensity={0.5} floatIntensity={0.5} speed={2}>
               <BottleModel color={color} />
            </Float>
          </PresentationControls>
          
          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
