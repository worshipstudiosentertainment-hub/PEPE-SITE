import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    // Add subtle fog to fade neurons in the distance
    scene.fog = new THREE.FogExp2(0x000000, 0.002);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // NEURAL NETWORK CONFIG
    const particleCount = window.innerWidth < 768 ? 60 : 130; // Fewer neurons on mobile
    const connectionDistance = 2.5;
    const particlesData: { velocity: THREE.Vector3, numConnections: number }[] = [];
    
    // Geometry for Neurons (Particles)
    const pGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    // Initial positioning
    for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * 30 - 15;
        const y = Math.random() * 30 - 15;
        const z = Math.random() * 20 - 10;

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        particlesData.push({
            velocity: new THREE.Vector3(
                (Math.random() - 0.5) * 0.02, // Slow drift
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02
            ),
            numConnections: 0
        });
    }

    pGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3).setUsage(THREE.DynamicDrawUsage));

    // Material for Neurons (Glowing dots)
    const pMaterial = new THREE.PointsMaterial({
        color: 0x00FF9D, // Brand Neon
        size: 0.15,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(pGeometry, pMaterial);
    scene.add(particles);

    // Geometry for Synapses (Lines)
    const geometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 3);
    geometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));

    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00FF9D,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
    });

    const lines = new THREE.LineSegments(geometry, lineMaterial);
    scene.add(lines);

    camera.position.z = 10;

    // Interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
        // Subtle camera movement based on mouse
        mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
        mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    };
    
    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
        // Move Particles
        let vertexpos = 0;
        let colorpos = 0;
        let numConnected = 0;

        // Reset connections count
        for (let i = 0; i < particleCount; i++) particlesData[i].numConnections = 0;

        for (let i = 0; i < particleCount; i++) {
            const particleData = particlesData[i];

            // Update position
            particlePositions[i * 3] += particleData.velocity.x;
            particlePositions[i * 3 + 1] += particleData.velocity.y;
            particlePositions[i * 3 + 2] += particleData.velocity.z;

            // Bounce off boundaries (Cube -15 to 15)
            if (particlePositions[i * 3] < -15 || particlePositions[i * 3] > 15) particleData.velocity.x = -particleData.velocity.x;
            if (particlePositions[i * 3 + 1] < -15 || particlePositions[i * 3 + 1] > 15) particleData.velocity.y = -particleData.velocity.y;
            if (particlePositions[i * 3 + 2] < -10 || particlePositions[i * 3 + 2] > 10) particleData.velocity.z = -particleData.velocity.z;

            // Check connections O(N^2) - Optimized by limiting loops if needed, but 100 particles is fine
            for (let j = i + 1; j < particleCount; j++) {
                const dx = particlePositions[i * 3] - particlePositions[j * 3];
                const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
                const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < connectionDistance) {
                    particleData.numConnections++;
                    particlesData[j].numConnections++;

                    // Add line vertices
                    const alpha = 1.0 - dist / connectionDistance;

                    linePositions[vertexpos++] = particlePositions[i * 3];
                    linePositions[vertexpos++] = particlePositions[i * 3 + 1];
                    linePositions[vertexpos++] = particlePositions[i * 3 + 2];

                    linePositions[vertexpos++] = particlePositions[j * 3];
                    linePositions[vertexpos++] = particlePositions[j * 3 + 1];
                    linePositions[vertexpos++] = particlePositions[j * 3 + 2];

                    numConnected++;
                }
            }
        }

        // Update Geometries
        lines.geometry.setDrawRange(0, numConnected * 2);
        lines.geometry.attributes.position.needsUpdate = true;
        particles.geometry.attributes.position.needsUpdate = true;

        // Gentle Camera Rotation
        scene.rotation.y += 0.001;
        scene.rotation.x += (mouseY - scene.rotation.x) * 0.05;
        scene.rotation.y += (mouseX - scene.rotation.y) * 0.05;

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      pGeometry.dispose();
      geometry.dispose();
      pMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full -z-50 opacity-100 pointer-events-none mix-blend-screen"
    />
  );
};

export default Background3D;