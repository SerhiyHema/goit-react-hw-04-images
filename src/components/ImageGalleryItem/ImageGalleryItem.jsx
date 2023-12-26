const ImageGalleryItem = ({ src, alt, onClick, modal }) => {
  return (
    <li className="gallery__item">
      <img
        className="gallery__image"
        src={src}
        alt={alt}
        onClick={onClick}
        href={modal}
      />
    </li>
  );
};

export default ImageGalleryItem;
