import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryUl } from './ImageGallery.styled';

export const ImageGallery = ({
  images,
  id,
  webformatURL,
  largeImageURL,
  tags,
}) => {
  return (
    <div>
      <GalleryUl className="gallery">
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            id={id}
            image={image}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        ))}
      </GalleryUl>
    </div>
  );
};

export default ImageGallery;
