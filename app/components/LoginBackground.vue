<template>
  <div class="fixed inset-0 overflow-hidden bg-[#06060f]" aria-hidden="true">

    <svg class="domain-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      
      <!-- Pixel grid overlay -->
      <defs>
        <pattern id="pixel-grid" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
          <rect width="2" height="2" fill="none"/>
          <rect width="1" height="1" fill="rgba(140,0,255,0.03)"/>
        </pattern>
        <pattern id="scanlines" x="0" y="0" width="1" height="0.8" patternUnits="userSpaceOnUse">
          <rect width="1" height="0.4" fill="rgba(0,0,0,0.15)"/>
        </pattern>
      </defs>

      <rect width="100" height="100" fill="url(#pixel-grid)"/>

      <!-- Pixel rings (square-ish stepped circles) -->
      <g class="domain-rings" transform="translate(50,50)">
        <!-- Pixelated squares instead of smooth circles -->
        <rect x="-9" y="-9" width="18" height="18" class="ring pixel-ring" style="--delay: 0s" fill="none"/>
        <rect x="-17" y="-17" width="34" height="34" class="ring pixel-ring" style="--delay: 1.5s" fill="none"/>
        <rect x="-26" y="-26" width="52" height="52" class="ring pixel-ring" style="--delay: 3s" fill="none"/>
        <rect x="-36" y="-36" width="72" height="72" class="ring pixel-ring" style="--delay: 4.5s" fill="none"/>
        <rect x="-47" y="-47" width="94" height="94" class="ring pixel-ring" style="--delay: 6s" fill="none"/>

        <!-- Cross/reticle lines -->
        <line x1="0" y1="-72" x2="0"  y2="72"  class="ray" style="--rdelay: 0s"/>
        <line x1="-72" y1="0" x2="72" y2="0"   class="ray" style="--rdelay: 1s"/>

        <!-- Corner pixel brackets -->
        <path d="M-6,-12 L-6,-6 L0,-6" class="bracket" style="--bdelay:0s"/>
        <path d="M6,-12  L6,-6  L0,-6" class="bracket" style="--bdelay:0.5s"/>
        <path d="M-6,12  L-6,6  L0,6"  class="bracket" style="--bdelay:1s"/>
        <path d="M6,12   L6,6   L0,6"  class="bracket" style="--bdelay:1.5s"/>
      </g>

      <!-- Pixel kanji -->
      <text x="13" y="75" class="seal-kanji" font-size="11" text-anchor="middle" transform="rotate(-12, 22, 95)">呪</text>

      <!-- Pixel corner decorations -->
      <g class="corner-deco top-left">
        <rect x="2" y="2" width="6" height="1" fill="rgba(200,50,100,0.4)"/>
        <rect x="2" y="2" width="1" height="6" fill="rgba(200,50,100,0.4)"/>
        <rect x="3" y="4" width="2" height="1" fill="rgba(200,50,100,0.2)"/>
      </g>
      <g class="corner-deco top-right">
        <rect x="92" y="2" width="6" height="1" fill="rgba(80,20,200,0.4)"/>
        <rect x="97" y="2" width="1" height="6" fill="rgba(80,20,200,0.4)"/>
        <rect x="95" y="4" width="2" height="1" fill="rgba(80,20,200,0.2)"/>
      </g>
      <g class="corner-deco bottom-left">
        <rect x="2" y="97" width="6" height="1" fill="rgba(200,50,100,0.4)"/>
        <rect x="2" y="92" width="1" height="6" fill="rgba(200,50,100,0.4)"/>
      </g>
      <g class="corner-deco bottom-right">
        <rect x="92" y="97" width="6" height="1" fill="rgba(80,20,200,0.4)"/>
        <rect x="97" y="92" width="1" height="6" fill="rgba(80,20,200,0.4)"/>
      </g>

      <!-- Floating pixel particles -->
      <g class="particles">
        <rect x="20" y="30" width="0.8" height="0.8" class="particle" style="--pdelay:0s;--pdur:8s"/>
        <rect x="75" y="20" width="0.8" height="0.8" class="particle" style="--pdelay:2s;--pdur:11s"/>
        <rect x="60" y="70" width="1"   height="1"   class="particle" style="--pdelay:4s;--pdur:9s"/>
        <rect x="35" y="80" width="0.6" height="0.6" class="particle" style="--pdelay:1s;--pdur:13s"/>
        <rect x="85" y="55" width="0.8" height="0.8" class="particle" style="--pdelay:6s;--pdur:10s"/>
        <rect x="10" y="60" width="1"   height="1"   class="particle" style="--pdelay:3s;--pdur:12s"/>
        <rect x="50" y="15" width="0.6" height="0.6" class="particle" style="--pdelay:5s;--pdur:7s"/>
        <rect x="90" y="85" width="0.8" height="0.8" class="particle" style="--pdelay:7s;--pdur:14s"/>
      </g>

      <!-- Scanlines -->
      <rect width="100" height="100" fill="url(#scanlines)" opacity="0.4"/>

    </svg>

    <!-- Pixel slashes -->
    <div class="slash slash-red" />
    <div class="slash slash-red-glow" />
    <div class="slash slash-blue" />
    <div class="slash slash-blue-glow" />
    <div class="veil" />
    <div class="streak" />
    <div class="crt-flicker" />

  </div>
</template>

<script setup lang="ts">
// Background only — no logic needed
</script>

<style scoped>

.domain-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  image-rendering: pixelated;
}

/* ── Pixel Rings ── */
.pixel-ring {
  stroke: rgba(180, 0, 255, 0.18);
  stroke-width: 0.4;
  shape-rendering: crispEdges;
  animation: ring-breathe 18s ease-in-out infinite;
  animation-delay: var(--delay);
}

@keyframes ring-breathe {
  0%, 100% { stroke-opacity: 0.3; }
  50%       { stroke-opacity: 0.9; }
}

/* ── Rays ── */
.ray {
  stroke: rgba(160, 80, 220, 0.08);
  stroke-width: 0.15;
  shape-rendering: crispEdges;
  animation: ray-pulse 22s ease-in-out infinite;
  animation-delay: var(--rdelay);
}

@keyframes ray-pulse {
  0%, 100% { stroke-opacity: 0.2; }
  50%       { stroke-opacity: 0.6; }
}

/* ── Brackets ── */
.bracket {
  stroke: rgba(255, 80, 140, 0.6);
  stroke-width: 0.5;
  fill: none;
  shape-rendering: crispEdges;
  animation: bracket-blink 6s steps(1) infinite;
  animation-delay: var(--bdelay);
}

@keyframes bracket-blink {
  0%, 90%, 100% { opacity: 1; }
  91%            { opacity: 0; }
  95%            { opacity: 1; }
  96%            { opacity: 0; }
}

/* ── Ring group rotation ── */
.domain-rings {
  transform-origin: 50px 50px;
  animation: slow-rotate 240s linear infinite;
}

@keyframes slow-rotate {
  from { transform: translate(50px,50px) rotate(0deg); }
  to   { transform: translate(50px,50px) rotate(360deg); }
}

/* ── Kanji ── */
.seal-kanji {
  font-family: 'Hiragino Mincho ProN', 'Yu Mincho', serif;
  fill: rgb(255, 255, 255);
  animation: seal-flicker 20s steps(1) infinite;
  filter: blur(0.3px) drop-shadow(0 0 1px rgba(255,80,140,0.8));
}

@keyframes seal-flicker {
  0%, 100% { opacity: 0.5; }
  48%       { opacity: 0.9; }
  50%       { opacity: 0.1; }
  51%       { opacity: 0.9; }
  52%       { opacity: 0.1; }
  53%       { opacity: 0.9; }
}

/* ── Particles ── */
.particle {
  fill: rgba(200, 100, 255, 0.7);
  shape-rendering: crispEdges;
  animation: particle-float var(--pdur) ease-in-out infinite;
  animation-delay: var(--pdelay);
}

@keyframes particle-float {
  0%        { opacity: 0;   transform: translateY(0px); }
  10%       { opacity: 1; }
  90%       { opacity: 1; }
  100%      { opacity: 0;   transform: translateY(-8px); }
}

/* ── Corner decorations ── */
.corner-deco {
  animation: corner-pulse 8s ease-in-out infinite;
}

@keyframes corner-pulse {
  0%, 100% { opacity: 0.5; }
  50%       { opacity: 1; }
}

/* ── Slashes ── */
.slash {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.slash-red {
  background: linear-gradient(160deg, #6B0033 0%, #9a3a5a 100%);
  clip-path: polygon(0 0, 46% 0, 30% 100%, 0 100%);
  opacity: 0.22;
  image-rendering: pixelated;
}

.slash-red-glow {
  background: #7B0040;
  clip-path: polygon(0 0, 46% 0, 30% 100%, 0 100%);
  opacity: 0.07;
  filter: blur(48px);
  animation: pulse-glow 14s ease-in-out infinite;
}

.slash-blue {
  background: linear-gradient(160deg, #090030 0%, #12004e 100%);
  clip-path: polygon(60% 0, 100% 0, 100% 100%, 44% 100%);
  opacity: 0.50;
}

.slash-blue-glow {
  background: #200a80;
  clip-path: polygon(60% 0, 100% 0, 100% 100%, 44% 100%);
  opacity: 0.05;
  filter: blur(48px);
  animation: pulse-glow 14s ease-in-out infinite;
  animation-delay: 7s;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.04; }
  50%       { opacity: 0.10; }
}

/* ── Radial veil ── */
.veil {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(ellipse at 50% 50%, rgba(100, 0, 160, 0.12) 0%, transparent 65%);
  animation: veil-pulse 20s ease-in-out infinite;
}

@keyframes veil-pulse {
  0%, 100% { opacity: 0.6; }
  50%       { opacity: 1; }
}

/* ── Streak ── */
.streak {
  position: absolute;
  top: 38%;
  left: -10%;
  width: 120%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(120, 0, 55, 0.18) 30%,
    rgba(255, 255, 255, 0.06) 50%,
    rgba(10, 0, 50, 0.18) 70%,
    transparent 100%
  );
  image-rendering: pixelated;
  pointer-events: none;
  animation: streak-slide 24s ease-in-out infinite;
  animation-delay: 4s;
}

@keyframes streak-slide {
  0%   { opacity: 0; transform: translateX(-5%); }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  100% { opacity: 0; transform: translateX(5%); }
}

/* ── CRT flicker ── */
.crt-flicker {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: transparent;
  animation: crt 0.15s steps(1) infinite;
}

@keyframes crt {
  0%   { box-shadow: inset 0 0 0px rgba(0,0,0,0); }
  50%  { box-shadow: inset 0 0 40px rgba(0,0,0,0.04); }
  100% { box-shadow: inset 0 0 0px rgba(0,0,0,0); }
}

</style>