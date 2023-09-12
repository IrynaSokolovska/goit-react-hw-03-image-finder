import React from 'react';
import ModalImage from 'react-modal-image';

export const ImageGalleryItem = ({ image }) => {
  return (
    <li className="gallery-item">
      <ModalImage
        small={image.webformatURL}
        large={image.largeImageURL}
        alt={image.tags}
      />
    </li>
  );
};

export default ImageGalleryItem;
