import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { FadeIn } from '@/components/ui/FadeIn';

const GlassCubeSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setClearColor(0x000000);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Background headline canvas
    const bgCanvas = document.createElement('canvas');
    const bgCtx = bgCanvas.getContext('2d')!;
    let bgTexture: THREE.CanvasTexture;

    const drawHeadline = () => {
      const width = container.clientWidth * renderer.getPixelRatio();
      const height = container.clientHeight * renderer.getPixelRatio();
      bgCanvas.width = width;
      bgCanvas.height = height;

      bgCtx.fillStyle = '#000';
      bgCtx.fillRect(0, 0, width, height);

      const isMobile = width < 768 || width / height < 1;
      let fontSize = Math.min(height * 0.21, width * (isMobile ? 0.21 : 0.118));
      bgCtx.font = `800 ${fontSize}px Poppins, sans-serif`;

      const lines = ['Energia', 'Sem', 'Limites'];
      const maxWidth = width * (isMobile ? 0.9 : 0.5);

      // Scale down if needed
      const widestLine = Math.max(...lines.map(line => bgCtx.measureText(line).width));
      if (widestLine > maxWidth) {
        fontSize *= maxWidth / widestLine;
        bgCtx.font = `800 ${fontSize}px Poppins, sans-serif`;
      }

      bgCtx.fillStyle = '#e9e9e9';
      bgCtx.textAlign = 'center';
      bgCtx.textBaseline = 'alphabetic';

      const centerX = width * (isMobile ? 0.5 : 0.505);
      const centerY = height * (isMobile ? 0.45 : 0.468);
      const lineGap = fontSize * 1.07;
      const capHeight = fontSize * 0.7;

      lines.forEach((line, i) => {
        const y = centerY + capHeight / 2 + (i - 1) * lineGap;
        bgCtx.fillText(line, centerX, y);
      });

      if (bgTexture) {
        bgTexture.needsUpdate = true;
      }
    };

    // Create background texture
    drawHeadline();
    bgTexture = new THREE.CanvasTexture(bgCanvas);
    bgTexture.colorSpace = THREE.SRGBColorSpace;
    bgTexture.minFilter = THREE.LinearFilter;
    bgTexture.magFilter = THREE.LinearFilter;
    bgTexture.generateMipmaps = false;

    // Background quad
    const bgScene = new THREE.Scene();
    const bgMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTex: { value: bgTexture },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTex;
        varying vec2 vUv;
        void main() {
          gl_FragColor = texture2D(uTex, vUv);
          #include <colorspace_fragment>
        }
      `,
      depthTest: false,
      depthWrite: false,
    });
    const bgQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bgMaterial);
    bgQuad.frustumCulled = false;
    bgScene.add(bgQuad);

    // Glass cube
    const cubeGeometry = new RoundedBoxGeometry(1, 1, 1, 8, 0.12);
    cubeGeometry.center();

    // Glass shader
    const createGlassMaterial = (isBackside: boolean) => {
      return new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: null },
          uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
          uRefractPower: { value: isBackside ? 0.22 : 0.30 },
          uChromatic: { value: 0.5 },
          uSaturation: { value: 1.08 },
          uShininess: { value: 90.0 },
          uDiffuseness: { value: 0.02 },
          uFresnelPower: { value: 5.0 },
          uLight: { value: new THREE.Vector3(-1, 1, 1) },
          uBackside: { value: isBackside ? 1.0 : 0.0 },
          uIorR: { value: 1.15 },
          uIorY: { value: 1.16 },
          uIorG: { value: 1.18 },
          uIorC: { value: 1.22 },
          uIorB: { value: 1.22 },
          uIorP: { value: 1.22 },
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vEye;
          void main() {
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vec4 mvPos = viewMatrix * worldPos;
            gl_Position = projectionMatrix * mvPos;
            vNormal = normalize(normalMatrix * normal);
            vEye = normalize(mvPos.xyz);
          }
        `,
        fragmentShader: `
          uniform sampler2D uTexture;
          uniform vec2 uResolution;
          uniform float uRefractPower;
          uniform float uChromatic;
          uniform float uSaturation;
          uniform float uShininess;
          uniform float uDiffuseness;
          uniform float uFresnelPower;
          uniform vec3 uLight;
          uniform float uBackside;
          uniform float uIorR;
          uniform float uIorY;
          uniform float uIorG;
          uniform float uIorC;
          uniform float uIorB;
          uniform float uIorP;
          varying vec3 vNormal;
          varying vec3 vEye;

          float specular(vec3 lightVec, float shininess, float diffuseness) {
            vec3 halfVec = normalize(lightVec - vEye);
            float spec = pow(max(dot(vNormal, halfVec), 0.0), shininess);
            spec += max(0.0, dot(vNormal, lightVec)) * diffuseness;
            return spec;
          }

          void main() {
            vec2 uv = gl_FragCoord.xy / uResolution;
            vec3 n = normalize(vNormal);
            if (uBackside > 0.5) n = -n;
            vec3 eye = normalize(vEye);

            const int LOOP = 16;
            vec3 color = vec3(0.0);

            for (int i = 0; i < LOOP; i++) {
              float slide = float(i) / float(LOOP) * 0.045;

              vec3 refractR = refract(eye, n, 1.0 / uIorR);
              vec3 refractY = refract(eye, n, 1.0 / uIorY);
              vec3 refractG = refract(eye, n, 1.0 / uIorG);
              vec3 refractC = refract(eye, n, 1.0 / uIorC);
              vec3 refractB = refract(eye, n, 1.0 / uIorB);
              vec3 refractP = refract(eye, n, 1.0 / uIorP);

              vec2 uvR = uv + refractR.xy * (uRefractPower + slide * 1.0) * uChromatic;
              vec2 uvY = uv + refractY.xy * (uRefractPower + slide * 1.0) * uChromatic;
              vec2 uvG = uv + refractG.xy * (uRefractPower + slide * 2.0) * uChromatic;
              vec2 uvC = uv + refractC.xy * (uRefractPower + slide * 2.5) * uChromatic;
              vec2 uvB = uv + refractB.xy * (uRefractPower + slide * 3.0) * uChromatic;
              vec2 uvP = uv + refractP.xy * (uRefractPower + slide * 1.0) * uChromatic;

              vec4 texR = texture2D(uTexture, uvR);
              vec4 texY = texture2D(uTexture, uvY);
              vec4 texG = texture2D(uTexture, uvG);
              vec4 texC = texture2D(uTexture, uvC);
              vec4 texB = texture2D(uTexture, uvB);
              vec4 texP = texture2D(uTexture, uvP);

              float r = texR.x * 0.5;
              float y = (texY.x * 2.0 + texY.y * 2.0 - texY.z) / 6.0;
              float g = texG.y * 0.5;
              float c = (texC.y * 2.0 + texC.z * 2.0 - texC.x) / 6.0;
              float b = texB.z * 0.5;
              float p = (texP.z * 2.0 + texP.x * 2.0 - texP.y) / 6.0;

              float R = r + (2.0 * p + 2.0 * y - c) / 3.0;
              float G = g + (2.0 * y + 2.0 * c - p) / 3.0;
              float B = b + (2.0 * c + 2.0 * p - y) / 3.0;

              color += vec3(R, G, B);
            }

            color /= float(LOOP);

            // Saturation
            float luma = dot(color, vec3(0.2125, 0.7154, 0.0721));
            color = mix(vec3(luma), color, uSaturation);

            // Specular
            vec3 lightVec = normalize(uLight);
            float spec = specular(lightVec, uShininess, uDiffuseness);
            spec += 0.6 * specular(vec3(1.0, 1.0, -1.0), uShininess * 0.6, uDiffuseness * 0.5);
            color += spec * (uBackside > 0.5 ? 0.35 : 1.0);

            // Fresnel
            float f = pow(1.0 + dot(eye, n), uFresnelPower);
            color = mix(color, vec3(1.0), f * (uBackside > 0.5 ? 0.25 : 0.55));

            color += vec3(0.004, 0.005, 0.007);
            gl_FragColor = vec4(color, 1.0);
            #include <colorspace_fragment>
          }
        `,
        side: isBackside ? THREE.BackSide : THREE.FrontSide,
      });
    };

    const frontMat = createGlassMaterial(false);
    const backMat = createGlassMaterial(true);

    const cube = new THREE.Mesh(cubeGeometry, frontMat);
    const cubeBack = new THREE.Mesh(cubeGeometry, backMat);

    const pivot = new THREE.Group();
    const spinner = new THREE.Group();
    spinner.add(cube);
    spinner.add(cubeBack);
    pivot.add(spinner);
    scene.add(pivot);

    // Layout
    const layout = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const aspect = width / height;

      renderer.setSize(width, height);
      camera.aspect = aspect;
      camera.updateProjectionMatrix();

      const visH = 2 * Math.tan((camera.fov * Math.PI) / 360) * 10;
      const visW = visH * aspect;

      const isMobile = width < 768 || aspect < 1;
      const sx = isMobile ? 0.5 : 0.517;
      const sy = isMobile ? 0.45 : 0.488;

      pivot.position.set((sx - 0.5) * visW, (0.5 - sy) * visH, 0);

      const edgePx = Math.min(height * 0.44, width * (isMobile ? 0.45 : 0.29));
      const scale = (edgePx / height) * visH;
      pivot.scale.set(scale, scale, scale);

      spinner.rotation.set(-0.42, 0.62, 0.18);

      frontMat.uniforms.uResolution.value.set(width * renderer.getPixelRatio(), height * renderer.getPixelRatio());
      backMat.uniforms.uResolution.value.set(width * renderer.getPixelRatio(), height * renderer.getPixelRatio());

      drawHeadline();
    };

    layout();
    setIsLoaded(true);

    // Render targets
    const rtBack = new THREE.WebGLRenderTarget(
      container.clientWidth * renderer.getPixelRatio(),
      container.clientHeight * renderer.getPixelRatio(),
      { type: THREE.HalfFloatType }
    );
    const rtFront = new THREE.WebGLRenderTarget(
      container.clientWidth * renderer.getPixelRatio(),
      container.clientHeight * renderer.getPixelRatio(),
      { type: THREE.HalfFloatType }
    );

    // Interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };
    let lastInteractionTime = 0;

    canvas.addEventListener('pointerdown', (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      canvas.setPointerCapture(e.pointerId);
      canvas.classList.add('dragging');
    });

    canvas.addEventListener('pointermove', (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      velocity.x = deltaY * 0.008;
      velocity.y = deltaX * 0.008;

      const quaternionY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), velocity.y);
      const quaternionX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), velocity.x);

      spinner.quaternion.premultiply(quaternionY);
      spinner.quaternion.premultiply(quaternionX);

      previousMousePosition = { x: e.clientX, y: e.clientY };
      lastInteractionTime = performance.now();
    });

    canvas.addEventListener('pointerup', () => {
      isDragging = false;
      canvas.classList.remove('dragging');
      lastInteractionTime = performance.now();
    });

    // Animation loop
    let lastTime = performance.now();
    let idleBlend = 0;

    const animate = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!isDragging) {
        // Inertia
        if (Math.abs(velocity.x) > 0.0001 || Math.abs(velocity.y) > 0.0001) {
          const damping = Math.pow(0.94, dt * 60);
          velocity.x *= damping;
          velocity.y *= damping;

          const quaternionY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), velocity.y);
          const quaternionX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), velocity.x);

          spinner.quaternion.premultiply(quaternionY);
          spinner.quaternion.premultiply(quaternionX);
        }

        // Idle drift
        const timeSinceInteraction = (now - lastInteractionTime) / 1000;
        if (timeSinceInteraction > 0.6) {
          idleBlend = Math.min(1, idleBlend + dt);

          const idleRotY = 0.0035 * idleBlend;
          const idleRotX = 0.0012 * idleBlend;

          const quaternionY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), idleRotY);
          const quaternionX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), idleRotX);

          spinner.quaternion.premultiply(quaternionY);
          spinner.quaternion.premultiply(quaternionX);
        }
      }

      // Render
      backMat.uniforms.uTexture.value = rtBack.texture;
      frontMat.uniforms.uTexture.value = rtFront.texture;

      // Pass 1: Background to rtBack
      renderer.setRenderTarget(rtBack);
      renderer.render(bgScene, camera);

      // Pass 2: Background + back faces to rtFront
      renderer.setRenderTarget(rtFront);
      renderer.render(bgScene, camera);
      renderer.autoClear = false;
      renderer.render(scene, camera);
      renderer.autoClear = true;

      // Pass 3: Background + front faces to screen
      renderer.setRenderTarget(null);
      renderer.render(bgScene, camera);
      renderer.autoClear = false;
      renderer.clearDepth();
      renderer.render(scene, camera);
      renderer.autoClear = true;

      requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      layout();
      rtBack.setSize(container.clientWidth * renderer.getPixelRatio(), container.clientHeight * renderer.getPixelRatio());
      rtFront.setSize(container.clientWidth * renderer.getPixelRatio(), container.clientHeight * renderer.getPixelRatio());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      rtBack.dispose();
      rtFront.dispose();
      cubeGeometry.dispose();
      frontMat.dispose();
      backMat.dispose();
      bgTexture.dispose();
    };
  }, []);

  return (
    <section className="relative bg-bg px-5 sm:px-8 md:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden">
      <div ref={containerRef} className="relative max-w-7xl mx-auto h-[600px] sm:h-[700px] md:h-[800px]">
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          aria-label="Cubo de vidro 3D interativo. Arraste para rotacionar."
        />

        {/* UI Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-end p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <FadeIn delay={0.4}>
              <div className="max-w-md">
                <p className="text-ice/80 text-lg sm:text-xl leading-relaxed font-light">
                  Tecnologia de ponta que refrata possibilidades infinitas. Cada ângulo revela novas soluções para sua operação.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="text-right">
                <div className="hero-heading font-black text-6xl sm:text-8xl md:text-9xl leading-none">
                  360°
                </div>
                <p className="text-ice/60 text-sm uppercase tracking-wider mt-2">Visão Completa</p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Loader */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-bg z-20">
            <p className="text-ice/60 text-sm uppercase tracking-widest animate-pulse">
              Carregando experiência
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GlassCubeSection;
