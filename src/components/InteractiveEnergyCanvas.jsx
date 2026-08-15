import { useEffect, useRef } from "react";

const COLORS = [
  { core: "rgba(226,252,255,0.88)", glow: "rgba(34,211,238,", edge: "rgba(59,130,246," },
  { core: "rgba(219,234,254,0.84)", glow: "rgba(59,130,246,", edge: "rgba(168,85,247," },
  { core: "rgba(245,243,255,0.82)", glow: "rgba(168,85,247,", edge: "rgba(34,211,238," },
];

const MAX_PROJECTILES = 4;
const MAX_EXPLOSIONS = 2;
const MOBILE_MAX_PROJECTILES = 2;
const MOBILE_MAX_EXPLOSIONS = 1;
const MOBILE_MAX_EXPLOSION_PARTICLES = 14;
const MOBILE_MAX_EXPLOSION_FRAGMENTS = 3;
const MAX_SHIP_TRAIL_PARTICLES = 78;
const MAX_CONTACT_PULSES = 8;
const MIN_ENERGY_DISTANCE = 132;
const MAX_ENERGY_PLACEMENT_ATTEMPTS = 140;
const ENERGY_SAFE_MARGIN = 32;
const SHIP_COLLISION_RADIUS = 24;
const ENERGY_CONTACT_COOLDOWN = 0.17;
const MAX_ENERGY_IMPACT_SPEED = 58;
const INTERACTIVE_SELECTOR = "a, button, input, textarea, select, article, [role='button']";
const PROJECTILE_COLORS = {
  core: "rgba(238,252,255,0.96)",
  hot: "rgba(0,200,255,",
  blue: "rgba(45,124,255,",
  electric: "rgba(0,174,239,",
};
const SHIP_TRAIL_COLORS = [
  "rgba(0,200,255,",
  "rgba(0,174,239,",
  "rgba(45,124,255,",
  "rgba(168,85,247,",
];

const random = (min, max) => min + Math.random() * (max - min);
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function isTouchDevice() {
  return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

function rectsOverlap(a, b, margin) {
  return !(
    a.x + a.width + margin < b.x ||
    a.x - margin > b.x + b.width ||
    a.y + a.height + margin < b.y ||
    a.y - margin > b.y + b.height
  );
}

function getEnergyBox(x, y, radius) {
  const reach = radius * 3.35 + ENERGY_SAFE_MARGIN;
  return {
    x: x - reach,
    y: y - reach,
    width: reach * 2,
    height: reach * 2,
  };
}

function getMinimumEnergyDistance(a, b) {
  return clamp(a.radius + b.radius + 58, 120, 178);
}

function getExpandedZonePush(x, y, radius, zones) {
  const padding = radius * 2.8 + ENERGY_SAFE_MARGIN;

  for (const zone of zones) {
    const left = zone.x - padding;
    const right = zone.x + zone.width + padding;
    const top = zone.y - padding;
    const bottom = zone.y + zone.height + padding;

    if (x < left || x > right || y < top || y > bottom) continue;

    const distances = [
      { axis: "x", value: left - x, depth: Math.abs(x - left) },
      { axis: "x", value: right - x, depth: Math.abs(right - x) },
      { axis: "y", value: top - y, depth: Math.abs(y - top) },
      { axis: "y", value: bottom - y, depth: Math.abs(bottom - y) },
    ];
    const nearest = distances.reduce((best, current) =>
      current.depth < best.depth ? current : best,
    );

    return {
      x: nearest.axis === "x" ? Math.sign(nearest.value) || 1 : 0,
      y: nearest.axis === "y" ? Math.sign(nearest.value) || 1 : 0,
      depth: nearest.depth,
      zone,
    };
  }

  return null;
}

function isInsideProtectedZone(x, y, radius, zones) {
  return Boolean(getExpandedZonePush(x, y, radius, zones));
}

function isTooCloseToEnergy(candidate, energies) {
  return energies.some((energy) => {
    const distance = Math.hypot(candidate.x - energy.x, candidate.y - energy.y);
    return distance < getMinimumEnergyDistance(candidate, energy);
  });
}

function getEnergySpeed(radius) {
  if (radius >= 35) return random(3, 6);
  if (radius >= 25) return random(4, 8);
  return random(6, 10);
}

function getEnergyVelocity(radius) {
  const angle = random(0, Math.PI * 2);
  const speed = getEnergySpeed(radius);
  return {
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
  };
}

function getEnergyImpactMassFactor(radius) {
  if (radius >= 35) return 0.58;
  if (radius >= 25) return 0.78;
  return 1;
}

function getEnergySlots(width) {
  const desktopSlots = [
    { x: [0.08, 0.22], y: [0.05, 0.13] },
    { x: [0.74, 0.9], y: [0.06, 0.15] },
    { x: [0.33, 0.47], y: [0.14, 0.24] },
    { x: [0.06, 0.18], y: [0.25, 0.35] },
    { x: [0.8, 0.94], y: [0.26, 0.36] },
    { x: [0.42, 0.56], y: [0.36, 0.44] },
    { x: [0.1, 0.24], y: [0.47, 0.57] },
    { x: [0.68, 0.86], y: [0.48, 0.58] },
    { x: [0.28, 0.42], y: [0.6, 0.69] },
    { x: [0.78, 0.93], y: [0.62, 0.72] },
    { x: [0.08, 0.22], y: [0.72, 0.81] },
    { x: [0.52, 0.67], y: [0.75, 0.84] },
    { x: [0.16, 0.32], y: [0.87, 0.96] },
    { x: [0.7, 0.88], y: [0.86, 0.96] },
    { x: [0.4, 0.56], y: [0.9, 0.98] },
  ];

  const tabletSlots = [
    { x: [0.08, 0.28], y: [0.08, 0.24] },
    { x: [0.72, 0.92], y: [0.16, 0.32] },
    { x: [0.07, 0.28], y: [0.38, 0.52] },
    { x: [0.7, 0.92], y: [0.47, 0.62] },
    { x: [0.12, 0.34], y: [0.66, 0.8] },
    { x: [0.66, 0.9], y: [0.74, 0.88] },
    { x: [0.12, 0.34], y: [0.9, 0.97] },
  ];

  return width < 1024 ? tabletSlots : desktopSlots;
}

function makeEnergy(width, height, exclusionZones, existingEnergies = [], index = 0) {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const sizeRoll = Math.random();
  const radius = sizeRoll > 0.88 ? random(35, 42) : sizeRoll > 0.48 ? random(25, 34) : random(18, 24);
  const preferredBands = getEnergySlots(width);

  for (let attempt = 0; attempt < MAX_ENERGY_PLACEMENT_ATTEMPTS; attempt += 1) {
    const band = preferredBands[(attempt + index) % preferredBands.length];
    const x = random(width * band.x[0], width * band.x[1]);
    const y = random(height * band.y[0], height * band.y[1]);
    const candidate = { x, y, radius };
    const box = getEnergyBox(x, y, radius);

    if (
      !isTooCloseToEnergy(candidate, existingEnergies) &&
      !isInsideProtectedZone(x, y, radius, exclusionZones) &&
      !exclusionZones.some((zone) => rectsOverlap(box, zone, 12))
    ) {
      const velocity = getEnergyVelocity(radius);
      const targetSpeed = Math.hypot(velocity.vx, velocity.vy);
      return {
        x,
        y,
        radius,
        color,
        phase: random(0, Math.PI * 2),
        vx: velocity.vx,
        vy: velocity.vy,
        targetSpeed,
        driftAngle: random(0, Math.PI * 2),
        driftTurn: random(0.12, 0.26),
        scale: random(0.9, 1.12),
        alpha: 0,
        fade: "in",
        orbitTilt: random(0.48, 0.82),
        orbitAlpha: random(0.22, 0.42),
        avoidX: 0,
        avoidY: 0,
        impulseVX: 0,
        impulseVY: 0,
        contactCooldown: 0,
        impactTtl: 0,
        impactLife: 0.14,
        impactAngle: 0,
        impactAmount: 0,
        stuckTime: 0,
      };
    }
  }

  return null;
}

function drawEnergy(ctx, energy, time) {
  const pulse = 1 + Math.sin(time * 0.002 + energy.phase) * 0.08;
  const radius = energy.radius * energy.scale * pulse;
  const alpha = energy.alpha;
  const impactProgress = energy.impactLife
    ? clamp(energy.impactTtl / energy.impactLife, 0, 1)
    : 0;
  const impactStretch = impactProgress * energy.impactAmount * 0.08;
  const impactGlow = impactProgress * energy.impactAmount;

  ctx.save();
  ctx.translate(energy.x, energy.y);
  ctx.rotate(energy.impactAngle);
  ctx.scale(1 + impactStretch, 1 - impactStretch * 0.55);
  ctx.rotate(Math.sin(time * 0.0007 + energy.phase) * 0.35 - energy.impactAngle);

  const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 4.4);
  glow.addColorStop(0, energy.color.glow + `${(0.34 + impactGlow * 0.12) * alpha})`);
  glow.addColorStop(0.5, energy.color.edge + `${(0.17 + impactGlow * 0.08) * alpha})`);
  glow.addColorStop(1, "rgba(2,6,23,0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.ellipse(0, 0, radius * 2.3, radius * 1.45, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = energy.color.glow + `${energy.orbitAlpha * alpha})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.ellipse(0, 0, radius * 1.15, radius * energy.orbitTilt, 0, 0, Math.PI * 2);
  ctx.stroke();

  if (radius > 15) {
    ctx.strokeStyle = energy.color.edge + `${0.18 * alpha})`;
    ctx.beginPath();
    ctx.ellipse(0, 0, radius * 0.82, radius * 0.48, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.fillStyle = energy.color.core;
  ctx.globalAlpha = 0.68 * alpha;
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.28, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function makeExplosion(energy) {
  const particleCount = Math.floor(random(14, 21));
  const fragmentCount = Math.floor(random(3, 6));
  const explosionColors = [
    "rgba(0,174,239,",
    "rgba(0,200,255,",
    "rgba(45,124,255,",
    "rgba(168,85,247,",
    "rgba(238,252,255,",
  ];
  const particles = Array.from({ length: particleCount }, () => {
    const angle = random(0, Math.PI * 2);
    const speed = random(100, 242);
    return {
      x: energy.x,
      y: energy.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: random(2.3, 6.2),
      life: random(0.45, 0.75),
      ttl: 0,
      color: explosionColors[Math.floor(Math.random() * explosionColors.length)],
    };
  });

  const fragments = Array.from({ length: fragmentCount }, () => {
    const angle = random(0, Math.PI * 2);
    const speed = random(66, 158);
    return {
      x: energy.x,
      y: energy.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: random(5.8, 10.8),
      rotation: random(0, Math.PI * 2),
      spin: random(-4, 4),
      life: random(0.42, 0.68),
      ttl: 0,
      color: explosionColors[Math.floor(Math.random() * 4)],
    };
  });

  return {
    x: energy.x,
    y: energy.y,
    color: energy.color,
    particles,
    fragments,
    flash: 0.18,
    collapse: 0.12,
    ringLife: 0.68,
    ringTtl: 0,
  };
}

function makeMuzzleFlash(x, y, angle) {
  return {
    x,
    y,
    angle,
    ttl: 0,
    life: 0.075,
  };
}

function makeContactPulse(x, y, angle, strength) {
  return {
    x,
    y,
    angle,
    strength,
    ttl: 0,
    life: 0.16,
    particles: Array.from({ length: 3 }, () => ({
      angle: angle + Math.PI + random(-0.62, 0.62),
      speed: random(18, 42) * strength,
      size: random(1.3, 2.3),
    })),
  };
}

function drawShipTrail(ctx, particles, dt) {
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const particle = particles[i];
    particle.ttl += dt;
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
    particle.vx *= 0.94;
    particle.vy *= 0.94;

    const alpha = clamp(1 - particle.ttl / particle.life, 0, 1);
    if (alpha <= 0) {
      particles.splice(i, 1);
      continue;
    }

    ctx.fillStyle = particle.color + `${particle.alpha * alpha})`;
    ctx.shadowColor = particle.glowColor;
    ctx.shadowBlur = particle.glow * alpha;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size * alpha, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

function drawContactPulse(ctx, pulse, dt) {
  pulse.ttl += dt;
  const progress = clamp(pulse.ttl / pulse.life, 0, 1);
  const alpha = 1 - progress;
  if (alpha <= 0) return false;

  ctx.save();
  ctx.translate(pulse.x, pulse.y);
  ctx.rotate(pulse.angle);
  ctx.strokeStyle = `rgba(125,211,252,${0.44 * alpha})`;
  ctx.shadowColor = "rgba(0,200,255,0.55)";
  ctx.shadowBlur = 10;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(0, 0, 5 + progress * 13 * pulse.strength, -0.8, 0.8);
  ctx.stroke();

  pulse.particles.forEach((particle) => {
    const distance = particle.speed * pulse.ttl;
    ctx.fillStyle = `rgba(0,200,255,${0.5 * alpha})`;
    ctx.beginPath();
    ctx.arc(
      Math.cos(particle.angle) * distance,
      Math.sin(particle.angle) * distance,
      particle.size * alpha,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  });
  ctx.restore();

  return true;
}

function drawMuzzleFlash(ctx, flash, dt) {
  flash.ttl += dt;
  const alpha = clamp(1 - flash.ttl / flash.life, 0, 1);
  if (alpha <= 0) return false;

  ctx.save();
  ctx.translate(flash.x, flash.y);
  ctx.rotate(flash.angle);
  ctx.shadowColor = "rgba(0,200,255,0.9)";
  ctx.shadowBlur = 12;
  ctx.fillStyle = `rgba(0,200,255,${0.28 * alpha})`;
  ctx.beginPath();
  ctx.ellipse(6, 0, 11 * alpha, 4 * alpha, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = `rgba(238,252,255,${0.7 * alpha})`;
  ctx.beginPath();
  ctx.arc(0, 0, 2.6 * alpha, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = `rgba(125,211,252,${0.38 * alpha})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(0, 0, 6 * (1 - alpha * 0.25), 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  return true;
}

function drawImpactCollapse(ctx, impact, dt) {
  impact.ttl += dt;
  const progress = clamp(impact.ttl / impact.life, 0, 1);
  const alpha = 1 - progress;
  const radius = impact.radius * (1 - progress * 0.45);

  ctx.save();
  ctx.translate(impact.x, impact.y);
  ctx.strokeStyle = PROJECTILE_COLORS.hot + `${0.5 * alpha})`;
  ctx.shadowColor = "rgba(0,200,255,0.75)";
  ctx.shadowBlur = 22;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = `rgba(0,200,255,${0.12 * alpha})`;
  ctx.beginPath();
  ctx.arc(0, 0, radius * 2.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  return progress < 1;
}

function getShipRenderPosition(ship, now) {
  const recoilProgress = ship.recoilLife > 0 ? clamp(ship.recoilTtl / ship.recoilLife, 0, 1) : 0;
  const shakeProgress = ship.shakeLife > 0 ? clamp(ship.shakeTtl / ship.shakeLife, 0, 1) : 0;
  const recoilDistance = clamp(ship.recoilKick * recoilProgress, 0, 4);
  const shakeDistance = Math.sin(now * 0.11) * ship.shakeStrength * shakeProgress;
  const perpendicular = ship.angle + Math.PI / 2;

  return {
    x:
      ship.x -
      Math.cos(ship.angle) * recoilDistance +
      Math.cos(perpendicular) * shakeDistance,
    y:
      ship.y -
      Math.sin(ship.angle) * recoilDistance +
      Math.sin(perpendicular) * shakeDistance,
  };
}

function drawShip(ctx, ship, now) {
  if (!ship.active || ship.overInteractive) return;

  const render = getShipRenderPosition(ship, now);
  const recoilProgress = ship.recoilLife > 0 ? clamp(ship.recoilTtl / ship.recoilLife, 0, 1) : 0;
  ctx.save();
  ctx.translate(render.x, render.y);
  ctx.rotate(ship.angle);

  const throttle = clamp(ship.smoothedSpeed / 980, 0.18, 1);
  const exhaust = ctx.createLinearGradient(-28, 0, -9, 0);
  exhaust.addColorStop(0, `rgba(168,85,247,${0.02 + throttle * 0.2 + recoilProgress * 0.04})`);
  exhaust.addColorStop(0.5, `rgba(0,174,239,${0.1 + throttle * 0.24 + recoilProgress * 0.08})`);
  exhaust.addColorStop(1, `rgba(0,200,255,${0.18 + throttle * 0.32 + recoilProgress * 0.12})`);
  ctx.fillStyle = exhaust;
  ctx.shadowColor = "rgba(0,200,255,0.45)";
  ctx.shadowBlur = 12 + recoilProgress * 5;
  ctx.beginPath();
  ctx.moveTo(-10, -4);
  ctx.lineTo(-30 - throttle * 8 - recoilProgress * 5, 0);
  ctx.lineTo(-10, 4);
  ctx.closePath();
  ctx.fill();

  ctx.shadowColor = "rgba(0,200,255,0.45)";
  ctx.shadowBlur = 10;
  ctx.fillStyle = "rgba(226,252,255,0.9)";
  ctx.strokeStyle = "rgba(0,200,255,0.78)";
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(19, 0);
  ctx.lineTo(-11, -9);
  ctx.lineTo(-6, 0);
  ctx.lineTo(-11, 9);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(45,124,255,0.74)";
  ctx.beginPath();
  ctx.arc(1, 0, 3.2, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

export default function InteractiveEnergyCanvas({ containerRef, shouldReduceMotion = false }) {
  const canvasRef = useRef(null);
  const isTouchMode = typeof window !== "undefined" && isTouchDevice();
  const disabled = shouldReduceMotion;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef?.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !container || !ctx || disabled) {
      return undefined;
    }

    if (isTouchMode) {
      let raf;
      let mounted = true;
      let visible = !document.hidden;
      let dpr = 1;
      let lastTime = performance.now();
      let width = 0;
      let height = 0;
      let targetCount = 0;
      let resizeTimeout;
      let scrollTimeout;
      let tapStart = null;
      let exclusionZones = [];

      const energies = [];
      const projectiles = [];
      const explosions = [];
      const muzzleFlashes = [];
      const shipBursts = [];
      const respawns = [];
      const ship = {
        x: 0,
        y: 0,
        baseX: 0,
        baseY: 0,
        angle: -Math.PI / 2,
        startAngle: -Math.PI / 2,
        targetAngle: -Math.PI / 2,
        rotateStart: 0,
        rotateDuration: 0.12,
        recoilTtl: 0,
        recoilLife: 0.1,
        shakeTtl: 0,
        shakeLife: 0.1,
        visible: false,
        appearStart: 0,
        visibleUntil: 0,
        fadeDuration: 0.2,
        opacity: 0,
      };

      const setCanvasSize = () => {
        const rect = container.getBoundingClientRect();
        width = Math.max(1, rect.width);
        height = Math.max(1, rect.height);
        dpr = Math.min(window.devicePixelRatio || 1, width < 768 ? 1.25 : 1.5);
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };

      const getPoint = (event) => {
        const rect = container.getBoundingClientRect();
        return {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
      };

      const getMobileExclusionZones = () => {
        const baseRect = container.getBoundingClientRect();
        const selectors = [
          "h1",
          "h2",
          "h3",
          "h4",
          "p",
          "a",
          "button",
          "img",
          "article",
          "input",
          "select",
          "textarea",
          "[role='button']",
          "[data-energy-safe-zone='true']",
        ];

        const zones = Array.from(container.querySelectorAll(selectors.join(","))).map((node) => {
          const rect = node.getBoundingClientRect();
          return {
            x: rect.left - baseRect.left,
            y: rect.top - baseRect.top,
            width: rect.width,
            height: rect.height,
          };
        });

        const navbar = document.querySelector("header");
        if (navbar) {
          const rect = navbar.getBoundingClientRect();
          zones.push({
            x: rect.left - baseRect.left,
            y: rect.top - baseRect.top,
            width: rect.width,
            height: rect.height,
          });
        }

        return zones;
      };

      const pointInZone = (x, y, zones, margin = 34) =>
        zones.some(
          (zone) =>
            x > zone.x - margin &&
            x < zone.x + zone.width + margin &&
            y > zone.y - margin &&
            y < zone.y + zone.height + margin,
        );

      const placeMobileShip = () => {
        const rect = container.getBoundingClientRect();
        const viewportHeight = window.innerHeight || height;
        const viewportY = clamp(viewportHeight * 0.82, 280, viewportHeight - 92);
        const candidates = [
          { x: width * 0.5, y: -rect.top + viewportY },
          { x: width * 0.34, y: -rect.top + viewportY - 24 },
          { x: width * 0.66, y: -rect.top + viewportY - 24 },
          { x: width * 0.5, y: -rect.top + viewportY - 72 },
        ];
        const chosen =
          candidates.find((point) => !pointInZone(point.x, point.y, exclusionZones, 56)) ||
          candidates[candidates.length - 1];

        ship.baseX = clamp(chosen.x, 48, width - 48);
        ship.baseY = clamp(chosen.y, 72, height - 48);
        ship.x = ship.baseX;
        ship.y = ship.baseY;
      };

      const getMobileEnergyBands = () => {
        const sections = Array.from(container.children).filter(
          (node) => node.tagName?.toLowerCase() === "section",
        );
        const fallback = [
          { x: [0.14, 0.34], y: [height * 0.08, height * 0.18] },
          { x: [0.64, 0.86], y: [height * 0.14, height * 0.26] },
          { x: [0.1, 0.32], y: [height * 0.38, height * 0.5] },
          { x: [0.66, 0.9], y: [height * 0.54, height * 0.66] },
          { x: [0.34, 0.64], y: [height * 0.76, height * 0.88] },
        ];

        if (!sections.length) return fallback;

        const baseRect = container.getBoundingClientRect();
        const bands = [];
        sections.slice(0, 3).forEach((section, sectionIndex) => {
          const rect = section.getBoundingClientRect();
          const top = rect.top - baseRect.top;
          const bottom = top + rect.height;
          const usableTop = top + rect.height * 0.16;
          const usableBottom = bottom - rect.height * 0.14;
          const sectionBands =
            sectionIndex === 0
              ? [
                  { x: [0.14, 0.34], y: [usableTop, top + rect.height * 0.36] },
                  { x: [0.66, 0.88], y: [top + rect.height * 0.22, top + rect.height * 0.48] },
                ]
              : sectionIndex === 1
                ? [
                    { x: [0.12, 0.32], y: [usableTop, top + rect.height * 0.46] },
                    { x: [0.68, 0.9], y: [top + rect.height * 0.46, usableBottom] },
                  ]
                : [
                    { x: [0.12, 0.34], y: [usableTop, top + rect.height * 0.52] },
                    { x: [0.62, 0.86], y: [top + rect.height * 0.44, usableBottom] },
                  ];

          sectionBands.forEach((band) => {
            if (band.y[1] - band.y[0] > 90) {
              bands.push({
                x: band.x,
                y: [clamp(band.y[0], 0, height), clamp(band.y[1], 0, height)],
              });
            }
          });
        });

        return bands.length ? bands : fallback;
      };

      const isTooCloseMobileEnergy = (candidate) =>
        energies.some(
          (energy) =>
            Math.hypot(candidate.x - energy.x, candidate.y - energy.y) <
            candidate.radius + energy.radius + 84,
        );

      const makeMobileEnergy = (index = 0) => {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const radius = Math.random() > 0.88 ? random(32, 34) : random(22, width < 768 ? 30 : 32);
        const bands = getMobileEnergyBands();

        for (let attempt = 0; attempt < 90; attempt += 1) {
          const band = bands[(attempt + index) % bands.length];
          const x = random(width * band.x[0], width * band.x[1]);
          const y = random(band.y[0], band.y[1]);
          const candidate = { x, y, radius };
          const box = getEnergyBox(x, y, radius);

          if (
            !isTooCloseMobileEnergy(candidate) &&
            !pointInZone(x, y, exclusionZones, radius * 2.25 + 28) &&
            !exclusionZones.some((zone) => rectsOverlap(box, zone, 18))
          ) {
            const angle = random(0, Math.PI * 2);
            const speed = random(2, width < 768 ? 4.2 : 5);
            return {
              x,
              y,
              radius,
              color,
              phase: random(0, Math.PI * 2),
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              driftAngle: random(0, Math.PI * 2),
              driftTurn: random(0.08, 0.18),
              scale: random(0.92, 1.08),
              alpha: 0,
              fade: "in",
              orbitTilt: random(0.52, 0.82),
              orbitAlpha: random(0.18, 0.34),
              avoidX: 0,
              avoidY: 0,
              impulseVX: 0,
              impulseVY: 0,
              impactTtl: 0,
              impactLife: 0.1,
              impactAngle: 0,
              impactAmount: 0,
              hitPadding: random(22, 28),
            };
          }
        }

        return null;
      };

      const fillMobileEnergies = () => {
        targetCount = 5;
        let attempts = 0;
        while (energies.length < targetCount && attempts < targetCount * 8) {
          const energy = makeMobileEnergy(energies.length + attempts);
          if (energy) energies.push(energy);
          attempts += 1;
        }
        if (energies.length > targetCount) energies.splice(targetCount);
      };

      const makeMobileExplosion = (energy) => {
        const explosionColors = [
          "rgba(0,174,239,",
          "rgba(0,200,255,",
          "rgba(45,124,255,",
          "rgba(168,85,247,",
          "rgba(238,252,255,",
        ];
        const particleCount = Math.floor(random(10, MOBILE_MAX_EXPLOSION_PARTICLES + 1));
        const fragmentCount = Math.floor(random(2, MOBILE_MAX_EXPLOSION_FRAGMENTS + 1));

        return {
          x: energy.x,
          y: energy.y,
          particles: Array.from({ length: particleCount }, () => {
            const angle = random(0, Math.PI * 2);
            const speed = random(78, 176);
            return {
              x: energy.x,
              y: energy.y,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              size: random(2, 4.6),
              ttl: 0,
              life: random(0.45, 0.65),
              color: explosionColors[Math.floor(Math.random() * explosionColors.length)],
            };
          }),
          fragments: Array.from({ length: fragmentCount }, () => {
            const angle = random(0, Math.PI * 2);
            const speed = random(56, 126);
            return {
              x: energy.x,
              y: energy.y,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              size: random(4.6, 8.2),
              rotation: random(0, Math.PI * 2),
              spin: random(-3.2, 3.2),
              ttl: 0,
              life: random(0.42, 0.62),
              color: explosionColors[Math.floor(Math.random() * 4)],
            };
          }),
          ringTtl: 0,
          ringLife: random(0.45, 0.65),
        };
      };

      const drawMobileProjectile = (projectile) => {
        for (let i = 1; i < projectile.trail.length; i += 1) {
          const progress = i / (projectile.trail.length - 1 || 1);
          const previous = projectile.trail[i - 1];
          const point = projectile.trail[i];
          const gradient = ctx.createLinearGradient(previous.x, previous.y, point.x, point.y);
          gradient.addColorStop(0, PROJECTILE_COLORS.electric + `${0.08 + progress * 0.18})`);
          gradient.addColorStop(0.58, PROJECTILE_COLORS.hot + `${0.22 + progress * 0.34})`);
          gradient.addColorStop(1, PROJECTILE_COLORS.blue + `${0.34 + progress * 0.38})`);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.4 + progress * 2.2;
          ctx.lineCap = "round";
          ctx.shadowColor = "rgba(0,200,255,0.72)";
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.moveTo(previous.x, previous.y);
          ctx.lineTo(point.x, point.y);
          ctx.stroke();
        }

        ctx.shadowColor = "rgba(0,200,255,0.95)";
        ctx.shadowBlur = 16;
        ctx.fillStyle = PROJECTILE_COLORS.hot + "0.9)";
        ctx.beginPath();
        ctx.arc(projectile.x, projectile.y, projectile.radius * 1.45, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = PROJECTILE_COLORS.core;
        ctx.beginPath();
        ctx.arc(projectile.x, projectile.y, projectile.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      };

      const drawMobileExplosion = (explosion, dt) => {
        explosion.ringTtl += dt;
        const ringProgress = clamp(explosion.ringTtl / explosion.ringLife, 0, 1);
        const ringAlpha = 1 - ringProgress;
        ctx.strokeStyle = PROJECTILE_COLORS.hot + `${0.56 * ringAlpha})`;
        ctx.shadowColor = "rgba(0,200,255,0.68)";
        ctx.shadowBlur = 15;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.arc(explosion.x, explosion.y, 14 + ringProgress * 72, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;

        explosion.fragments.forEach((fragment) => {
          fragment.ttl += dt;
          fragment.x += fragment.vx * dt;
          fragment.y += fragment.vy * dt;
          fragment.vx *= 0.96;
          fragment.vy *= 0.96;
          fragment.rotation += fragment.spin * dt;
          const alpha = clamp(1 - fragment.ttl / fragment.life, 0, 1);
          ctx.save();
          ctx.translate(fragment.x, fragment.y);
          ctx.rotate(fragment.rotation);
          ctx.fillStyle = fragment.color + `${0.64 * alpha})`;
          ctx.fillRect(-fragment.size * 0.5, -fragment.size * 0.14, fragment.size, fragment.size * 0.28);
          ctx.restore();
        });

        explosion.particles.forEach((particle) => {
          particle.ttl += dt;
          particle.x += particle.vx * dt;
          particle.y += particle.vy * dt;
          particle.vx *= 0.97;
          particle.vy *= 0.97;
          const alpha = clamp(1 - particle.ttl / particle.life, 0, 1);
          ctx.fillStyle = particle.color + `${0.78 * alpha})`;
          ctx.shadowColor = "rgba(0,200,255,0.56)";
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * alpha, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        explosion.fragments = explosion.fragments.filter((fragment) => fragment.ttl < fragment.life);
        explosion.particles = explosion.particles.filter((particle) => particle.ttl < particle.life);

        return ringProgress < 1 || explosion.fragments.length || explosion.particles.length;
      };

      const drawMobileShip = (now, dt) => {
        if (!ship.visible) return;

        const sinceAppear = now - ship.appearStart;
        const fadeProgress = clamp((now - ship.visibleUntil) / (ship.fadeDuration * 1000), 0, 1);
        const appearProgress = clamp(sinceAppear / 80, 0, 1);
        ship.opacity = appearProgress * (1 - fadeProgress);

        if (fadeProgress >= 1) {
          ship.visible = false;
          ship.opacity = 0;
          return;
        }

        const idleOffset = Math.sin(now * 0.002) * 2.4;
        const recoilProgress = ship.recoilLife > 0 ? clamp(ship.recoilTtl / ship.recoilLife, 0, 1) : 0;
        const shakeProgress = ship.shakeLife > 0 ? clamp(ship.shakeTtl / ship.shakeLife, 0, 1) : 0;
        const rotationProgress = ship.rotateDuration
          ? clamp((now - ship.rotateStart) / (ship.rotateDuration * 1000), 0, 1)
          : 1;
        const eased = 1 - Math.pow(1 - rotationProgress, 3);
        const angleDelta = Math.atan2(
          Math.sin(ship.targetAngle - ship.startAngle),
          Math.cos(ship.targetAngle - ship.startAngle),
        );
        ship.angle = ship.startAngle + angleDelta * eased;
        ship.recoilTtl = Math.max(0, ship.recoilTtl - dt);
        ship.shakeTtl = Math.max(0, ship.shakeTtl - dt);

        const recoil = 2.8 * recoilProgress;
        const shake = Math.sin(now * 0.16) * shakeProgress;
        const perpendicular = ship.angle + Math.PI / 2;
        const renderX =
          ship.baseX -
          Math.cos(ship.angle) * recoil +
          Math.cos(perpendicular) * shake;
        const renderY =
          ship.baseY +
          idleOffset -
          Math.sin(ship.angle) * recoil +
          Math.sin(perpendicular) * shake;
        ship.x = ship.baseX;
        ship.y = ship.baseY;

        ctx.save();
        ctx.globalAlpha *= ship.opacity;
        ctx.translate(renderX, renderY);
        ctx.rotate(ship.angle);

        const exhaust = ctx.createLinearGradient(-27, 0, -9, 0);
        exhaust.addColorStop(0, `rgba(168,85,247,${0.1 + recoilProgress * 0.18})`);
        exhaust.addColorStop(0.55, `rgba(0,174,239,${0.18 + recoilProgress * 0.22})`);
        exhaust.addColorStop(1, `rgba(0,200,255,${0.26 + recoilProgress * 0.28})`);
        ctx.fillStyle = exhaust;
        ctx.shadowColor = "rgba(0,200,255,0.45)";
        ctx.shadowBlur = 11;
        ctx.beginPath();
        ctx.moveTo(-10, -4);
        ctx.lineTo(-27 - recoilProgress * 5, 0);
        ctx.lineTo(-10, 4);
        ctx.closePath();
        ctx.fill();

        ctx.shadowColor = "rgba(0,200,255,0.5)";
        ctx.shadowBlur = 10;
        ctx.fillStyle = "rgba(226,252,255,0.92)";
        ctx.strokeStyle = "rgba(0,200,255,0.82)";
        ctx.lineWidth = 1.15;
        ctx.beginPath();
        ctx.moveTo(19, 0);
        ctx.lineTo(-11, -9);
        ctx.lineTo(-6, 0);
        ctx.lineTo(-11, 9);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "rgba(45,124,255,0.78)";
        ctx.beginPath();
        ctx.arc(1, 0, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      };

      const addMobileShipBurst = (angle) => {
        for (let i = 0; i < 4; i += 1) {
          const exhaustAngle = angle + Math.PI + random(-0.3, 0.3);
          shipBursts.push({
            x: ship.baseX + Math.cos(angle + Math.PI) * random(12, 19),
            y: ship.baseY + Math.sin(angle + Math.PI) * random(12, 19),
            vx: Math.cos(exhaustAngle) * random(30, 82),
            vy: Math.sin(exhaustAngle) * random(30, 82),
            size: random(1.2, 2.4),
            ttl: 0,
            life: random(0.16, 0.26),
            color: SHIP_TRAIL_COLORS[Math.floor(Math.random() * SHIP_TRAIL_COLORS.length)],
          });
        }

        if (shipBursts.length > 10) shipBursts.splice(0, shipBursts.length - 10);
      };

      const fireMobile = (event) => {
        if (!visible || projectiles.length >= MOBILE_MAX_PROJECTILES) return;
        if (event.target.closest(INTERACTIVE_SELECTOR)) return;

        exclusionZones = getMobileExclusionZones();
        placeMobileShip();

        const point = getPoint(event);
        if (point.x < 0 || point.y < 0 || point.x > width || point.y > height) return;

        let target = null;
        let nearest = Infinity;
        const assistRadius = width < 768 ? 64 : 78;
        energies.forEach((energy) => {
          const distance = Math.hypot(energy.x - point.x, energy.y - point.y);
          if (distance < assistRadius && distance < nearest) {
            nearest = distance;
            target = energy;
          }
        });

        const aimX = target ? point.x * 0.35 + target.x * 0.65 : point.x;
        const aimY = target ? point.y * 0.35 + target.y * 0.65 : point.y;
        const angle = Math.atan2(aimY - ship.baseY, aimX - ship.baseX);
        const originX = ship.baseX + Math.cos(angle) * 20;
        const originY = ship.baseY + Math.sin(angle) * 20;
        const speed = target ? 920 : 860;

        ship.startAngle = ship.angle;
        ship.targetAngle = angle;
        ship.rotateStart = performance.now();
        ship.rotateDuration = 0.11;
        ship.recoilTtl = ship.recoilLife;
        ship.shakeTtl = ship.shakeLife;
        ship.visible = true;
        ship.appearStart = performance.now();
        ship.visibleUntil = ship.appearStart + 480;
        ship.fadeDuration = 0.2;
        addMobileShipBurst(angle);

        projectiles.push({
          x: originX,
          y: originY,
          startX: originX,
          startY: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 3.8,
          life: 1.05,
          maxDistance: Math.max(Math.max(window.innerWidth, window.innerHeight) * 0.85, 360),
          ttl: 0,
          trail: [{ x: originX, y: originY }],
        });
        muzzleFlashes.push(makeMuzzleFlash(originX, originY, angle));
        if (muzzleFlashes.length > 3) muzzleFlashes.splice(0, muzzleFlashes.length - 3);
        start();
      };

      const handlePointerDown = (event) => {
        if (event.pointerType === "mouse") return;
        tapStart = {
          x: event.clientX,
          y: event.clientY,
          time: performance.now(),
          target: event.target,
        };
      };

      const handlePointerUp = (event) => {
        if (!tapStart || event.pointerType === "mouse") {
          tapStart = null;
          return;
        }

        const distance = Math.hypot(event.clientX - tapStart.x, event.clientY - tapStart.y);
        const duration = performance.now() - tapStart.time;
        const originalTarget = tapStart.target;
        tapStart = null;

        if (distance > 12 || duration > 280) return;
        if (originalTarget?.closest?.(INTERACTIVE_SELECTOR)) return;
        fireMobile(event);
      };

      const handlePointerCancel = () => {
        tapStart = null;
      };

      const resize = () => {
        setCanvasSize();
        exclusionZones = getMobileExclusionZones();
        placeMobileShip();
        energies.length = 0;
        projectiles.length = 0;
        explosions.length = 0;
        muzzleFlashes.length = 0;
        shipBursts.length = 0;
        respawns.length = 0;
        fillMobileEnergies();
      };

      const scheduleResize = () => {
        window.clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(resize, 120);
      };

      const scheduleScrollSettled = () => {
        if (ship.visible) {
          const now = performance.now();
          ship.visibleUntil = Math.min(ship.visibleUntil, now);
          ship.fadeDuration = 0.12;
        }
        window.clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(() => {
          exclusionZones = getMobileExclusionZones();
          placeMobileShip();
          start();
        }, 140);
      };

      const start = () => {
        if (!mounted || raf || !visible) return;
        lastTime = performance.now();
        raf = requestAnimationFrame(draw);
      };

      const pause = () => {
        cancelAnimationFrame(raf);
        raf = undefined;
      };

      function draw(now) {
        if (!mounted || !visible) {
          raf = undefined;
          return;
        }

        const dt = Math.min((now - lastTime) / 1000, 0.034);
        lastTime = now;
        ctx.clearRect(0, 0, width, height);

        drawShipTrail(ctx, shipBursts, dt);

        for (let i = respawns.length - 1; i >= 0; i -= 1) {
          respawns[i].remaining -= dt;
          if (respawns[i].remaining <= 0 && energies.length < targetCount) {
            const energy = makeMobileEnergy(i + energies.length);
            if (energy) energies.push(energy);
            respawns.splice(i, 1);
          }
        }

        for (let index = energies.length - 1; index >= 0; index -= 1) {
          const energy = energies[index];
          energy.phase += dt * 0.1;
          energy.driftAngle += energy.driftTurn * dt;

          const zonePush = getExpandedZonePush(energy.x, energy.y, energy.radius, exclusionZones);
          if (zonePush) {
            energy.avoidX = clamp(energy.avoidX + zonePush.x * 36 * dt, -24, 24);
            energy.avoidY = clamp(energy.avoidY + zonePush.y * 36 * dt, -24, 24);
          } else {
            energy.avoidX *= 0.94;
            energy.avoidY *= 0.94;
          }

          energy.x +=
            (energy.vx + energy.avoidX + Math.cos(energy.driftAngle + energy.phase) * 0.6) * dt;
          energy.y +=
            (energy.vy + energy.avoidY + Math.sin(energy.driftAngle + energy.phase) * 0.6) * dt;

          const margin = energy.radius * 2.5;
          if (energy.x < margin || energy.x > width - margin) energy.vx *= -1;
          if (energy.y < margin || energy.y > height - margin) energy.vy *= -1;
          energy.x = clamp(energy.x, margin, width - margin);
          energy.y = clamp(energy.y, margin, height - margin);
          energy.alpha = clamp(energy.alpha + dt * 0.9, 0, 0.78);
          drawEnergy(ctx, energy, now);
        }

        for (let i = projectiles.length - 1; i >= 0; i -= 1) {
          const projectile = projectiles[i];
          projectile.ttl += dt;
          projectile.x += projectile.vx * dt;
          projectile.y += projectile.vy * dt;
          projectile.trail.push({ x: projectile.x, y: projectile.y });
          if (projectile.trail.length > 6) {
            projectile.trail.splice(0, projectile.trail.length - 6);
          }
          drawMobileProjectile(projectile);

          let hitIndex = -1;
          for (let j = 0; j < energies.length; j += 1) {
            const energy = energies[j];
            if (
              Math.hypot(projectile.x - energy.x, projectile.y - energy.y) <
              energy.radius + energy.hitPadding + projectile.radius
            ) {
              hitIndex = j;
              break;
            }
          }

          if (hitIndex >= 0) {
            const [energy] = energies.splice(hitIndex, 1);
            projectiles.splice(i, 1);
            if (explosions.length >= MOBILE_MAX_EXPLOSIONS) explosions.shift();
            explosions.push(makeMobileExplosion(energy));
            respawns.push({ remaining: random(3, 6) });
            continue;
          }

          if (
            projectile.ttl > projectile.life ||
            Math.hypot(projectile.x - projectile.startX, projectile.y - projectile.startY) > projectile.maxDistance ||
            projectile.x < -40 ||
            projectile.y < -40 ||
            projectile.x > width + 40 ||
            projectile.y > height + 40
          ) {
            projectiles.splice(i, 1);
          }
        }

        for (let i = explosions.length - 1; i >= 0; i -= 1) {
          if (!drawMobileExplosion(explosions[i], dt)) {
            explosions.splice(i, 1);
          }
        }

        for (let i = muzzleFlashes.length - 1; i >= 0; i -= 1) {
          if (!drawMuzzleFlash(ctx, muzzleFlashes[i], dt)) {
            muzzleFlashes.splice(i, 1);
          }
        }

        drawMobileShip(now, dt);
        raf = requestAnimationFrame(draw);
      }

      resize();
      window.addEventListener("resize", scheduleResize);
      window.addEventListener("scroll", scheduleScrollSettled, { passive: true });
      container.addEventListener("pointerdown", handlePointerDown, { passive: true });
      container.addEventListener("pointerup", handlePointerUp, { passive: true });
      container.addEventListener("pointercancel", handlePointerCancel, { passive: true });

      const resizeObserver = window.ResizeObserver
        ? new ResizeObserver(scheduleResize)
        : null;
      resizeObserver?.observe(container);

      const handleVisibility = () => {
        visible = !document.hidden;
        if (visible) start();
        else pause();
      };
      document.addEventListener("visibilitychange", handleVisibility);
      start();

      return () => {
        mounted = false;
        pause();
        window.clearTimeout(resizeTimeout);
        window.clearTimeout(scrollTimeout);
        window.removeEventListener("resize", scheduleResize);
        window.removeEventListener("scroll", scheduleScrollSettled);
        container.removeEventListener("pointerdown", handlePointerDown);
        container.removeEventListener("pointerup", handlePointerUp);
        container.removeEventListener("pointercancel", handlePointerCancel);
        document.removeEventListener("visibilitychange", handleVisibility);
        resizeObserver?.disconnect();
        energies.length = 0;
        projectiles.length = 0;
        explosions.length = 0;
        muzzleFlashes.length = 0;
        shipBursts.length = 0;
        respawns.length = 0;
      };
    }

    let raf;
    let mounted = true;
    let visible = !document.hidden;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let lastTime = performance.now();
    let width = 0;
    let height = 0;
    let targetCount = 0;
    let resizeTimeout;
    let lastTrailTime = 0;
    const cursorTarget = canvas.parentElement;
    const previousCursor = cursorTarget?.style.cursor ?? "";

    const energies = [];
    const projectiles = [];
    const explosions = [];
    const impacts = [];
    const shipTrail = [];
    const muzzleFlashes = [];
    const contactPulses = [];
    const respawns = [];
    let exclusionZones = [];
    const ship = {
      x: 0,
      y: 0,
      previousX: 0,
      previousY: 0,
      angle: -Math.PI / 7,
      speed: 0,
      smoothedSpeed: 0,
      vx: 0,
      vy: 0,
      lastMoveTime: 0,
      active: false,
      overInteractive: false,
      recoilKick: 0,
      recoilTtl: 0,
      recoilLife: 0.12,
      shakeStrength: 0,
      shakeTtl: 0,
      shakeLife: 0.12,
    };

    const setCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const getExclusionZones = () => {
      const baseRect = container.getBoundingClientRect();
      const selectors = [
        "h1",
        "h2",
        "h3",
        "h4",
        "p",
        "a",
        "button",
        "img",
        "article",
        "input",
        "select",
        "textarea",
        "[role='button']",
        "[data-energy-safe-zone='true']",
      ];

      const zones = Array.from(container.querySelectorAll(selectors.join(","))).map((node) => {
        const rect = node.getBoundingClientRect();
        return {
          x: rect.left - baseRect.left,
          y: rect.top - baseRect.top,
          width: rect.width,
          height: rect.height,
        };
      });

      const navbar = document.querySelector("header");
      if (navbar) {
        const rect = navbar.getBoundingClientRect();
        zones.push({
          x: rect.left - baseRect.left,
          y: rect.top - baseRect.top,
          width: rect.width,
          height: rect.height,
        });
      }

      return zones;
    };

    const fillEnergies = () => {
      targetCount = width < 1024 ? 7 : 15;
      let attempts = 0;
      while (energies.length < targetCount && attempts < targetCount * 6) {
        const energy = makeEnergy(width, height, exclusionZones, energies, energies.length + attempts);
        if (energy) energies.push(energy);
        attempts += 1;
      }
      if (energies.length > targetCount) {
        energies.splice(targetCount);
      }
    };

    const resize = () => {
      setCanvasSize();
      exclusionZones = getExclusionZones();
      energies.length = 0;
      respawns.length = 0;
      impacts.length = 0;
      shipTrail.length = 0;
      muzzleFlashes.length = 0;
      contactPulses.length = 0;
      fillEnergies();
    };

    const scheduleResize = () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(resize, 120);
    };

    const start = () => {
      if (!mounted || raf || !visible) return;
      lastTime = performance.now();
      raf = requestAnimationFrame(draw);
    };

    const pause = () => {
      cancelAnimationFrame(raf);
      raf = undefined;
    };

    const getPoint = (event) => {
      const rect = container.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const addShipTrail = (x, y, angle, speed, now) => {
      const speedFactor = clamp((speed - 80) / 980, 0, 1);
      const interval = 54 - speedFactor * 39;
      if (now - lastTrailTime < interval) return;
      lastTrailTime = now;

      const count = speedFactor > 0.74 ? 4 : speedFactor > 0.42 ? 3 : speedFactor > 0.16 ? 2 : 1;
      const baseDistance = 9 + speedFactor * 18;
      const spreadAmount = 0.18 + speedFactor * 0.28;
      const particleLife = random(0.18 + speedFactor * 0.17, 0.26 + speedFactor * 0.24);

      for (let i = 0; i < count; i += 1) {
        const spread = random(-spreadAmount, spreadAmount);
        const distance = random(baseDistance, baseDistance + 8 + speedFactor * 12);
        const exhaustAngle = angle + Math.PI + spread;
        const colorIndex =
          speedFactor > 0.58 && Math.random() > 0.28
            ? Math.floor(random(0, 3))
            : Math.floor(Math.random() * SHIP_TRAIL_COLORS.length);

        shipTrail.push({
          x: x + Math.cos(angle + Math.PI) * distance + random(-2, 2),
          y: y + Math.sin(angle + Math.PI) * distance + random(-2, 2),
          vx: Math.cos(exhaustAngle) * random(16 + speedFactor * 28, 42 + speedFactor * 92),
          vy: Math.sin(exhaustAngle) * random(16 + speedFactor * 28, 42 + speedFactor * 92),
          size: random(1 + speedFactor * 0.6, 1.9 + speedFactor * 1.5),
          ttl: 0,
          life: particleLife,
          alpha: random(0.24 + speedFactor * 0.24, 0.42 + speedFactor * 0.38),
          glow: random(5 + speedFactor * 6, 8 + speedFactor * 12),
          glowColor:
            speedFactor > 0.55
              ? "rgba(0,174,239,0.62)"
              : "rgba(0,200,255,0.35)",
          color: SHIP_TRAIL_COLORS[colorIndex],
        });
      }

      if (shipTrail.length > MAX_SHIP_TRAIL_PARTICLES) {
        shipTrail.splice(0, shipTrail.length - MAX_SHIP_TRAIL_PARTICLES);
      }
    };

    const moveShip = (event) => {
      const point = getPoint(event);
      const overInteractive = Boolean(event.target.closest(INTERACTIVE_SELECTOR));
      ship.overInteractive = overInteractive;
      if (cursorTarget) cursorTarget.style.cursor = overInteractive ? "auto" : "none";

      if (point.x < 0 || point.y < 0 || point.x > width || point.y > height) {
        ship.active = false;
        return;
      }

      const now = performance.now();
      const previousX = ship.active ? ship.x : point.x;
      const previousY = ship.active ? ship.y : point.y;
      const dx = point.x - previousX;
      const dy = point.y - previousY;
      const distance = Math.hypot(dx, dy);
      const elapsed = ship.lastMoveTime ? Math.max((now - ship.lastMoveTime) / 1000, 0.016) : 0.016;
      const currentSpeed = clamp(distance / elapsed, 0, 1400);
      ship.lastMoveTime = now;

      ship.previousX = previousX;
      ship.previousY = previousY;
      ship.x = point.x;
      ship.y = point.y;
      ship.vx = dx / elapsed;
      ship.vy = dy / elapsed;
      ship.speed = currentSpeed;
      ship.smoothedSpeed += (currentSpeed - ship.smoothedSpeed) * 0.28;
      if (distance > 0.8) {
        ship.angle = Math.atan2(dy, dx);
        if (!overInteractive) {
          addShipTrail(ship.x, ship.y, ship.angle, ship.smoothedSpeed, now);
        }
      }
      ship.active = true;
      start();
    };

    const leaveShip = () => {
      ship.active = false;
      ship.overInteractive = false;
      if (cursorTarget) cursorTarget.style.cursor = previousCursor;
    };

    const fire = (event) => {
      if (!visible || projectiles.length >= MAX_PROJECTILES) return;
      if (event.target.closest(INTERACTIVE_SELECTOR)) return;

      const point = getPoint(event);
      if (point.x < 0 || point.y < 0 || point.x > width || point.y > height) return;

      if (!ship.active) {
        ship.x = point.x;
        ship.y = point.y;
        ship.active = true;
      }

      let target = null;
      let nearest = Infinity;
      const assistRadius = width < 1024 ? 118 : 156;
      const originAngle = ship.angle;
      const originX = ship.x + Math.cos(originAngle) * 20;
      const originY = ship.y + Math.sin(originAngle) * 20;

      energies.forEach((energy) => {
        const distance = Math.hypot(energy.x - point.x, energy.y - point.y);
        if (distance < assistRadius && distance < nearest) {
          nearest = distance;
          target = energy;
        }
      });

      const angle = target ? Math.atan2(target.y - originY, target.x - originX) : originAngle;
      const speed = target ? 980 : 860;

      projectiles.push({
        x: originX,
        y: originY,
        startX: originX,
        startY: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 5.6,
        life: target ? 1.15 : 1,
        maxDistance: Math.max(window.innerWidth * 1.05, 760),
        ttl: 0,
        target,
        trail: [{ x: originX, y: originY }],
      });
      muzzleFlashes.push(makeMuzzleFlash(originX, originY, angle));
      ship.recoilKick = clamp(Math.max(ship.recoilKick * 0.45, 3.1) + 0.35, 0, 4);
      ship.recoilTtl = ship.recoilLife;
      ship.shakeStrength = clamp(Math.max(ship.shakeStrength * 0.4, 1.45) + 0.25, 0, 2);
      ship.shakeTtl = ship.shakeLife;

      start();
    };

    const drawProjectile = (projectile) => {
      const trail = projectile.trail;

      for (let i = 1; i < trail.length; i += 1) {
        const progress = i / (trail.length - 1 || 1);
        const previous = trail[i - 1];
        const point = trail[i];
        const gradient = ctx.createLinearGradient(previous.x, previous.y, point.x, point.y);
        gradient.addColorStop(0, PROJECTILE_COLORS.electric + `${0.02 + progress * 0.18})`);
        gradient.addColorStop(0.55, PROJECTILE_COLORS.hot + `${0.12 + progress * 0.36})`);
        gradient.addColorStop(1, PROJECTILE_COLORS.blue + `${0.2 + progress * 0.46})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.8 + progress * 2.4;
        ctx.lineCap = "round";
        ctx.shadowColor = "rgba(0,200,255,0.58)";
        ctx.shadowBlur = 9;
        ctx.beginPath();
        ctx.moveTo(previous.x, previous.y);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
      }

      ctx.shadowColor = "rgba(0,200,255,0.92)";
      ctx.shadowBlur = 20;
      ctx.fillStyle = PROJECTILE_COLORS.hot + "0.92)";
      ctx.beginPath();
      ctx.arc(projectile.x, projectile.y, projectile.radius * 1.45, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = PROJECTILE_COLORS.core;
      ctx.beginPath();
      ctx.arc(projectile.x, projectile.y, projectile.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const drawExplosion = (explosion, dt) => {
      explosion.ringTtl += dt;

      if (explosion.flash > 0) {
        const flashAlpha = explosion.flash / 0.18;
      ctx.fillStyle = `rgba(0,200,255,${0.38 * flashAlpha})`;
      ctx.shadowColor = "rgba(0,200,255,0.9)";
      ctx.shadowBlur = 28;
      ctx.beginPath();
      ctx.arc(explosion.x, explosion.y, 52 * (1 - flashAlpha * 0.18), 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(238,252,255,${0.2 * flashAlpha})`;
        ctx.beginPath();
        ctx.arc(explosion.x, explosion.y, 18 * flashAlpha, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        explosion.flash -= dt;
      }

      if (explosion.collapse > 0) {
        const collapseAlpha = explosion.collapse / 0.12;
        ctx.strokeStyle = `rgba(0,174,239,${0.42 * collapseAlpha})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(explosion.x, explosion.y, 22 - collapseAlpha * 8, 0, Math.PI * 2);
        ctx.stroke();
        explosion.collapse -= dt;
      }

      const ringProgress = clamp(explosion.ringTtl / explosion.ringLife, 0, 1);
      ctx.strokeStyle = PROJECTILE_COLORS.hot + `${0.5 * (1 - ringProgress)})`;
      ctx.shadowColor = "rgba(0,200,255,0.58)";
      ctx.shadowBlur = 14;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.arc(explosion.x, explosion.y, 14 + ringProgress * 88, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;

      explosion.fragments.forEach((fragment) => {
        fragment.ttl += dt;
        fragment.x += fragment.vx * dt;
        fragment.y += fragment.vy * dt;
        fragment.vx *= 0.96;
        fragment.vy *= 0.96;
        fragment.rotation += fragment.spin * dt;

        const alpha = clamp(1 - fragment.ttl / fragment.life, 0, 1);
        ctx.save();
        ctx.translate(fragment.x, fragment.y);
        ctx.rotate(fragment.rotation);
        ctx.fillStyle = fragment.color + `${0.58 * alpha})`;
        ctx.shadowColor = "rgba(0,200,255,0.45)";
        ctx.shadowBlur = 16;
        ctx.fillRect(-fragment.size * 0.5, -fragment.size * 0.16, fragment.size, fragment.size * 0.32);
        ctx.restore();
      });

      explosion.particles.forEach((particle) => {
        particle.ttl += dt;
        particle.x += particle.vx * dt;
        particle.y += particle.vy * dt;
        particle.vx *= 0.975;
        particle.vy *= 0.975;

        const alpha = clamp(1 - particle.ttl / particle.life, 0, 1);
        ctx.fillStyle = particle.color + `${0.72 * alpha})`;
        ctx.shadowColor = "rgba(0,200,255,0.46)";
        ctx.shadowBlur = 11;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * alpha, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      explosion.fragments = explosion.fragments.filter((fragment) => fragment.ttl < fragment.life);
      explosion.particles = explosion.particles.filter((particle) => particle.ttl < particle.life);

      return explosion.ringTtl < explosion.ringLife || explosion.fragments.length || explosion.particles.length;
    };

    function draw(now) {
      if (!mounted || !visible) {
        raf = undefined;
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.034);
      lastTime = now;
      ctx.clearRect(0, 0, width, height);

      drawShipTrail(ctx, shipTrail, dt);
      ship.smoothedSpeed *= 0.94;
      ship.recoilTtl = Math.max(0, ship.recoilTtl - dt);
      ship.shakeTtl = Math.max(0, ship.shakeTtl - dt);
      if (ship.recoilTtl <= 0) ship.recoilKick = 0;
      if (ship.shakeTtl <= 0) ship.shakeStrength = 0;

      for (let i = respawns.length - 1; i >= 0; i -= 1) {
        respawns[i].remaining -= dt;
        if (respawns[i].remaining <= 0 && energies.length < targetCount) {
          const energy = makeEnergy(width, height, exclusionZones, energies, i + energies.length);
          if (energy) energies.push(energy);
          respawns.splice(i, 1);
        }
      }

      for (let index = energies.length - 1; index >= 0; index -= 1) {
        const energy = energies[index];
        energy.phase += dt * 0.12;
        energy.driftAngle += energy.driftTurn * dt;
        energy.contactCooldown = Math.max(0, energy.contactCooldown - dt);
        energy.impactTtl = Math.max(0, energy.impactTtl - dt);

        if (ship.active && !ship.overInteractive && energy.contactCooldown <= 0) {
          const dx = energy.x - ship.x;
          const dy = energy.y - ship.y;
          const distance = Math.hypot(dx, dy) || 1;
          const contactDistance = energy.radius + SHIP_COLLISION_RADIUS;
          const shipSpeed = Math.hypot(ship.vx, ship.vy);

          if (distance < contactDistance && shipSpeed > 18) {
            const directionX = ship.vx / shipSpeed;
            const directionY = ship.vy / shipSpeed;
            const speedFactor = clamp((ship.smoothedSpeed - 80) / 1050, 0, 1);
            const massFactor = getEnergyImpactMassFactor(energy.radius);
            const impactStrength = clamp(18 + speedFactor * 44, 12, MAX_ENERGY_IMPACT_SPEED) * massFactor;

            energy.impulseVX += directionX * impactStrength;
            energy.impulseVY += directionY * impactStrength;

            const impulseSpeed = Math.hypot(energy.impulseVX, energy.impulseVY) || 1;
            const maxImpulseSpeed = MAX_ENERGY_IMPACT_SPEED * massFactor;
            if (impulseSpeed > maxImpulseSpeed) {
              energy.impulseVX = (energy.impulseVX / impulseSpeed) * maxImpulseSpeed;
              energy.impulseVY = (energy.impulseVY / impulseSpeed) * maxImpulseSpeed;
            }

            const contactX = ship.x + (dx / distance) * SHIP_COLLISION_RADIUS;
            const contactY = ship.y + (dy / distance) * SHIP_COLLISION_RADIUS;
            energy.contactCooldown = ENERGY_CONTACT_COOLDOWN;
            energy.impactTtl = energy.impactLife;
            energy.impactAngle = Math.atan2(directionY, directionX);
            energy.impactAmount = clamp(0.45 + speedFactor * 0.55, 0.45, 1);
            if (contactPulses.length >= MAX_CONTACT_PULSES) contactPulses.shift();
            contactPulses.push(makeContactPulse(contactX, contactY, energy.impactAngle, energy.impactAmount));
          }
        }

        const driftX = Math.cos(energy.driftAngle + energy.phase) * 1.5 * dt;
        const driftY = Math.sin(energy.driftAngle * 0.84 + energy.phase) * 1.5 * dt;
        energy.vx += driftX;
        energy.vy += driftY;
        energy.impulseVX *= Math.pow(0.055, dt);
        energy.impulseVY *= Math.pow(0.055, dt);

        for (let otherIndex = 0; otherIndex < energies.length; otherIndex += 1) {
          if (otherIndex === index) continue;
          const other = energies[otherIndex];
          const minDistance = getMinimumEnergyDistance(energy, other);
          const dx = energy.x - other.x;
          const dy = energy.y - other.y;
          const distance = Math.hypot(dx, dy) || 1;

          if (distance < minDistance) {
            const push = ((minDistance - distance) / minDistance) * 18 * dt;
            energy.vx += (dx / distance) * push;
            energy.vy += (dy / distance) * push;
          }
        }

        const margin = energy.radius * 3;
        if (energy.x < margin) energy.vx += 18 * dt;
        else if (energy.x > width - margin) energy.vx -= 18 * dt;
        if (energy.y < margin) energy.vy += 18 * dt;
        else if (energy.y > height - margin) energy.vy -= 18 * dt;

        let nextX = energy.x + (energy.vx + energy.impulseVX) * dt + energy.avoidX * dt;
        let nextY = energy.y + (energy.vy + energy.impulseVY) * dt + energy.avoidY * dt;
        const zonePush = getExpandedZonePush(nextX, nextY, energy.radius, exclusionZones);

        if (zonePush) {
          const dx = zonePush.x;
          const dy = zonePush.y;
          const enteringSpeed = energy.vx * dx + energy.vy * dy;
          if (enteringSpeed < 0) {
            energy.vx -= dx * enteringSpeed * 0.7;
            energy.vy -= dy * enteringSpeed * 0.7;
          }
          energy.impulseVX *= Math.pow(0.22, dt);
          energy.impulseVY *= Math.pow(0.22, dt);
          energy.avoidX = clamp(energy.avoidX + dx * 92 * dt, -58, 58);
          energy.avoidY = clamp(energy.avoidY + dy * 92 * dt, -58, 58);
          energy.stuckTime += dt;
        } else {
          energy.avoidX *= 0.9;
          energy.avoidY *= 0.9;
          energy.stuckTime = Math.max(0, energy.stuckTime - dt * 2);
        }

        const currentSpeed = Math.hypot(energy.vx, energy.vy) || energy.targetSpeed;
        const limitedSpeed = clamp(currentSpeed, energy.targetSpeed * 0.75, energy.targetSpeed * 1.45);
        energy.vx = (energy.vx / currentSpeed) * limitedSpeed;
        energy.vy = (energy.vy / currentSpeed) * limitedSpeed;

        nextX = clamp(energy.x + (energy.vx + energy.impulseVX) * dt + energy.avoidX * dt, margin, width - margin);
        nextY = clamp(energy.y + (energy.vy + energy.impulseVY) * dt + energy.avoidY * dt, margin, height - margin);

        if (nextX <= margin || nextX >= width - margin) {
          energy.vx *= -0.84;
          energy.impulseVX *= -0.35;
        }
        if (nextY <= margin || nextY >= height - margin) {
          energy.vy *= -0.84;
          energy.impulseVY *= -0.35;
        }

        energy.x = nextX;
        energy.y = nextY;
        energy.alpha = energy.fade === "in" ? clamp(energy.alpha + dt * 0.8, 0, 0.82) : energy.alpha;

        if (energy.stuckTime > 1.2) {
          const otherEnergies = energies.filter((_, otherIndex) => otherIndex !== index);
          const replacement = makeEnergy(width, height, exclusionZones, otherEnergies, index + energies.length);
          if (replacement) {
            energies[index] = replacement;
            continue;
          }
          energy.stuckTime = 0;
        }

        drawEnergy(ctx, energy, now);
      }

      for (let i = projectiles.length - 1; i >= 0; i -= 1) {
        const projectile = projectiles[i];
        projectile.ttl += dt;

        if (projectile.target && energies.includes(projectile.target)) {
          const desired = Math.atan2(projectile.target.y - projectile.y, projectile.target.x - projectile.x);
          const speed = Math.hypot(projectile.vx, projectile.vy);
          projectile.vx = projectile.vx * 0.86 + Math.cos(desired) * speed * 0.14;
          projectile.vy = projectile.vy * 0.86 + Math.sin(desired) * speed * 0.14;
        }

        projectile.x += projectile.vx * dt;
        projectile.y += projectile.vy * dt;
        projectile.trail.push({ x: projectile.x, y: projectile.y });
        if (projectile.trail.length > 8) {
          projectile.trail.splice(0, projectile.trail.length - 8);
        }
        drawProjectile(projectile);

        let hitIndex = -1;
        for (let j = 0; j < energies.length; j += 1) {
          const energy = energies[j];
          if (Math.hypot(projectile.x - energy.x, projectile.y - energy.y) < energy.radius + projectile.radius) {
            hitIndex = j;
            break;
          }
        }

        if (hitIndex >= 0) {
          const [energy] = energies.splice(hitIndex, 1);
          projectiles.splice(i, 1);
          if (explosions.length >= MAX_EXPLOSIONS) explosions.shift();
          if (impacts.length >= MAX_EXPLOSIONS) impacts.shift();
          impacts.push({
            x: energy.x,
            y: energy.y,
            radius: energy.radius * energy.scale,
            ttl: 0,
            life: 0.13,
          });
          explosions.push(makeExplosion(energy));
          respawns.push({ remaining: random(3, 6) });
          continue;
        }

        if (
          projectile.ttl > projectile.life ||
          Math.hypot(projectile.x - projectile.startX, projectile.y - projectile.startY) > projectile.maxDistance ||
          projectile.x < -40 ||
          projectile.y < -40 ||
          projectile.x > width + 40 ||
          projectile.y > height + 40
        ) {
          projectiles.splice(i, 1);
        }
      }

      for (let i = explosions.length - 1; i >= 0; i -= 1) {
        if (!drawExplosion(explosions[i], dt)) {
          explosions.splice(i, 1);
        }
      }

      for (let i = impacts.length - 1; i >= 0; i -= 1) {
        if (!drawImpactCollapse(ctx, impacts[i], dt)) {
          impacts.splice(i, 1);
        }
      }

      for (let i = contactPulses.length - 1; i >= 0; i -= 1) {
        if (!drawContactPulse(ctx, contactPulses[i], dt)) {
          contactPulses.splice(i, 1);
        }
      }

      for (let i = muzzleFlashes.length - 1; i >= 0; i -= 1) {
        if (!drawMuzzleFlash(ctx, muzzleFlashes[i], dt)) {
          muzzleFlashes.splice(i, 1);
        }
      }

      drawShip(ctx, ship, now);

      raf = requestAnimationFrame(draw);
    }

    resize();
    if (cursorTarget) cursorTarget.style.cursor = "none";
    window.addEventListener("resize", scheduleResize);
    container.addEventListener("click", fire);
    container.addEventListener("mousemove", moveShip);
    container.addEventListener("mouseleave", leaveShip);

    const resizeObserver = window.ResizeObserver
      ? new ResizeObserver(scheduleResize)
      : null;
    resizeObserver?.observe(container);

    const handleVisibility = () => {
      visible = !document.hidden;
      if (visible) start();
      else pause();
    };
    document.addEventListener("visibilitychange", handleVisibility);
    start();

    return () => {
      mounted = false;
      pause();
      window.clearTimeout(resizeTimeout);
      if (cursorTarget) cursorTarget.style.cursor = previousCursor;
      window.removeEventListener("resize", scheduleResize);
      container.removeEventListener("click", fire);
      container.removeEventListener("mousemove", moveShip);
      container.removeEventListener("mouseleave", leaveShip);
      document.removeEventListener("visibilitychange", handleVisibility);
      resizeObserver?.disconnect();
      energies.length = 0;
      projectiles.length = 0;
      explosions.length = 0;
      impacts.length = 0;
      shipTrail.length = 0;
      muzzleFlashes.length = 0;
      contactPulses.length = 0;
      respawns.length = 0;
    };
  }, [containerRef, disabled, isTouchMode]);

  if (disabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${isTouchMode ? "z-[2]" : "z-40"}`}
    />
  );
}
