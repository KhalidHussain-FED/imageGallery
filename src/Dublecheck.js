import React, { useState } from 'react';

const images = [
  { id: 1, url: 'https://picsum.photos/200/300?random=1' },
  { id: 2, url: 'https://picsum.photos/200/300?random=2' },
  { id: 3, url: 'https://picsum.photos/200/300?random=3' },
];

export default function DoubleCheck() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const next = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <h1>Gallery</h1>
      <div>
        <button onClick={prev}>Prev</button>
        <img src={images[currentImageIndex].url} alt={`image ${currentImageIndex + 1}`} />
        <button onClick={next}>Next</button>
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={`image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
