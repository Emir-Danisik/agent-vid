"use client";

import React from 'react';

export const DiagonalFloatingGallery = () => {
  const images = [
    "/gallery/amenity.png",
    "/gallery/om-2.jpg",
    "/gallery/demographics.png"
  ];
  return (
    <div className="diagonal-gallery-container">
      <div className="gallery-wrapper">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery Image ${index + 1}`} className="diagonal-image" />
        ))}
      </div>
      <style jsx>{`
        .diagonal-gallery-container {
          position: absolute;
          right: 0;
          top: 0;
          overflow: hidden;
          width: 50%; /* Reducing width to align to right side */
          height: 300px; /* Adjust height as needed */
          z-index: -1;
          display: flex;
          justify-content: flex-end; /* Align content to the right */
        }
        .gallery-wrapper {
          display: flex;
          align-items: center;
          /* The animation moves the wrapper diagonally */
          animation: moveDiagonal 10s linear infinite;
        }
        .diagonal-image {
          /* Rotate each image 45 degrees */
          transform: rotate(45deg);
          margin-right: 20px;
          height: 150px; /* Increased image size */
        }
        @keyframes moveDiagonal {
          0% {
            transform: translate(-150px, -150px);
          }
          100% {
            transform: translate(150px, 150px);
          }
        }
      `}</style>
    </div>
  );
};
