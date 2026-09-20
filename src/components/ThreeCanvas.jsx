import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCanvas = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 40;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: false,
            powerPreference: 'high-performance',
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        container.appendChild(renderer.domElement);

        // Ambient Particles
        const particleCount = window.innerWidth < 768 ? 450 : 850;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const scales = new Float32Array(particleCount);
        const colors = new Float32Array(particleCount * 3);

        const colorPalette = [
            new THREE.Color(0x84cc16), // Lime
            new THREE.Color(0xa3e635), // Bright Lime
            new THREE.Color(0x10b981), // Emerald
            new THREE.Color(0xbef264), // Chartreuse
        ];

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 120;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 90;

            scales[i] = Math.random() * 2.5 + 0.8;

            const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = col.r;
            colors[i * 3 + 1] = col.g;
            colors[i * 3 + 2] = col.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // Soft circle texture
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(0.35, 'rgba(255,255,255,0.7)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(16, 16, 16, 0, Math.PI * 2);
        ctx.fill();
        const particleTexture = new THREE.CanvasTexture(canvas);

        const material = new THREE.PointsMaterial({
            size: 2.2,
            map: particleTexture,
            transparent: true,
            opacity: 0.55,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const particleSystem = new THREE.Points(geometry, material);
        scene.add(particleSystem);

        // Floating geometric 3D wireframe rings
        const torusGeometry = new THREE.TorusGeometry(18, 0.4, 16, 80);
        const torusMaterial = new THREE.MeshBasicMaterial({
            color: 0x6366f1,
            wireframe: true,
            transparent: true,
            opacity: 0.09,
        });
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);
        torus.position.set(15, -5, -10);
        scene.add(torus);

        const icosaGeometry = new THREE.IcosahedronGeometry(12, 1);
        const icosaMaterial = new THREE.MeshBasicMaterial({
            color: 0x38bdf8,
            wireframe: true,
            transparent: true,
            opacity: 0.08,
        });
        const icosa = new THREE.Mesh(icosaGeometry, icosaMaterial);
        icosa.position.set(-20, 10, -15);
        scene.add(icosa);

        // Mouse Parallax Interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const onPointerMove = (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        };

        window.addEventListener('pointermove', onPointerMove, { passive: true });

        // Responsive resize
        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onResize);

        // Animation Loop
        let animationFrameId;
        let clock = new THREE.Clock();

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            // Smooth mouse interpolation
            targetX += (mouseX * 5 - targetX) * 0.03;
            targetY += (-mouseY * 5 - targetY) * 0.03;

            particleSystem.rotation.y = elapsedTime * 0.02 + targetX * 0.1;
            particleSystem.rotation.x = elapsedTime * 0.015 + targetY * 0.1;

            torus.rotation.x = elapsedTime * 0.08;
            torus.rotation.y = elapsedTime * 0.1;
            torus.position.x = 15 + targetX * 0.5;

            icosa.rotation.x = -elapsedTime * 0.06;
            icosa.rotation.z = elapsedTime * 0.07;
            icosa.position.y = 10 + targetY * 0.5;

            camera.position.x += (targetX - camera.position.x) * 0.03;
            camera.position.y += (targetY - camera.position.y) * 0.03;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };

        animate();

        // Pause rendering while the tab is hidden
        const onVisibility = () => {
            if (document.hidden) cancelAnimationFrame(animationFrameId);
            else animate();
        };
        document.addEventListener('visibilitychange', onVisibility);

        return () => {
            document.removeEventListener('visibilitychange', onVisibility);
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('resize', onResize);
            cancelAnimationFrame(animationFrameId);
            if (renderer.domElement && container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            torusGeometry.dispose();
            torusMaterial.dispose();
            icosaGeometry.dispose();
            icosaMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: -1,
                pointerEvents: 'none',
                overflow: 'hidden',
            }}
            aria-hidden="true"
        />
    );
};

export default ThreeCanvas;
