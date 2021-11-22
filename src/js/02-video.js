// Ознакомься с документацией библиотеки Vimeo плеера.
// Добавь библиотеку как зависимость проекта через npm.
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
// Инициализируй плеер в файле скрипта как это описано в секции pre-existing player,
// но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
// Разбери документацию метода on() и 
// начни отслеживать событие timeupdate - обновление времени воспроизведения.
//Сохраняй время воспроизведения в локальное хранилище.
//Пусть ключом для хранилища будет строка "videoplayer-current-time".
 function onPlay (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data))  // data is an object containing properties specific to that event
};

player.on('timeupdate', throttle(onPlay, 500));
 player.setCurrentTime(getCurrentTime())
function getCurrentTime() {
    return JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds
}