import React from 'react';
import {
  AbsoluteFill,
  Series,
  Audio,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {PhoneScene} from './PhoneScene';
import {SCENES, C_DARK, C_CYAN} from './timeline';

// Narração (3 partes, durações reais dos arquivos .wav):
//   1: 120.16s
//   2: 126.40s
//   3: 62.06s
const PART1_FRAMES = Math.round(120.16 * 30);
const PART2_FRAMES = Math.round(126.40 * 30);

export const GuardianVideo: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{background: C_DARK}}>
      <Series>
        {SCENES.map((scene) => (
          <Series.Sequence
            key={scene.id}
            durationInFrames={Math.round(scene.durationSec * 30)}
          >
            <PhoneScene scene={scene} />
          </Series.Sequence>
        ))}
      </Series>

      {/* Narração — 3 partes em sequência */}
      <Audio src={staticFile('narracao_parte1.mp3')} startFrom={0} />
      <Audio src={staticFile('narracao_parte2.mp3')} startFrom={PART1_FRAMES} />
      <Audio
        src={staticFile('narracao_parte3.mp3')}
        startFrom={PART1_FRAMES + PART2_FRAMES}
      />
    </AbsoluteFill>
  );
};