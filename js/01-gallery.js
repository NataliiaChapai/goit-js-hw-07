import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const itemMakrup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', itemMakrup);
galleryRef.addEventListener('click', onGalleryItemClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    })
        .join('');
}

function onGalleryItemClick(event) {
    const isImageEl = event.target.classList.contains('gallery__image');
    const imageSrc = event.target.dataset.source;
    
    event.preventDefault();
    if (!isImageEl) {
        return;
    }
    
    const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">
    `)
    instance.show()
}




