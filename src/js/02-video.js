import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

const onPlay = data =>
  localStorage.setItem('videoplayer-current-time', data.seconds);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', throttle(onPlay, 1000));
