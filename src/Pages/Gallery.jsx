import { useEffect, useState } from "react";
import "../Gallery.css";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div className="gallery-container">
      <h1>گالری تصاویر</h1>
      <div className="gallery">
        {photos.map((photo) => (
          <a
            key={photo.id}
            href={photo.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
