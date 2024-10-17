// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const CanvasScene = () => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     // Set up the scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.position.z = 5;

//     // Create a plane geometry for wave motion
//     const geometry = new THREE.PlaneGeometry(20, 30, 40, 80); // 40x40 segments for smooth waves
//     const material = new THREE.MeshBasicMaterial({ color: 0xFFD700, wireframe: true }); // Initial color (Golden)
//     const plane = new THREE.Mesh(geometry, material);
//     scene.add(plane);

//     // Store original vertex positions for wave animation
//     const { array: originalVertices } = geometry.attributes.position;
//     const vertexCount = originalVertices.length / 3;
//     const waveVertices = originalVertices.slice();

//     const clock = new THREE.Clock();

//     const animate = function () {
//       requestAnimationFrame(animate);

//       const time = clock.getElapsedTime();

//       // Toggle between two colors every second
//       if (Math.floor(time) % 2 === 0) {
//         material.color.set(0xFFD700); // Color 1: Golden
//       } else {
//         material.color.set(0xC0C0C0); // Color 2: DodgerBlue
//       }

//       // Create wave effect by adjusting z position of vertices
//       for (let i = 0; i < vertexCount; i++) {
//         const x = waveVertices[i * 3];
//         const y = waveVertices[i * 3 + 1];

//         const waveX1 = 0.5 * Math.sin(x * 2 + time);
//         const waveX2 = 0.25 * Math.sin(x * 3 + time * 2);
//         const waveY1 = 0.5 * Math.sin(y * 4 + time);

//         geometry.attributes.position.array[i * 3 + 2] = waveX1 + waveX2 + waveY1; // z position
//       }

//       geometry.attributes.position.needsUpdate = true;

//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute bg-transparent z-3 opacity-30" />;
// };

// export default CanvasScene;



import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CanvasScene = () => {
  const canvasRef = useRef();

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    // Create a plane geometry for wave motion
    const geometry = new THREE.PlaneGeometry(20, 20, 40, 80); // 40x40 segments for smooth waves
    const material = new THREE.MeshBasicMaterial({ color: 0xFFD700, wireframe: true }); // Initial color (Golden)
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Store original vertex positions for wave animation
    const { array: originalVertices } = geometry.attributes.position;
    const vertexCount = originalVertices.length / 3;
    const waveVertices = originalVertices.slice();

    // Spark particles setup
    const sparkCount = 1000; // Number of sparks
    const sparkGeometry = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3); // Each spark has 3 values (x, y, z)

    for (let i = 0; i < sparkCount; i++) {
      sparkPositions[i * 3] = (Math.random() - 0.5) * 20; // x
      sparkPositions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    }

    sparkGeometry.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
    const sparkMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.1 }); // White sparks
    const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
    scene.add(sparks);

    const clock = new THREE.Clock();

    const animate = function () {
      requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Toggle between two colors every second
      if (Math.floor(time) % 2 === 0) {
        material.color.set(0xFFD700); // Color 1: Golden
      } else {
        material.color.set(0xC0C0C0); // Color 2: Silver
      }

      // Create wave effect by adjusting z position of vertices
      for (let i = 0; i < vertexCount; i++) {
        const x = waveVertices[i * 3];
        const y = waveVertices[i * 3 + 1];

        const waveX1 = 0.5 * Math.sin(x * 2 + time);
        const waveX2 = 0.25 * Math.sin(x * 3 + time * 2);
        const waveY1 = 0.5 * Math.sin(y * 4 + time);

        geometry.attributes.position.array[i * 3 + 2] = waveX1 + waveX2 + waveY1; // z position
      }

      geometry.attributes.position.needsUpdate = true;

      // Animate sparks: make them flicker or move slightly
      const sparkPositions = sparkGeometry.attributes.position.array;
      for (let i = 0; i < sparkCount; i++) {
        // Make sparks move up and reset after they go too far up
        sparkPositions[i * 3 + 1] += 0.02 * Math.sin(time * 5 + i); // slight vertical motion
        if (sparkPositions[i * 3 + 1] > 10) {
          sparkPositions[i * 3 + 1] = -10; // Reset if spark goes too high
        }
      }

      sparkGeometry.attributes.position.needsUpdate = true; // Inform Three.js to update sparks

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute bg-transparent z-3 opacity-15" />;
};

export default CanvasScene;
