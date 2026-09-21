import React from 'react';
import { Series } from 'remotion';
import { SetembroAmareloScene01 } from '../scenes/SetembroAmareloScene01';
import { SetembroAmareloScene02 } from '../scenes/SetembroAmareloScene02';
import { SetembroAmareloScene03 } from '../scenes/SetembroAmareloScene03';
import { SetembroAmareloScene04 } from '../scenes/SetembroAmareloScene04';
import { SetembroAmareloScene05 } from '../scenes/SetembroAmareloScene05';
import { SetembroAmareloScene06 } from '../scenes/SetembroAmareloScene06';
import { statistics } from '../data/statistics';

const totalFrames = 900; // 30 seconds × 30 FPS
const fps = 30;
const width = 1080;
const height = 1920;

export const SetembroAmarelo: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={Math.round(5 * fps)}>
        <SetembroAmareloScene01 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={Math.round(7 * fps)}>
        <SetembroAmareloScene02 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={Math.round(6 * fps)}>
        <SetembroAmareloScene03 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={Math.round(5 * fps)}>
        <SetembroAmareloScene04 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={Math.round(5 * fps)}>
        <SetembroAmareloScene05 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={Math.round(2 * fps)}>
        <SetembroAmareloScene06 />
      </Series.Sequence>
    </Series>
  );
};