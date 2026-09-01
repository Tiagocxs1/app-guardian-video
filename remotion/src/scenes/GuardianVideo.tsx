import React from 'react';
import {
  AbsoluteFill,
  Series,
  Audio,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from 'remotion';
import {ScreenContent, Caption} from './PhoneScene';
import {SCENES, C_DARK} from './timeline';

// Mockup Moto G04s — dimensões
const PHONE_W = 680;
const PHONE_H = 1450;
const SCREEN_INSET = 24;

export const GuardianVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();

  // Entrada única do mockup (slide-up + overshoot)
  const entrance = spring({frame, fps, config: {damping: 14, mass: 1, stiffness: 90}});
  const entryY = interpolate(entrance, [0, 1], [height * 0.5, 0]);

  // Hover contínuo sutil
  const hover = Math.sin(frame / 25) * 10;

  return (
    <AbsoluteFill style={{background: C_DARK, overflow: 'hidden'}}>
      <MeshBackground frame={frame} />

      {/* Mockup Moto G04s (persistente) — posicionado mais baixo, mais perto da legenda */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '44%',
          width: PHONE_W,
          height: PHONE_H,
          transform: `translate(-50%, -50%) translateY(${entryY + hover}px)`,
          filter: 'drop-shadow(0 45px 60px rgba(0,0,0,0.55))',
        }}
      >
        {/* Corpo grafite */}
        <div
          style={{
            position: 'absolute', inset: 0, borderRadius: 52,
            background: 'linear-gradient(135deg, #2a323d 0%, #141920 100%)',
            border: '3px solid #3f4b5c',
          }}
        />
        {/* Notch câmera */}
        <div
          style={{
            position: 'absolute', top: 20, left: '50%', width: 74, height: 7,
            transform: 'translateX(-50%)', borderRadius: 4, background: '#444', zIndex: 5,
          }}
        />
        {/* Tela (conteúdo troca por cena — dentro do mockup) */}
        <div
          style={{
            position: 'absolute', inset: SCREEN_INSET, borderRadius: 34,
            overflow: 'hidden', background: '#000', zIndex: 2,
          }}
        >
          <Series>
            {SCENES.map((scene) => (
              <Series.Sequence key={scene.id} durationInFrames={Math.round(scene.durationSec * 30)}>
                <ScreenContent scene={scene} />
              </Series.Sequence>
            ))}
          </Series>
        </div>
      </div>

      {/* Legenda da cena (fora do mockup, no fundo inferior) — Series sincronizado */}
      <div style={{position: 'absolute', inset: 0, zIndex: 20, pointerEvents: 'none'}}>
        <Series>
          {SCENES.map((scene) => (
            <Series.Sequence key={`c-${scene.id}`} durationInFrames={Math.round(scene.durationSec * 30)}>
              <Caption scene={scene} />
            </Series.Sequence>
          ))}
        </Series>
      </div>

      {/* Narração única */}
      <Audio src={staticFile('narracao_final.mp3')} />
    </AbsoluteFill>
  );
};

// Mesh gradient de fundo
const MeshBackground: React.FC<{frame: number}> = ({frame}) => {
  const drift = (frame / 200) * Math.PI * 2;
  return (
    <AbsoluteFill style={{overflow: 'hidden'}}>
      <div style={{position:'absolute', width:'80%', height:'55%', left:`${20+Math.sin(drift)*8}%`, top:'8%', background:'radial-gradient(circle at center, rgba(203,48,51,0.5), transparent 68%)'}} />
      <div style={{position:'absolute', width:'75%', height:'50%', right:`${8+Math.cos(drift)*10}%`, bottom:'4%', background:'radial-gradient(circle at center, rgba(0,255,255,0.28), transparent 68%)'}} />
      <div style={{position:'absolute', width:'60%', height:'45%', left:'38%', top:'38%', background:'radial-gradient(circle at center, rgba(4,52,76,0.9), transparent 70%)'}} />
    </AbsoluteFill>
  );
};