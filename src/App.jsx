import React from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant,
    },
    {
      id: 2,
      img: elephant,
    },
    {
      id: 3,
      img: elephant,
    },
    {
      id: 4,
      img: elephant,
    },
  ];
  return data;
};

function App() {
  // code here
  const image = imageData();
  return (
    <div>
      <h1>Kalvium Gallery</h1>
      <div className="imagesStyle">
        {image.map((item) => (
          <div>
            <img key={item.id} src={item.img} alt={`Image ${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
