import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ThreeBackground.css';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Configuration de la scène
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Création des particules
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    // Matériau des particules
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#3b82f6',
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Création de formes géométriques flottantes
    const geometries = [
      new THREE.TorusGeometry(0.7, 0.2, 16, 100),
      new THREE.OctahedronGeometry(0.6),
      new THREE.IcosahedronGeometry(0.5),
    ];

    const material = new THREE.MeshStandardMaterial({
      color: '#3b82f6',
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    const meshes = geometries.map((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (index - 1) * 3;
      mesh.position.y = Math.random() * 2 - 1;
      scene.add(mesh);
      return mesh;
    });

    // Lumières
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x3b82f6, 1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Gestion du redimensionnement
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Gestion de la souris
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Animation des particules
      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x = elapsedTime * 0.03;

      // Animation des formes
      meshes.forEach((mesh, index) => {
        mesh.rotation.x = elapsedTime * 0.3 * (index + 1);
        mesh.rotation.y = elapsedTime * 0.2 * (index + 1);
        mesh.position.y = Math.sin(elapsedTime + index) * 0.5;
      });

      // Interaction avec la souris
      camera.position.x += (mousePosition.current.x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mousePosition.current.y * 0.5 - camera.position.y) * 0.05;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      geometries.forEach(g => g.dispose());
      material.dispose();
    };
  }, []);

  return <div ref={containerRef} className="three-background" />;
};

export default ThreeBackground;