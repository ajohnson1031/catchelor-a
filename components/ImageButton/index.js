import Button from "react-bootstrap/Button";

import React from "react";

const ImageButton = ({
  variant = "primary",
  buttonText = "button",
  onButtonClick = () => {},
}) => {
  return (
    <Button variant={variant} onClick={onButtonClick}>
      {buttonText}
    </Button>
  );
};

export default ImageButton;
