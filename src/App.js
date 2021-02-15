import React, { useEffect, useState } from "react";
import "./App.css";
import Photo from "./Photo";

const App = () => {
  const API_KEY = "20279966-ef51efcaa6fd4b1fb2286df56";

  //State
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("yellow+flowers");

  //Effect
  useEffect(() => {
    getPhotos();
  }, [query]);

  //APIの取得
  const getPhotos = async () => {
    const response = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`
    );
    const data = await response.json();
    setPhotos(data.hits);
  };

  //Event
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
    
      <div className="header">
        <a href="https://pixabay.com/">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} />
        </a>
      </div>

      <div className="search-place">
        <form onSubmit={getSearch} className="search-form">
          <input
            type="text"
            className="search-bar"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-btn" type="submit">
            <i className="fas fa-search"></i>
            Search
          </button>
        </form>
      </div>

      <div className="images">
        {photos.map((photo) => (
          <Photo
            key={photo.id}
            username={photo.user}
            image={photo.webformatURL}
            type={photo.type}
            url={photo.largeImageURL}
          />
        ))};
      </div>

    </div>
  );
};
export default App;
