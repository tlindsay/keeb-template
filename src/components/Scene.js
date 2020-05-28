import React from 'react';
import { Route } from 'react-router-dom';
import { Canvas } from 'react-three-fiber';

export default function Scene({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={(props) =>
      <>
        <Canvas
          gl2={true}
          camera={{ position: [1, 1, 3] }}
        >
          <Component {...props}/>
        </Canvas>
      </>
    }/>
  );
}
