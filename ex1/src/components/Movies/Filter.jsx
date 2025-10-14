import React, { useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

export default function Filter({ onChange }) {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [sort, setSort] = useState("");

  const notifyChange = (s = search, y = year, so = sort) => {
    if (onChange) onChange({ search: s, year: y, sort: so });
  };

  return (
    <Card className="mb-4 p-3">
      <h5>Search / Filter / Sort</h5>
      <Row className="g-2">
        <Col md={6}>
          <Form.Control
            placeholder="Search by title or description..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); notifyChange(e.target.value, year, sort); }}
          />
        </Col>
        <Col md={3}>
          <Form.Select
            value={year}
            onChange={(e) => { setYear(e.target.value); notifyChange(search, e.target.value, sort); }}
          >
            <option value="">All years</option>
            <option value="<=2000">≤ 2000</option>
            <option value="2001-2015">2001 - 2015</option>
            <option value=">2015">{"> 2015"}</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select
            value={sort}
            onChange={(e) => { setSort(e.target.value); notifyChange(search, year, e.target.value); }}
          >
            <option value="">No sorting</option>
            <option value="yearAsc">Year ↑</option>
            <option value="yearDesc">Year ↓</option>
            <option value="titleAsc">Title A→Z</option>
            <option value="titleDesc">Title Z→A</option>
            <option value="durationAsc">Duration ↑</option>
            <option value="durationDesc">Duration ↓</option>
          </Form.Select>
        </Col>
      </Row>
    </Card>
  );
}
