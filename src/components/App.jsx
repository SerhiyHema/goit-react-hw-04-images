import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { getImages } from './SearchAPI/SearchAPI';
import SearchBar from './SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

export default function App() {
  const [searchName, setSearchName] = useState('');
  const [pages, setPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  useEffect(() => {
    const getSearch = async (search, page) => {
      if (!search) return;
      setIsLoading(true);

      try {
        const { totalHits, hits } = await getImages(search, page);
        if (hits.length === 0) {
          setIsEmpty(true);
        }
        setImages(images => {
          return [...images, ...hits];
        });
        setIsVisible(pages < Math.ceil(totalHits / 12));
      } catch (error) {
        console.log(`Error: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    getSearch(searchName, pages);
  }, [pages, searchName]);

  const onHandleFormSubmit = search => {
    setPages(1);
    setImages([]);
    setIsEmpty(false);
    setSearchName(search);
  };

  const onHandleLoadMore = () => {
    setPages(pages + 1);
  };

  const toggleModal = e => {
    const control = e === undefined;

    setShowModal(!showModal);
    if (!control) {
      if (e.target.localName === 'img') {
        setModalSrc(e.target.attributes.href.nodeValue);
        setModalAlt(e.target.attributes.alt.nodeValue);
      }
    }
  };

  return (
    <>
      <SearchBar onSubmit={onHandleFormSubmit} />
      <ImageGallery images={images} onClick={toggleModal} />
      {isLoading && <Loader isLoading={isLoading} />}
      {isVisible && <Button onClick={onHandleLoadMore} />}
      {showModal && (
        <Modal onClose={toggleModal} src={modalSrc} alt={modalAlt} />
      )}
      {isEmpty && (
        <span className="info">Sorry. There are no images ...😭</span>
      )}
    </>
  );
}
