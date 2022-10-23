import React, { useEffect } from "react";
import { useFlickrContext } from "@/context/FlickrContext";
import Image from "next/image";
import styles from "./image.module.css";

const ImageContainer = () => {
  const { currentPhoto, requestPhotos } = useFlickrContext();

  const imgSrc = currentPhoto
    ? `https://live.staticflickr.com/${currentPhoto.server}/${currentPhoto.id}_${currentPhoto.secret}.jpg`
    : "";

  useEffect(() => {
    requestPhotos();
  }, []);

  return (
    <div>
      {currentPhoto && (
        <Image
          src={imgSrc}
          className={styles.img}
          alt={currentPhoto.title}
          width={300}
          height={300}
        />
      )}
    </div>
  );
};

export default ImageContainer;
