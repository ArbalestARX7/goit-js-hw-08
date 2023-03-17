import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

const onPlay = data =>
  localStorage.setItem('videoplayer-current-time', data.seconds);

let currentPlayerTime = localStorage.getItem('videoplayer-current-time');

if (currentPlayerTime) {
  player.setCurrentTime(currentPlayerTime);
}

player.on('timeupdate', throttle(onPlay, 1000));
