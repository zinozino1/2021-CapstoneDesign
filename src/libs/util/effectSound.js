import { Howl } from "howler";

/**
 * @author 박진호
 * @version 1.0
 * @summary 사운드 유틸함수
 */

function effectSound(src, volume = 1) {
  let sound;
  const soundInject = (src) => {
    sound = new Howl({ src });
    sound.volume(volume);
  };
  soundInject(src);
  return sound;
}

export default effectSound;
