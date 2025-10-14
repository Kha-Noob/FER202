import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function AboutForm({ data = {}, setData, errors = {} }) {
  return (
    <Form>
      <h5><i className="bi bi-person-circle me-2"></i>About</h5>
      <Row className="g-2">
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              value={data.firstName || ""}
              onChange={(e)=> setData({...data, firstName: e.target.value})}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              value={data.lastName || ""}
              onChange={(e)=> setData({...data, lastName: e.target.value})}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-2">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={data.email || ""}
          onChange={(e)=> setData({...data, email: e.target.value})}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
      </Form.Group>

      <Row className="g-2">
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              value={data.phone || ""}
              onChange={(e)=> setData({...data, phone: e.target.value})}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              value={data.age || ""}
              onChange={(e)=> setData({...data, age: e.target.value})}
              isInvalid={!!errors.age}
            />
            <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-2">
        <Form.Label>Avatar (file)</Form.Label>
        <Form.Control type="file" onChange={(e)=> setData({...data, avatar: e.target.files?.[0]})} />
        <Form.Text className="text-muted">Demo UI only — no upload backend.</Form.Text>
      </Form.Group>
    </Form>
  );
}
