import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeHeroOrb = ({ size = 260 }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        camera.position.z = 6;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
        renderer.setSize(size, size);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        mount.appendChild(renderer.domElement);

        // Core 3D Wireframe Icosahedron
        const coreGeo = new THREE.IcosahedronGeometry(2.1, 1);
        const coreMat = new THREE.MeshBasicMaterial({
            color: 0x6366f1,
            wireframe: true,
            transparent: true,
            opacity: 0.65,
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        scene.add(core);

        // Inner glowing sphere
        const innerGeo = new THREE.SphereGeometry(1.2, 16, 16);
        const innerMat = new THREE.MeshBasicMaterial({
            color: 0x38bdf8,
            wireframe: true,
            transparent: true,
            opacity: 0.35,
        });
        const inner = new THREE.Mesh(innerGeo, innerMat);
        scene.add(inner);

        // Surrounding orbital rings
        const ringGeo = new THREE.TorusGeometry(3.0, 0.04, 16, 100);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0xa855f7,
            transparent: true,
            opacity: 0.7,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 3;
        scene.add(ring);

        const ringGeo2 = new THREE.TorusGeometry(3.2, 0.03, 16, 100);
        const ringMat2 = new THREE.MeshBasicMaterial({
            color: 0x38bdf8,
            transparent: true,
            opacity: 0.5,
        });
        const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
        ring2.rotation.y = Math.PI / 4;
        scene.add(ring2);

        // Floating orbiting node particles
        const nodesCount = 24;
        const nodeGeo = new THREE.SphereGeometry(0.08, 8, 8);
        const nodeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
        const nodesGroup = new THREE.Group();

        for (let i = 0; i < nodesCount; i++) {
            const node = new THREE.Mesh(nodeGeo, nodeMat);
            const theta = (i / nodesCount) * Math.PI * 2;
            const rad = 2.6 + Math.sin(i) * 0.4;
            node.position.set(Math.cos(theta) * rad, Math.sin(i * 2) * 0.8, Math.sin(theta) * rad);
            nodesGroup.add(node);
        }
        scene.add(nodesGroup);

        let mouseX = 0;
        let mouseY = 0;
        let targetRotX = 0;
        let targetRotY = 0;

        const handlePointer = (e) => {
            const rect = mount.getBoundingClientRect();
            mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        };

        mount.addEventListener('pointermove', handlePointer, { passive: true });

        let frameId;
        const clock = new THREE.Clock();

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            const delta = clock.getElapsedTime();

            targetRotX += (mouseY * 0.8 - targetRotX) * 0.05;
            targetRotY += (mouseX * 0.8 - targetRotY) * 0.05;

            core.rotation.y = delta * 0.35 + targetRotY;
            core.rotation.x = delta * 0.2 + targetRotX;

            inner.rotation.y = -delta * 0.4;
            inner.rotation.z = delta * 0.25;

            ring.rotation.z = delta * 0.25;
            ring.rotation.x = Math.PI / 3 + targetRotX * 0.5;

            ring2.rotation.z = -delta * 0.3;
            ring2.rotation.y = Math.PI / 4 + targetRotY * 0.5;

            nodesGroup.rotation.y = delta * 0.2;
            nodesGroup.rotation.x = targetRotX * 0.3;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mount.removeEventListener('pointermove', handlePointer);
            cancelAnimationFrame(frameId);
            if (renderer.domElement && mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
            coreGeo.dispose();
            coreMat.dispose();
            innerGeo.dispose();
            innerMat.dispose();
            ringGeo.dispose();
            ringMat.dispose();
            ringGeo2.dispose();
            ringMat2.dispose();
            nodeGeo.dispose();
            nodeMat.dispose();
            renderer.dispose();
        };
    }, [size]);

    return (
        <div
            ref={mountRef}
            style={{
                width: size,
                height: size,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'grab',
                filter: 'drop-shadow(0 10px 25px rgba(99, 102, 241, 0.25))'
            }}
            title="Interactive 3D Core"
        />
    );
};

export default ThreeHeroOrb;
