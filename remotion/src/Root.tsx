import {Composition} from 'remotion';
import {GuardianVideo} from './scenes/GuardianVideo';
import {SCENES, TOTAL_DURATION} from './scenes/timeline';

const totalFrames = Math.round(TOTAL_DURATION * 30);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="GuardianVideo"
        component={GuardianVideo}
        durationInFrames={totalFrames}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};