import React, { useMemo, useState } from "react";

import ReactSpringGallery from "./ReactSpringGallery";

const allowedImageExtensions = [`png`, `jpeg`, `webp`, `tiff`];
const parseMimeType = (mime) => {
  if (!mime) return {};
  const splittedMime = mime?.split(`/`);

  const type = splittedMime[0];
  const ext = splittedMime[1];
  let renderType = type;

  if (type === `image` && !allowedImageExtensions.includes(ext)) {
    renderType = `file`;
  }

  if (type !== `image` && type !== `video`) {
    renderType = `file`;
  }

  return { type, ext, renderType };
};

const MediaGallery = ({ media }) => {
  const [show, setShow] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        overflow: "hidden",
        borderRadius: "40px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          paddingBottom: "45%",
          position: "relative",
          borderRadius: "40px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
          }}
        >
          <ReactSpringGallery
            activeSlide={activeSlideIndex}
            setActiveSlide={setActiveSlideIndex}
            media={media}
            setShow={setShow}
          />
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;
