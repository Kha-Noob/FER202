// src/pages/HomePage.jsx
import React, { useState, useMemo } from "react";
import MyNavBar from "../components/NavBar/MyNavBar";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import Filter from "../components/Movies/Filter";
import MovieCard from "../components/Movies/MovieCard";
import { movies as ALL_MOVIES } from "../data/movies";
import { Container, Row, Col } from "react-bootstrap";

export default function HomePage() {
  const [filter, setFilter] = useState({ search: "", year: "", sort: "" });

  const filtered = useMemo(() => {
    let res = [...ALL_MOVIES];

    const s = (filter.search || "").trim().toLowerCase();
    if (s) {
      res = res.filter(m => (m.title + " " + m.description).toLowerCase().includes(s));
    }

    if (filter.year) {
      if (filter.year === "<=2000") res = res.filter(m => m.year <= 2000);
      else if (filter.year === "2001-2015") res = res.filter(m => m.year >= 2001 && m.year <= 2015);
      else if (filter.year === ">2015") res = res.filter(m => m.year > 2015);
    }

    if (filter.sort) {
      if (filter.sort === "yearAsc") res.sort((a,b)=> a.year - b.year);
      if (filter.sort === "yearDesc") res.sort((a,b)=> b.year - a.year);
      if (filter.sort === "titleAsc") res.sort((a,b)=> a.title.localeCompare(b.title));
      if (filter.sort === "titleDesc") res.sort((a,b)=> b.title.localeCompare(a.title));
      if (filter.sort === "durationAsc") res.sort((a,b)=> a.duration - b.duration);
      if (filter.sort === "durationDesc") res.sort((a,b)=> b.duration - a.duration);
    }

    return res;
  }, [filter]);

  return (
    <>
      <MyNavBar />
      <HomeCarousel />

      <Container className="mt-4">
        <Filter onChange={(f)=>setFilter(f)} />
        <h4 className="mb-3">Featured Movies Collections</h4>
        <Row xs={1} md={2} lg={3} className="g-4">
          {filtered.map(m => (
            <Col key={m.id}>
              <MovieCard {...m} img={m.poster} text={m.description} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
