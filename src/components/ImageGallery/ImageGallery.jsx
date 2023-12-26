import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  if (images.length > 0) {
    const resultImages = images.map(
      ({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          alt={tags}
          modal={largeImageURL}
          onClick={onClick}
        />
      )
    );
    return <ul className="gallery">{resultImages}</ul>;
  }
};

export default ImageGallery;
