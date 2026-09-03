import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
  Video,
  Img,
  staticFile,
} from 'remotion';
import {C_CYAN, C_WHITE, type SceneData} from './timeline';

// Faixa de blur no topo (esconde nome/email/foto do header do app).
// Aplicada sempre dentro do app, EXCETO no menu.
const TopBlur: React.FC<{heightPct?: number}> = ({heightPct = 22}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: `${heightPct}%`,
        zIndex: 5,
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        // gradiente suave na borda inferior para não criar um corte seco
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.28) 60%, rgba(0,0,0,0) 100%)',
      }}
    />
  );
};

// ----- Conteúdo interno da TELA do mockup (print/vídeo/logo/hotspot) -----
export const ScreenContent: React.FC<{scene: SceneData}> = ({scene}) => {
  return (
    <AbsoluteFill style={{overflow: 'hidden', background: '#000'}}>
      {scene.kind === 'print' && <PrintContent scene={scene} />}
      {scene.kind === 'video' && (
        <Video
          src={staticFile(scene.src ?? 'videocameras.mp4')}
          startFrom={Math.round((scene.videoStartSec ?? 0) * 30)}
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
      )}
      {scene.kind === 'logo' && <LogoContent />}

      {/* Blur no topo: videos sempre; prints exceto menu */}
      {(scene.kind === 'video' || (scene.kind === 'print' && scene.rec !== 'menu')) && (
        <TopBlur />
      )}
    </AbsoluteFill>
  );
};

// ----- Tipografia da cena (renderizada FORA do mockup) -----
export const Caption: React.FC<{scene: SceneData}> = ({scene}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const durFrames = Math.round(scene.durationSec * fps);

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
    <div
      style={{
        position: 'absolute',
        left: '50%',
        bottom: 90,
        transform: 'translateX(-50%)',
        opacity: fadeOut,
        textAlign: 'center',
        width: '100%',
        padding: '0 40px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: 800,
          color: C_WHITE,
          fontFamily: 'Inter, DejaVu Sans, sans-serif',
          letterSpacing: -1.5,
          lineHeight: 1.05,
          textShadow: '0 3px 18px rgba(0,0,0,0.7)',
          opacity: titleIn,
          transform: `scale(${titleIn})`,
        }}
      >
        {scene.phrase}
      </div>
      <div
        style={{
          marginTop: 14,
          fontSize: 32,
          fontWeight: 700,
          color: C_CYAN,
          fontFamily: 'Inter, DejaVu Sans, sans-serif',
          letterSpacing: 2,
          textTransform: 'uppercase',
          textShadow: '0 1px 10px rgba(0,0,0,0.7)',
          opacity: subIn,
        }}
      >
        {scene.subtitle}
      </div>
    </div>
  );
};

// Print com suporte a scroll vertical (para prints altos como o menu)
// Usa objectPosition (nativo do cover) para NUNCA revelar fundo preto.
const PrintContent: React.FC<{scene: SceneData}> = ({scene}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const durFrames = Math.round(scene.durationSec * fps);

  const p = scene.scroll
    ? interpolate(frame, [0, durFrames], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.inOut(Easing.cubic),
      })
    : 0;

  return (
    <div style={{position: 'absolute', inset: 0, overflow: 'hidden', background: '#000'}}>
      <Img
        src={staticFile(`prints_processados/${scene.rec}.png`)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: `50% ${p * 100}%`,
        }}
      />
    </div>
  );
};

// Logo de encerramento (fundo branco no display + logo central, sem texto)
const LogoContent: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 30], [0.6, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.back(1.5)),
  });
  return (
    <AbsoluteFill
      style={{
        background: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Img
        src={staticFile('logo-guardian.png')}
        style={{
          width: '66%',
          transform: `scale(${scale})`,
        }}
      />
    </AbsoluteFill>
  );
};