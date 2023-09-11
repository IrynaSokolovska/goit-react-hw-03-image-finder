import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;

// import { Gallery } from './ImageGallery.styled';
// import { ImageGalleryItem } from './ImageGalleryItem';

// export const ImageGallery = ({ hits }) => {
//   return (
//     <div>
//       <Gallery className="gallery">
//         {hits.map(({ id, largeImageURL, webformatURL, tags }) => (
//           <ImageGalleryItem
//             key={id}
//             id={id}
//             webformatURL={webformatURL}
//             largeImageURL={largeImageURL}
//             tags={tags}
//           />
//         ))}
//       </Gallery>
//     </div>
//   );
// };

// import { Gallery } from './ImageGallery.styled';
// import { ImageGalleryItem } from './ImageGalleryItem';

// export const ImageGallery = ({ hits }) => {
//   return (
//     <div>
//       <Gallery className="gallery">
//         {hits.map(({ id, largeImageURL, webformatURL, tags }) => (
//           <ImageGalleryItem
//             key={id}
//             id={id}
//             webformatURL={webformatURL}
//             largeImageURL={largeImageURL}
//             tags={tags}
//           />
//         ))}
//       </Gallery>
//     </div>
//   );
// };
