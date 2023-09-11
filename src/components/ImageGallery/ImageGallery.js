import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    return (
      <ul className="gallery">
        <ImageGalleryItem />
      </ul>
    );
  }
}

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
