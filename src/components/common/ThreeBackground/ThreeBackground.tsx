import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ThreeBackground.css';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    containerRef.current.appendChild(renderer.domElement);

    // Minimal refined constellation/particle cloud in Electric Blue
    const particlesCount = 380;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 14;
      posArray[i + 1] = (Math.random() - 0.5) * 10;
      posArray[i + 2] = (Math.random() - 0.5) * 6;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Electric Blue (#365CFF) with refined softness
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x365CFF,
      transparent: true,
      opacity: 0.35,
      blending: THREE.NormalBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Subtle refined architectural wireframes (Icosahedron & Torus)
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x365CFF,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });

    const geom1 = new THREE.IcosahedronGeometry(1.6, 1);
    const mesh1 = new THREE.Mesh(geom1, wireframeMaterial);
    mesh1.position.set(4, 1.5, -2);
    scene.add(mesh1);

    const geom2 = new THREE.TorusGeometry(1.2, 0.25, 12, 48);
    const mesh2 = new THREE.Mesh(geom2, wireframeMaterial);
    mesh2.position.set(-4.5, -2, -1);
    mesh2.rotation.x = Math.PI / 3;
    scene.add(mesh2);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Mouse parallax
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId: number;
    const clock = new THREE.Clock();
    const container = containerRef.current;

    const animate = () => {
      if (prefersReducedMotion) {
        renderer.render(scene, camera);
        return;
      }

      const elapsedTime = clock.getElapsedTime();

      // Subtle, slow orbital motion
      particlesMesh.rotation.y = elapsedTime * 0.02;
      particlesMesh.rotation.x = elapsedTime * 0.01;

      mesh1.rotation.x = elapsedTime * 0.04;
      mesh1.rotation.y = elapsedTime * 0.05;
      mesh1.position.y = 1.5 + Math.sin(elapsedTime * 0.4) * 0.2;

      mesh2.rotation.y = elapsedTime * 0.03;
      mesh2.rotation.z = elapsedTime * 0.02;
      mesh2.position.y = -2 + Math.cos(elapsedTime * 0.35) * 0.2;

      // Gentle mouse parallax easing
      camera.position.x += (mousePosition.current.x * 0.4 - camera.position.x) * 0.03;
      camera.position.y += (mousePosition.current.y * 0.4 - camera.position.y) * 0.03;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      geom1.dispose();
      geom2.dispose();
      wireframeMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="three-background" aria-hidden="true" />;
};

export default ThreeBackground;
