import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
  Video,
  Img,
  staticFile,
} from 'remotion';
import {C_RED, C_DARK, C_MID, C_CYAN, C_WHITE, type SceneData} from './timeline';

// Mockup Moto G04s — viewport da tela
export const SCREEN_W = 620;
export const SCREEN_H = 1350;

// Conteúdo interno da tela (print com scroll / vídeo / logo) + tipografia da cena
export const PhoneScreen: React.FC<{scene: SceneData}> = ({scene}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const durFrames = Math.round(scene.durationSec * fps);

  // Kinetic typography (frase grande + subtítulo)
  const titleIn = interpolate(frame, [6, 22], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.back(1.2)),
  });
  const subIn = interpolate(frame, [14, 28], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const fadeOut = interpolate(frame, [durFrames - 10, durFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{overflow: 'hidden'}}>
      {/* Conteúdo da tela (dentro do mockup é renderizado aqui) */}
      {scene.kind === 'print' && (
        <PrintContent scene={scene} />
      )}
      {scene.kind === 'video' && (
        <Video src={staticFile('videocameras.mp4')} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      )}
      {scene.kind === 'logo' && <LogoContent />}

      {/* Hotspot highlight */}
      {scene.hotspot && (scene.kind === 'print' || scene.kind === 'video') && (
        <HotspotHighlight frame={frame} hotspot={scene.hotspot} color={scene.highlightColor ?? C_CYAN} />
      )}

      {/* Tipografia da cena (fora do mockup, na parte inferior) */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 120,
          transform: `translateX(-50%)`,
          opacity: fadeOut,
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: 82,
            fontWeight: 800,
            color: C_WHITE,
            fontFamily: 'Inter, DejaVu Sans, sans-serif',
            letterSpacing: -2,
            lineHeight: 1.05,
            textShadow: '0 2px 16px rgba(0,0,0,0.6)',
            opacity: titleIn,
            transform: `scale(${titleIn})`,
            maxWidth: 900,
          }}
        >
          {scene.phrase}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 36,
            fontWeight: 700,
            color: C_CYAN,
            fontFamily: 'Inter, DejaVu Sans, sans-serif',
            letterSpacing: 2,
            textTransform: 'uppercase',
            textShadow: '0 1px 8px rgba(0,0,0,0.6)',
            opacity: subIn,
          }}
        >
          {scene.subtitle}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Print com suporte a scroll vertical (para prints altos como o menu)
const PrintContent: React.FC<{scene: SceneData}> = ({scene}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const durFrames = Math.round(scene.durationSec * fps);

  // Se scroll: a imagem desliza verticalmente (de cima para baixo) durante a cena
  let objectPosition = 'top';
  let scrollTransform = 'none';
  if (scene.scroll) {
    const p = interpolate(frame, [0, durFrames], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.cubic),
    });
    // O print alto (menu 2267px) numa tela de ~1350px: desliza até revelar o fim
    objectPosition = 'top';
    scrollTransform = `translateY(${-p * 45}%)`;
  }

  return (
    <div style={{position: 'absolute', inset: 0, overflow: 'hidden'}}>
      <Img
        src={staticFile(`prints_processados/${scene.rec}.png`)}
        style={{
          width: '100%',
          height: scene.scroll ? 'auto' : '100%',
          objectFit: scene.scroll ? 'cover' : 'cover',
          objectPosition: 'top',
          transform: scrollTransform,
        }}
      />
    </div>
  );
};

// Logo de encerramento (fundo escuro de bom contraste + logo central)
const LogoContent: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 30], [0.6, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.back(1.5)),
  });
  return (
    <AbsoluteFill
      style={{
        background: C_DARK,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
      }}
    >
      <Img
        src={staticFile('logo-guardian.png')}
        style={{width: '60%', transform: `scale(${scale})`, filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))'}}
      />
      <div
        style={{
          fontSize: 30,
          fontWeight: 700,
          color: C_WHITE,
          letterSpacing: 4,
          fontFamily: 'Inter, DejaVu Sans, sans-serif',
        }}
      >
        GUARDIAN MONITORAMENTO
      </div>
    </AbsoluteFill>
  );
};

// Hotspot: linha orbitando + anel tracejado + ripple
const HotspotHighlight: React.FC<{
  frame: number;
  hotspot: NonNullable<SceneData['hotspot']>;
  color: string;
}> = ({frame, hotspot, color}) => {
  const x = hotspot.cx * SCREEN_W;
  const y = hotspot.cy * SCREEN_H;

  const rippleCycle = (frame % 45) / 45;
  const rippleScale = interpolate(rippleCycle, [0, 1], [0.3, 1.8], {easing: Easing.out(Easing.cubic)});
  const rippleOpacity = interpolate(rippleCycle, [0, 0.7], [0.9, 0], {easing: Easing.out(Easing.quad)});
  const ringRotation = frame * 3;
  const ringRadius = 34;
  const orbitAngle = (frame * 4) % 360;
  const orbitRadius = 46;

  return (
    <>
      <div
        style={{
          position: 'absolute', left: x, top: y, width: 70, height: 70, borderRadius: '50%',
          border: `3px solid ${color}`,
          boxShadow: '0 0 0 3px rgba(0,0,0,0.55), 0 0 20px rgba(0,0,0,0.5)',
          transform: `translate(-50%, -50%) scale(${rippleScale})`, opacity: rippleOpacity,
          zIndex: 6, pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', left: x, top: y, width: ringRadius * 2, height: ringRadius * 2,
          borderRadius: '50%', border: `3px dashed ${color}`,
          boxShadow: '0 0 0 3px rgba(0,0,0,0.6), 0 0 18px rgba(0,0,0,0.5)',
          transform: `translate(-50%, -50%) rotate(${ringRotation}deg)`, opacity: 0.95,
          zIndex: 6, pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: x + Math.cos((orbitAngle * Math.PI) / 180) * orbitRadius,
          top: y + Math.sin((orbitAngle * Math.PI) / 180) * orbitRadius,
          width: 12, height: 12, borderRadius: '50%', background: color,
          boxShadow: `0 0 0 3px rgba(0,0,0,0.7), 0 0 14px ${color}`,
          transform: 'translate(-50%, -50%)', zIndex: 6, pointerEvents: 'none',
        }}
      />
    </>
  );
};