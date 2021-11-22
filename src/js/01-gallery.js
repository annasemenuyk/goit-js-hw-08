// Описан в документации
import SimpleLightbox from 'simplelightbox'
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
import pictureCardTmp from '../templates/gallery-tpl'
// Change code below this line
const list = document.querySelector('.gallery')
list.innerHTML = pictureCardTmp(galleryItems);
const captionOptions = {
    captionSelector: 'img',//установить элемент, в котором находится заголовок. Установите для самого A-Tag значение «self» или используйте обратный вызов, который возвращает элемент.
    captionType: 'attr',//как получить подпись. Вы можете выбирать между attr, data или text
    captionsData: 'alt',//получить заголовок из данного атрибута
    captionPosition: 'bottom',//положение подписи. Возможны следующие варианты: верх, низ или снаружи
    captionDelay: 250,//добавляет задержку перед отображением заголовка (в мс)
    enableKeyboard: true,//разрешить навигацию со стрелками на клавиатуре и закрыть клавишей ESC
    uniqueImages: true,//нужно ли делать изображения уникальными или нет
   };//Создание объекта
   list.addEventListener(`click`, GalleryItemClick);
function GalleryItemClick(event) {
    event.preventDefault();
}
const galleryImgA = document.querySelector('.gallery a')
galleryImgA.addEventListener(`click`, elementCaptionOptions);
function elementCaptionOptions() {
    let captionOptionsElement = {};
    return captionOptionsElement;
};
galleryImgA.addEventListener(`click`, elementCaptionOptions);
// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });
let simpleLightboxGallery = new SimpleLightbox('.gallery a', captionOptions);
simpleLightboxGallery.on('show.simplelightbox', function () {
    open// do something…
    });