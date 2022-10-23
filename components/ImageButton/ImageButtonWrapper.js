import React from "react";
import ImageButton from ".";
import { useFlickrContext } from "@/context/FlickrContext";

const ImageButtonWrapper = () => {
  const { nextPhoto, prevPhoto } = useFlickrContext();
  return (
    <div>
      <ImageButton
        buttonText="Take a moment, say your goodbyes 😢"
        onButtonClick={prevPhoto}
      />
      <ImageButton
        buttonText="Will you accept my 🌹"
        onButtonClick={nextPhoto}
      />
    </div>
  );
};

export default ImageButtonWrapper;
