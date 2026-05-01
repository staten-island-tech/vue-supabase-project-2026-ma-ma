<template>
  <div class="fixed inset-0 overflow-hidden bg-[#06060f]" aria-hidden="true">

    <svg class="domain-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <g class="domain-rings" transform="translate(50,50)">
        <circle r="10"  class="ring" style="--delay: 0s"   />
        <circle r="18"  class="ring" style="--delay: 1.5s" />
        <circle r="27"  class="ring" style="--delay: 3s"   />
        <circle r="37"  class="ring" style="--delay: 4.5s" />
        <circle r="48"  class="ring" style="--delay: 6s"   />
        <circle r="60"  class="ring" style="--delay: 7.5s" />
        <circle r="74"  class="ring" style="--delay: 9s"   />
        <line x1="0"   y1="-72" x2="0"  y2="72"  class="ray" style="--rdelay: 0s"  />
        <line x1="-62" y1="-36" x2="62" y2="36"  class="ray" style="--rdelay: 1s"  />
        <line x1="-62" y1="36"  x2="62" y2="-36" class="ray" style="--rdelay: 2s"  />
      </g>

      <!-- Large 呪 blended into the red slash area, bottom-left -->
      <text x="13" y="75" class="seal-kanji" font-size="11" text-anchor="middle" transform="rotate(-12, 22, 95)">呪</text>

      <!-- Black cursed marks on the red side -->
      <!--<g class="cursed-marks">
        <path d="M5 15 L18 19 L22 17" stroke="rgba(0,0,0,0.7)" stroke-width="0.5" fill="none" stroke-linecap="round"/>
        <path d="M3 35 L9 32"    stroke="rgba(0,0,0,0.6)"  stroke-width="0.4"  fill="none" stroke-linecap="round"/>
        <path d="M4 37 L11 34"   stroke="rgba(0,0,0,0.5)"  stroke-width="0.35" fill="none" stroke-linecap="round"/>
        <path d="M3 39 L8 36.5"  stroke="rgba(0,0,0,0.4)"  stroke-width="0.3"  fill="none" stroke-linecap="round"/>
        <path d="M14 72 L18  L14 74 Z" stroke="rgba(0,0,0,0.65)" stroke-width="0.3" fill="rgba(0,0,0,0.25)"/>
        <path d="M10 80 Q11 85 9 88 Q8 91 10 92" stroke="rgba(0,0,0,0.5)" stroke-width="0.4" fill="none" stroke-linecap="round"/>
        <line x1="20" y1="55" x2="28" y2="52" stroke="rgba(0,0,0,0.45)" stroke-width="0.3" fill="none"/>
        <line x1="21" y1="57" x2="27" y2="57" stroke="rgba(0,0,0,0.35)" stroke-width="0.25" fill="none"/>
        <path d="M2 88 L6 84 L8 88" stroke="rgba(0,0,0,0.55)" stroke-width="0.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </g>-->
    </svg>

    <div class="slash slash-red" />
    <div class="slash slash-red-glow" />
    <div class="slash slash-blue" />
    <div class="slash slash-blue-glow" />
    <div class="veil" />
    <div class="streak" />

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
}

/* ── Rings ── */
.ring {
  fill: none;
  stroke: rgba(140, 0, 255, 0.1);
  stroke-width: 0.18;
  animation: ring-breathe 18s ease-in-out infinite;
  animation-delay: var(--delay);
  filter: drop-shadow(0, 0, 1, rgba(88, 16, 16, 0.8));
}

@keyframes ring-breathe {
  0%, 100% { stroke-opacity: 0.4; }
  50%       { stroke-opacity: 0.85; }
}

/* ── Rays ── */
.ray {
  stroke: rgba(160, 100, 210, 0.045);
  stroke-width: 0.1;
  animation: ray-pulse 22s ease-in-out infinite;
  animation-delay: var(--rdelay);
}

@keyframes ray-pulse {
  0%, 100% { stroke-opacity: 0.3; }
  50%       { stroke-opacity: 0.7; }
}

/* ── Ring group rotation ── */
.domain-rings {
  transform-origin: 50px 50px;
  animation: slow-rotate 180s linear infinite;
}

@keyframes slow-rotate {
  from { transform: translate(50px,50px) rotate(0deg);   }
  to   { transform: translate(50px,50px) rotate(360deg); }
}

/* ── Kanji ── */
.seal-kanji {
  font-family: 'Hiragino Mincho ProN', 'Yu Mincho', serif;
  fill: rgb(255, 255, 255);
  animation: seal-flicker 20s ease-in-out infinite;
  filter: blur(0.5px) drop-shadow(0 0 1px rgba(255, 255, 255, 0.8));
}

@keyframes seal-flicker {
  0%, 100% { opacity: 0.5; }
  48%       { opacity: 0.85; }
  50%       { opacity: 0.2; }
  52%       { opacity: 0.85; }
}

/* ── Cursed marks ── */
.cursed-marks {
  animation: marks-breathe 16s ease-in-out infinite;
}

@keyframes marks-breathe {
  0%, 100% { opacity: 0.7; }
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
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(120, 0, 55, 0.18) 30%,
    rgba(255, 255, 255, 0.04) 50%,
    rgba(10, 0, 50, 0.18) 70%,
    transparent 100%
  );
  filter: blur(0.5px);
  pointer-events: none;
  animation: streak-slide 24s ease-in-out infinite;
  animation-delay: 4s;
}

@keyframes streak-slide {
  0%   { opacity: 0; transform: translateX(-5%) skewY(-0.5deg); }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  100% { opacity: 0; transform: translateX(5%) skewY(-0.5deg); }
}

</style>