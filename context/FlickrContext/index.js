import { createContext, useContext, useState } from "react";
import Flickr from "flickr-sdk/services/rest";
import { _searchParams } from "@/constants/index";

const FlickrContext = createContext({});

const FlickrContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [photoNumber, setPhotoNumber] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  /** TODO: Add liked cats to localStorage so they can be displayed or filtered out. (like/dislike)
   * Store ID number of photo to handle filtering.
   */

  const requestPhotos = async (pageNumber) => {
    try {
      const flickr = new Flickr(process.env.NEXT_PUBLIC_FLICKR_KEY);
      const results = await flickr.photos.search({
        ..._searchParams,
        page: pageNumber,
      });
      const { photo } = results.body.photos;

      setPhotos(photo);
      setPhotoNumber(0);
      setCurrentPhoto(photo[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const nextPhoto = () => {
    if (photoNumber >= _searchParams.per_page) {
      requestPhotos(pageNumber + 1);
      setPageNumber(pageNumber + 1);
    } else {
      setCurrentPhoto(photos[photoNumber + 1]);
      setPhotoNumber(photoNumber + 1);
    }
  };

  const prevPhoto = () => {
    if (photoNumber <= 0) {
      requestPhotos(pageNumber - 1);
      setPageNumber(pageNumber - 1);
    } else {
      setCurrentPhoto(photos[photoNumber - 1]);
      setPhotoNumber(photoNumber - 1);
    }
  };

  return (
    <FlickrContext.Provider
      value={{
        photos,
        currentPhoto,
        photoNumber,
        pageNumber,
        setPhotos,
        setCurrentPhoto,
        setPhotoNumber,
        setPageNumber,
        requestPhotos,
        nextPhoto,
        prevPhoto,
      }}
    >
      {children}
    </FlickrContext.Provider>
  );
};

const useFlickrContext = () => useContext(FlickrContext);

export { FlickrContextProvider, useFlickrContext };
