// src/pages/HomePage.jsx
import React from "react";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import MovieCard from "../components/Movies/MovieCard";

export default function HomePage() {
  return (
    <div>
      <HomeCarousel />
      <div className="mt-4">
        <h4>Featured Movies Collections</h4>
        <p className="text-secondary">
          Thêm thông tin về các bộ sưu tập phim nổi bật ở đây.
        </p>
        <MovieCard />
      </div>
    </div>
  );
}
