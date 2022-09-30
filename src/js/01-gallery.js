import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';

const galleryMarcup = document.querySelector('.gallery');

const galleryEl = galleryItems.map(({ preview, original, description }) => 
`<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>`
).join('');

galleryMarcup.insertAdjacentHTML('beforeend', galleryEl);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, captionPosition: "bottom", });
