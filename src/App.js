import "./styles.css";
import React from "react";

export default function App() {
  const images = [
    "https://images.pexels.com/photos/1405982/pexels-photo-1405982.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2228561/pexels-photo-2228561.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1982966/pexels-photo-1982966.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1436621/pexels-photo-1436621.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const [showImage, setShowImage] = React.useState(0);

  React.useEffect(() => {
    if (showImage === 0 || showImage < images.length - 1) {
      setTimeout(() => {
        setShowImage((prev) => prev + 1);
      }, 5000);
    }
    if (showImage === images.length - 1) {
      setTimeout(() => {
        setShowImage((prev) => 0);
      }, 5000);
    }
  }, [showImage, images.length]);

  return (
    <>
      <h3>IMAGE SLIDESHOW SHOWING BLACK GIRLS</h3>
      <p>Simple image slider done with React</p>

      <div className="App">
        {/* {images.map(image => (
         <img src={image} />
       ))} */}
        {showImage === 0 ? (
          <button onClick={() => setShowImage((prev) => images.length - 1)}>
            Prev
          </button>
        ) : (
          <button onClick={() => setShowImage((prev) => prev - 1)}>Prev</button>
        )}
        <img src={images[showImage]} alt="images" />
        {showImage === images.length - 1 ? (
          <button onClick={() => setShowImage((prev) => 0)}>Next</button>
        ) : (
          <button onClick={() => setShowImage((prev) => prev + 1)}>Next</button>
        )}
      </div>
    </>
  );
}
