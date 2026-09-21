import {Composition} from 'remotion';
import {GuardianVideo} from './scenes/GuardianVideo';
import {SetembroAmarelo} from './compositions/SetembroAmarelo';
import {TOTAL_DURATION} from './scenes/timeline';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="GuardianVideo"
        component={GuardianVideo}
        durationInFrames={Math.round(TOTAL_DURATION * 30)}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="SetembroAmarelo"
        component={SetembroAmarelo}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};