// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Описан в документации
import SimpleLightbox from "simplelightbox"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const item =
`<a class="gallery__item" href="large-image.jpg">
<img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> `
function createItemCards (arrey){
    return arrey.map((el)=>{
        const {description, original, preview} = el
        //console.log (el)
            return`
        <a class="gallery__item" href='${original}'>
              <img class="gallery__image" src='${preview}' alt='${description}' />
        </a>`
  })
   .join('')
}
const markup = createItemCards (galleryItems);
// console.log (markup);
const list = document.querySelector('.gallery');
list.insertAdjacentHTML("afterbegin", markup);
// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. 
// Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt.
// Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

const captionOptions = {
    captionSelector: 'img',//установить элемент, в котором находится заголовок. Установите для самого A-Tag значение «self» или используйте обратный вызов, который возвращает элемент.
    captionType: 'attr',//как получить подпись. Вы можете выбирать между attr, data или text
    captionsData: 'alt',//получить заголовок из данного атрибута
    captionPosition: 'bottom',//положение подписи. Возможны следующие варианты: верх, низ или снаружи
    captionDelay: 250,//добавляет задержку перед отображением заголовка (в мс)
    //enableKeyboard: true,//разрешить навигацию со стрелками на клавиатуре и закрыть клавишей ESC
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