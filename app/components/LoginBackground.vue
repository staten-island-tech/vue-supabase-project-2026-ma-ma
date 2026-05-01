<template>
  <div class="fixed inset-0 overflow-hidden bg-[#06060f]" aria-hidden="true">
    <svg
      class="domain__svg absolute inset-0 w-full h-full pointer-events-none [image-rendering:pixelated]"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="pixel-grid"
          x="0"
          y="0"
          width="2"
          height="2"
          patternUnits="userSpaceOnUse"
        >
          <rect width="2" height="2" fill="none" />
          <rect width="1" height="1" fill="rgba(140,0,255,0.03)" />
        </pattern>
        <pattern
          id="scanlines"
          x="0"
          y="0"
          width="1"
          height="0.8"
          patternUnits="userSpaceOnUse"
        >
          <rect width="1" height="0.4" fill="rgba(0,0,0,0.15)" />
        </pattern>
      </defs>

      <rect width="100" height="100" fill="url(#pixel-grid)" />

      <g class="domain__rings" transform="translate(50,50)">
        <rect
          x="-9"
          y="-9"
          width="18"
          height="18"
          class="domain__ring"
          :style="{ '--delay': '0s' }"
          fill="none"
        />
        <rect
          x="-17"
          y="-17"
          width="34"
          height="34"
          class="domain__ring"
          :style="{ '--delay': '1.5s' }"
          fill="none"
        />
        <rect
          x="-26"
          y="-26"
          width="52"
          height="52"
          class="domain__ring"
          :style="{ '--delay': '3s' }"
          fill="none"
        />
        <rect
          x="-36"
          y="-36"
          width="72"
          height="72"
          class="domain__ring"
          :style="{ '--delay': '4.5s' }"
          fill="none"
        />
        <rect
          x="-47"
          y="-47"
          width="94"
          height="94"
          class="domain__ring"
          :style="{ '--delay': '6s' }"
          fill="none"
        />

        <line
          x1="0"
          y1="-72"
          x2="0"
          y2="72"
          class="domain__ray"
          :style="{ '--rdelay': '0s' }"
        />
        <line
          x1="-72"
          y1="0"
          x2="72"
          y2="0"
          class="domain__ray"
          :style="{ '--rdelay': '1s' }"
        />

        <path
          d="M-6,-12 L-6,-6 L0,-6"
          class="domain__bracket"
          :style="{ '--bdelay': '0s' }"
        />
        <path
          d="M6,-12  L6,-6  L0,-6"
          class="domain__bracket"
          :style="{ '--bdelay': '0.5s' }"
        />
        <path
          d="M-6,12  L-6,6  L0,6"
          class="domain__bracket"
          :style="{ '--bdelay': '1s' }"
        />
        <path
          d="M6,12   L6,6   L0,6"
          class="domain__bracket"
          :style="{ '--bdelay': '1.5s' }"
        />
      </g>

      <text
        x="13"
        y="75"
        class="domain__kanji"
        font-size="11"
        text-anchor="middle"
        transform="rotate(-12, 22, 95)"
      >
        呪
      </text>

      <g class="domain__corner-deco domain__corner-deco--top-left">
        <rect x="2" y="2" width="6" height="1" fill="rgba(200,50,100,0.4)" />
        <rect x="2" y="2" width="1" height="6" fill="rgba(200,50,100,0.4)" />
        <rect x="3" y="4" width="2" height="1" fill="rgba(200,50,100,0.2)" />
      </g>
      <g class="domain__corner-deco domain__corner-deco--top-right">
        <rect x="92" y="2" width="6" height="1" fill="rgba(80,20,200,0.4)" />
        <rect x="97" y="2" width="1" height="6" fill="rgba(80,20,200,0.4)" />
        <rect x="95" y="4" width="2" height="1" fill="rgba(80,20,200,0.2)" />
      </g>
      <g class="domain__corner-deco domain__corner-deco--bottom-left">
        <rect x="2" y="97" width="6" height="1" fill="rgba(200,50,100,0.4)" />
        <rect x="2" y="92" width="1" height="6" fill="rgba(200,50,100,0.4)" />
      </g>
      <g class="domain__corner-deco domain__corner-deco--bottom-right">
        <rect x="92" y="97" width="6" height="1" fill="rgba(80,20,200,0.4)" />
        <rect x="97" y="92" width="1" height="6" fill="rgba(80,20,200,0.4)" />
      </g>

      <g class="domain__particles">
        <rect
          x="20"
          y="30"
          width="0.8"
          height="0.8"
          class="domain__particle"
          :style="{ '--pdelay': '0s', '--pdur': '8s' }"
        />
        <rect
          x="75"
          y="20"
          width="0.8"
          height="0.8"
          class="domain__particle"
          :style="{ '--pdelay': '2s', '--pdur': '11s' }"
        />
        <rect
          x="60"
          y="70"
          width="1"
          height="1"
          class="domain__particle"
          :style="{ '--pdelay': '4s', '--pdur': '9s' }"
        />
        <rect
          x="35"
          y="80"
          width="0.6"
          height="0.6"
          class="domain__particle"
          :style="{ '--pdelay': '1s', '--pdur': '13s' }"
        />
        <rect
          x="85"
          y="55"
          width="0.8"
          height="0.8"
          class="domain__particle"
          :style="{ '--pdelay': '6s', '--pdur': '10s' }"
        />
        <rect
          x="10"
          y="60"
          width="1"
          height="1"
          class="domain__particle"
          :style="{ '--pdelay': '3s', '--pdur': '12s' }"
        />
        <rect
          x="50"
          y="15"
          width="0.6"
          height="0.6"
          class="domain__particle"
          :style="{ '--pdelay': '5s', '--pdur': '7s' }"
        />
        <rect
          x="90"
          y="85"
          width="0.8"
          height="0.8"
          class="domain__particle"
          :style="{ '--pdelay': '7s', '--pdur': '14s' }"
        />
      </g>

      <rect width="100" height="100" fill="url(#scanlines)" opacity="0.4" />
    </svg>

    <div
      class="domain__slash domain__slash--red absolute inset-0 pointer-events-none"
    />
    <div
      class="domain__slash domain__slash--red-glow absolute inset-0 pointer-events-none"
    />
    <div
      class="domain__slash domain__slash--blue absolute inset-0 pointer-events-none"
    />
    <div
      class="domain__slash domain__slash--blue-glow absolute inset-0 pointer-events-none"
    />
    <div class="domain__veil absolute inset-0 pointer-events-none" />
    <div
      class="domain__streak absolute top-[38%] left-[-10%] w-[120%] h-[2px] pointer-events-none [image-rendering:pixelated]"
    />
    <div class="domain__crt-flicker absolute inset-0 pointer-events-none" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.domain__svg [shape-rendering],
.domain__ring,
.domain__ray,
.domain__bracket,
.domain__particle {
  shape-rendering: crispEdges;
}

.domain__ring {
  stroke: rgba(180, 0, 255, 0.18);
  stroke-width: 0.4;
  animation: domain-ring-breathe 18s ease-in-out infinite;
  animation-delay: var(--delay);
}

@keyframes domain-ring-breathe {
  0%,
  100% {
    stroke-opacity: 0.3;
  }
  50% {
    stroke-opacity: 0.9;
  }
}

.domain__ray {
  stroke: rgba(160, 80, 220, 0.08);
  stroke-width: 0.15;
  animation: domain-ray-pulse 22s ease-in-out infinite;
  animation-delay: var(--rdelay);
}

@keyframes domain-ray-pulse {
  0%,
  100% {
    stroke-opacity: 0.2;
  }
  50% {
    stroke-opacity: 0.6;
  }
}

.domain__bracket {
  stroke: rgba(255, 80, 140, 0.6);
  stroke-width: 0.5;
  fill: none;
  animation: domain-bracket-blink 6s steps(1) infinite;
  animation-delay: var(--bdelay);
}

@keyframes domain-bracket-blink {
  0%,
  90%,
  100% {
    opacity: 1;
  }
  91% {
    opacity: 0;
  }
  95% {
    opacity: 1;
  }
  96% {
    opacity: 0;
  }
}

.domain__rings {
  transform-origin: 50px 50px;
  animation: domain-slow-rotate 240s linear infinite;
}

@keyframes domain-slow-rotate {
  from {
    transform: translate(50px, 50px) rotate(0deg);
  }
  to {
    transform: translate(50px, 50px) rotate(360deg);
  }
}

.domain__kanji {
  fill: rgb(255, 255, 255);
  animation: domain-seal-flicker 20s steps(1) infinite;
  filter: blur(0.3px) drop-shadow(0 0 1px rgba(255, 80, 140, 0.8));
}

@keyframes domain-seal-flicker {
  0%,
  100% {
    opacity: 0.5;
  }
  48% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  51% {
    opacity: 0.9;
  }
  52% {
    opacity: 0.1;
  }
  53% {
    opacity: 0.9;
  }
}

.domain__particle {
  fill: rgba(200, 100, 255, 0.7);
  animation: domain-particle-float var(--pdur) ease-in-out infinite;
  animation-delay: var(--pdelay);
}

@keyframes domain-particle-float {
  0% {
    opacity: 0;
    transform: translateY(0px);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-8px);
  }
}

.domain__corner-deco {
  animation: domain-corner-pulse 8s ease-in-out infinite;
}

@keyframes domain-corner-pulse {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

.domain__slash--red {
  background: linear-gradient(160deg, #6b0033 0%, #9a3a5a 100%);
  clip-path: polygon(0 0, 46% 0, 30% 100%, 0 100%);
  opacity: 0.22;
}

.domain__slash--red-glow {
  background: #7b0040;
  clip-path: polygon(0 0, 46% 0, 30% 100%, 0 100%);
  opacity: 0.07;
  filter: blur(48px);
  animation: domain-pulse-glow 14s ease-in-out infinite;
}

.domain__slash--blue {
  background: linear-gradient(160deg, #090030 0%, #12004e 100%);
  clip-path: polygon(60% 0, 100% 0, 100% 100%, 44% 100%);
  opacity: 0.5;
}

.domain__slash--blue-glow {
  background: #200a80;
  clip-path: polygon(60% 0, 100% 0, 100% 100%, 44% 100%);
  opacity: 0.05;
  filter: blur(48px);
  animation: domain-pulse-glow 14s ease-in-out infinite;
  animation-delay: 7s;
}

@keyframes domain-pulse-glow {
  0%,
  100% {
    opacity: 0.04;
  }
  50% {
    opacity: 0.1;
  }
}

.domain__veil {
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(100, 0, 160, 0.12) 0%,
    transparent 65%
  );
  animation: domain-veil-pulse 20s ease-in-out infinite;
}

@keyframes domain-veil-pulse {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

.domain__streak {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(120, 0, 55, 0.18) 30%,
    rgba(255, 255, 255, 0.06) 50%,
    rgba(10, 0, 50, 0.18) 70%,
    transparent 100%
  );
  animation: domain-streak-slide 24s ease-in-out infinite;
  animation-delay: 4s;
}

@keyframes domain-streak-slide {
  0% {
    opacity: 0;
    transform: translateX(-5%);
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(5%);
  }
}

.domain__crt-flicker {
  animation: domain-crt 0.15s steps(1) infinite;
}

@keyframes domain-crt {
  0% {
    box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
  }
  50% {
    box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.04);
  }
  100% {
    box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
  }
}
</style>

