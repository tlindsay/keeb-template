import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { OrbitControls } from 'drei';
import { useMidiInputs, usePitchbend } from 'react-riffs';

import fragmentShader from '~/src/shaders/frag/noise.glsl';
import vertexShader from '~/src/shaders/vert/standard.glsl';

function Scratch(props) {
  let [midiInput] = useMidiInputs();
  let bend = usePitchbend(midiInput);

  let box = useRef();
  let shader = {
    uniforms: {
      bend: {
        type: 'f',
        value: 0.0
      }
    },
    fragmentShader,
    vertexShader
  };

  useFrame(() => {
    box.current.rotation.y = box.current.rotation.x += 0.01;
  });

  return (
    <>
      <gridHelper />
      <color attach="background" args={['lightblue']} />
      <OrbitControls />

      <mesh {...props} ref={box}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <shaderMaterial
          attach="material"
          args={[shader]}
          uniforms-bend-value={bend}
        />
      </mesh>
    </>
  );
}

export default Scratch;
export const isDefaultScene = true;
