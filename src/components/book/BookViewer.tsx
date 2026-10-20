import { Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { ACESFilmicToneMapping } from 'three';
import { Experience } from './Experience';
import { UI } from './UI';
import styles from './book.module.css';

export function BookViewer() {
  const [cameraZ, setCameraZ] = useState(3.0);

  useEffect(() => {
    const update = () => setCameraZ(window.innerWidth > 800 ? 3.0 : 4.6);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.canvasBox}>
        <Canvas
          shadows
          camera={{ position: [-0.15, 0.45, cameraZ], fov: 45 }}
          gl={{ alpha: true, toneMapping: ACESFilmicToneMapping, toneMappingExposure: 1.05 }}
        >
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </Canvas>
        <Loader />
      </div>
      <UI />
    </div>
  );
}
