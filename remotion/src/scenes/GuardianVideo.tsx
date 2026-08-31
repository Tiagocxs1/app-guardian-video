import React from 'react';
import {
  AbsoluteFill,
  Series,
  Audio,
  staticFile,
} from 'remotion';
import {PhoneScene} from './PhoneScene';
import {SCENES, C_DARK} from './timeline';

// Narração completa já concatenada (308.7s) — um único áudio, sem sobreposição.
export const GuardianVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{background: C_DARK}}>
      <Series>
        {SCENES.map((scene, i) => (
          <Series.Sequence
            key={scene.id}
            durationInFrames={Math.round(scene.durationSec * 30)}
          >
            <PhoneScene scene={scene} continuing={i > 0 && SCENES[i - 1].screenshot === scene.screenshot} />
          </Series.Sequence>
        ))}
      </Series>

      {/* Narração única (concatenada) — sem gaps, sem sobreposição */}
      <Audio src={staticFile('narracao_full.mp3')} />
    </AbsoluteFill>
  );
};