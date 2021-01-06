import React, { useState } from "react";
import "./styles.css";

export default function Full({ images }) {
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState();
  console.log({ images });

  const Modal = () => {
    return (
      <div className="modal" onClick={() => setOpen(false)}>
        <img
          src={images[openIndex].mediaItemUrl}
          alt="Wasatch Range Aviation"
        />
      </div>
    );
  };
  return (
    <div className="galleryContainer">
      {images.map((image, i) => (
        <div
          className="item"
          onClick={() => {
            return setOpen(true), setOpenIndex(i);
          }}
          style={{
            backgroundImage: `url(${image.mediaItemUrl})`,
          }}
        ></div>
      ))}
      {open && <Modal />}
    </div>
  );
}
