const fs = require('fs-extra');

const basePath = '/portfolio';

// Copy draco decoder from three.js into the public directory with the correct path
fs.copy(
  'node_modules/three/examples/js/libs/draco/gltf/',
  `public${basePath}/draco`,
  err => {
    if (err) return console.error(err);
  }
);
