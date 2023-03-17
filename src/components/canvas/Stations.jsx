import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Stations = ({ isMobile }) => {
  const station = useGLTF("./workspace/workspace.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <pointLight intensity={0.45} />
      <pointLight intensity={0.45} position={[0, 20, 0]} />
      <pointLight intensity={0.45} position={[20, 0, 0]} />
      <pointLight intensity={0.45} position={[-20, -20, -20]} />
      <spotLight
        position={[-35, 50, 40]}
        angle={0.4}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={station.scene}
        scale={isMobile ? 0.9 : 1.5}
        position={isMobile ? [0, -1.8, -1.7] : [0, -2.8, -0.1]}
        rotation={[0.1, 0, 0]}
      />
    </mesh>
  );
};

const StationsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [0, 25, 1], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stations isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default StationsCanvas;
