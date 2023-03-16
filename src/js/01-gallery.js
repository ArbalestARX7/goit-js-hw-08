import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function makeGallery(arr) {
  return arr
    .map(
      item =>
        `
           <a class="gallery__item" href="${item.original}">
               <img
                     class="gallery__image"
                     src="${item.preview}"
                     alt="${item.description}"
                />
             </a>
        `
    )
    .join('');  
}

galleryRef.insertAdjacentHTML(`beforeend`, makeGallery(galleryItems));

let gallery = new SimpleLightbox('.gallery__item', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
