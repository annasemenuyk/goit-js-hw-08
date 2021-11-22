
import Player from '@vimeo/player'
import throttle from 'lodash.throttle'

const videoPlayer = document.querySelector('iframe')

const player = new Player(videoPlayer.player);

player.setCurrentTime(getCurrentTime())

player.on('timeupdate', throttle(onPlay, 500));

function onPlay (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data))
};

function getCurrentTime() {
    return JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds
}