import {Composition} from 'remotion';
import {GuardianVideo} from './scenes/GuardianVideo';
import {PhoneScene} from './scenes/PhoneScene';
import {SCENES} from './scenes/timeline';

const totalFrames = Math.round(SCENES.reduce((acc, s) => acc + s.durationSec, 0) * 30);

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
      <Composition
        id="PhonePreview"
        component={PhoneScene}
        durationInFrames={Math.round(SCENES[0].durationSec * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{scene: SCENES[0]}}
      />
    </>
  );
};