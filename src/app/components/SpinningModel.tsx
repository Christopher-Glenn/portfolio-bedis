'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group, WebGLRenderer } from 'three';
import { KTX2Loader, type GLTFLoader } from 'three-stdlib';

const MODEL_PATH = '/3d/optimized-model_compressed.glb';
const MOBILE_POSITION: [number, number, number] = [0, -2, 0.4];
const DESKTOP_POSITION: [number, number, number] = [0, -2.2, 0.3];

let ktx2Loader: KTX2Loader | null = null;

function setKTX2Support(loader: GLTFLoader, gl: WebGLRenderer) {
  if (!ktx2Loader) {
    ktx2Loader = new KTX2Loader()
      .setTranscoderPath('/basis/')
      .detectSupport(gl);
  }
  loader.setKTX2Loader(ktx2Loader);
}

const SpinningModel = ({ active }: { active: boolean }) => {
  const modelRef = useRef<Group>(null);
  const gl = useThree((state) => state.gl);
  const extendLoader = useMemo(
    () => (loader: GLTFLoader) => setKTX2Support(loader, gl),
    [gl]
  );
  const gltf = useGLTF(MODEL_PATH, true, true, extendLoader);
  const position =
    typeof window !== 'undefined' && window.innerWidth < 640
      ? MOBILE_POSITION
      : DESKTOP_POSITION;

  useFrame(() => {
    if (active && modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={5}
      position={position}
    />
  );
};

export default SpinningModel;
