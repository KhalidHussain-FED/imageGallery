import { useState } from 'react';
import './App.css';

const images = [
  "https://img.freepik.com/free-photo/girl-hat-after-shopping_23-2147688871.jpg",
  "https://img.freepik.com/free-photo/stylish-women-showing-shopping-bags_23-2147689088.jpg",
  "https://img.freepik.com/free-photo/stylish-women-showing-shopping-bags_23-2147689088.jpg",
];

function App() {
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
    <div className="App">
      <div className="image-container">
        <img src={images[currentImageIndex]} alt="current" />
        <div>
          <button onClick={prev}>Previous</button>
          <button onClick={next}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
