import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from 'remotion';
import {staticFile} from 'remotion';
import {C_RED, C_DARK, C_MID, C_CYAN, C_WHITE, type SceneData} from './timeline';

const PHONE_W = 640;
const PHONE_H = 1380;
const SCREEN_W = 600;
const SCREEN_H = 1320;

// Mockup Moto G04s com destaque de botão (hotspot) via OCR
export const PhoneScene: React.FC<{scene: SceneData}> = ({scene}) => {
  const frame = useCurrentFrame();
  const {fps, width, height, durationInFrames} = useVideoConfig();

  const durFrames = Math.round(scene.durationSec * fps);

  // ----- Entrada: slide-up + overshoot -----
  const entrance = spring({
    frame,
    fps,
    config: {damping: 14, mass: 1, stiffness: 90},
  });
  const entryY = interpolate(entrance, [0, 1], [height * 0.5, 0]);

  // ----- Saída: slide-down no fim da cena -----
  const exitStart = durFrames - 18;
  const exitOut = interpolate(frame, [durFrames - 18, durFrames], [0, height * 0.6], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.in(Easing.cubic),
  });

  // ----- Hover Y contínuo -----
  const hover = Math.sin(frame / 22) * 12;

  // ----- Kinety typography -----
  const titleProgress = interpolate(frame, [8, 28], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.back(1.5)),
  });
  const subtitleProgress = interpolate(frame, [18, 36], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  // ----- Hotspot: linha circulando o botão + ripple -----
  const hs = scene.hotspot;
  const hotspotRing = hs ? (
    <HotspotHighlight frame={frame} hotspot={hs} color={scene.highlightColor ?? C_CYAN} />
  ) : null;

  return (
    <AbsoluteFill style={{background: C_DARK, overflow: 'hidden'}}>
      <MeshBackground frame={frame} />

      {/* Mockup */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: PHONE_W,
          height: PHONE_H,
          transform: `translate(-50%, -50%) translateY(${entryY + hover + exitOut}px)`,
          filter: `drop-shadow(0 ${40 + hover * 0.3}px 60px rgba(0,0,0,0.5))`,
          opacity: interpolate(frame, [durFrames - 12, durFrames], [1, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          zIndex: 2,
        }}
      >
        {/* Corpo grafite */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 44,
            background: 'linear-gradient(135deg, #2a323d 0%, #141920 100%)',
            border: '3px solid #3f4b5c',
          }}
        />
        {/* Notch câmera */}
        <div
          style={{
            position: 'absolute',
            top: 16,
            left: '50%',
            width: 70,
            height: 6,
            transform: 'translateX(-50%)',
            borderRadius: 3,
            background: '#444',
            zIndex: 3,
          }}
        />
        {/* Tela */}
        <div
          style={{
            position: 'absolute',
            inset: 22,
            borderRadius: 28,
            overflow: 'hidden',
            background: '#000',
            zIndex: 2,
          }}
        >
          <img
            src={staticFile(`prints/${scene.screenshot}.jpg`)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />

          {/* Hotspot highlight dentro da tela */}
          {hotspotRing}

          {/* Light sweep */}
          <LightSweep frame={frame} screenW={SCREEN_W} />
        </div>
      </div>

      {/* Kinetic Typography */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 130,
          transform: `translateX(-50%) translateY(${exitOut * 0.4}px)`,
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            color: C_WHITE,
            fontFamily: 'Inter, DejaVu Sans, sans-serif',
            letterSpacing: -2,
            lineHeight: 1.02,
            transform: `scale(${titleProgress})`,
            opacity: titleProgress,
          }}
        >
          {scene.phrase}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 40,
            fontWeight: 600,
            color: C_CYAN,
            fontFamily: 'Inter, DejaVu Sans, sans-serif',
            letterSpacing: 3,
            textTransform: 'uppercase',
            opacity: subtitleProgress,
          }}
        >
          {scene.subtitle}
        </div>
      </div>

      {/* Logo Guardian no rodapé (pequeno, sempre visível após entrada) */}
      <LogoBar opacity={titleProgress} />

      {/* Barra superior accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          background: C_CYAN,
          opacity: 0.9,
        }}
      />
    </AbsoluteFill>
  );
};

// ---------- Hotspot: linha animada circulando o botão + ripple ----------
const HotspotHighlight: React.FC<{
  frame: number;
  hotspot: NonNullable<SceneData['hotspot']>;
  color: string;
}> = ({frame, hotspot, color}) => {
  // Posição relativa à tela (600x1320)
  const x = hotspot.cx * SCREEN_W;
  const y = hotspot.cy * SCREEN_H;

  // Ripple pulse
  const rippleCycle = (frame % 45) / 45;
  const rippleScale = interpolate(rippleCycle, [0, 1], [0.3, 1.8], {
    easing: Easing.out(Easing.cubic),
  });
  const rippleOpacity = interpolate(rippleCycle, [0, 0.7], [0.9, 0], {
    easing: Easing.out(Easing.quad),
  });

  // Linha circular girando (dash animado)
  const ringRotation = frame * 3;
  const ringRadius = 34;
  const dashLen = 92; // comprimento do dash (fração do círculo)

  // Segunda linha orbitando (estilo "busca" circular)
  const orbitAngle = (frame * 4) % 360;
  const orbitRadius = 46;

  return (
    <>
      {/* Ripple central */}
      <div
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: 70,
          height: 70,
          borderRadius: '50%',
          border: `3px solid ${color}`,
          transform: `translate(-50%, -50%) scale(${rippleScale})`,
          opacity: rippleOpacity,
          pointerEvents: 'none',
        }}
      />

      {/* Anel tracejado girando (circulando o botão) */}
      <div
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: ringRadius * 2,
          height: ringRadius * 2,
          borderRadius: '50%',
          border: `3px dashed ${color}`,
          transform: `translate(-50%, -50%) rotate(${ringRotation}deg)`,
          opacity: 0.9,
          pointerEvents: 'none',
        }}
      />

      {/* Ponto orbital (traz a linha em movimento) */}
      <div
        style={{
          position: 'absolute',
          left: x + Math.cos((orbitAngle * Math.PI) / 180) * orbitRadius,
          top: y + Math.sin((orbitAngle * Math.PI) / 180) * orbitRadius,
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: color,
          boxShadow: `0 0 12px ${color}`,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />
    </>
  );
};

// ---------- Light sweep diagonal ----------
const LightSweep: React.FC<{frame: number; screenW: number}> = ({frame, screenW}) => {
  const sweepX = interpolate((frame % 100) / 100, [0, 1], [-200, screenW + 200]);
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: sweepX,
        width: 80,
        height: '100%',
        background: 'linear-gradient(100deg, transparent, rgba(255,255,255,0.22), transparent)',
        transform: 'skewX(-18deg)',
        zIndex: 5,
        pointerEvents: 'none',
      }}
    />
  );
};

// ---------- Mesh gradient (sem filter blur — radial já é suave, render rápido) ----------
const MeshBackground: React.FC<{frame: number}> = ({frame}) => {
  const drift = (frame / 200) * Math.PI * 2;
  return (
    <AbsoluteFill style={{overflow: 'hidden'}}>
      <div
        style={{
          position: 'absolute',
          width: '80%',
          height: '55%',
          left: `${20 + Math.sin(drift) * 8}%`,
          top: '8%',
          background: 'radial-gradient(circle at center, rgba(203,48,51,0.5), transparent 68%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '75%',
          height: '50%',
          right: `${8 + Math.cos(drift) * 10}%`,
          bottom: '4%',
          background: 'radial-gradient(circle at center, rgba(0,255,255,0.28), transparent 68%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '60%',
          height: '45%',
          left: '38%',
          top: '38%',
          background: 'radial-gradient(circle at center, rgba(4,52,76,0.9), transparent 70%)',
        }}
      />
    </AbsoluteFill>
  );
};

// ---------- Logo Guardian ----------
const LogoBar: React.FC<{opacity: number}> = ({opacity}) => (
  <div
    style={{
      position: 'absolute',
      top: 40,
      left: '50%',
      transform: 'translateX(-50%)',
      opacity,
      zIndex: 11,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
    }}
  >
    <img
      src={staticFile('logo-guardian.png')}
      style={{height: 40, objectFit: 'contain'}}
    />
    <span
      style={{
        color: C_WHITE,
        fontSize: 24,
        fontWeight: 600,
        letterSpacing: 2,
        fontFamily: 'Inter, DejaVu Sans, sans-serif',
      }}
    >
      GUARDIAN
    </span>
  </div>
);