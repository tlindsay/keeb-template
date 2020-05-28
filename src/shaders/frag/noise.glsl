#pragma glslify: noise = require('glsl-noise/simplex/3d');
#pragma glslify: hsl2rgb = require('glsl-hsl2rgb');

uniform float bend;
varying vec2 vUv;

void main () {
  float n = noise(vec3(vUv.x, vUv.y, bend));
  vec3 color = hsl2rgb(n, 0.5, 0.5);

  gl_FragColor = vec4(color, 1.0);
}
