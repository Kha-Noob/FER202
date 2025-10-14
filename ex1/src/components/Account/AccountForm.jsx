import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function AccountForm({ data = {}, setData, errors = {} }) {
  return (
    <Form>
      <h5><i className="bi bi-lock me-2"></i>Account</h5>

      <InputGroup className="mb-3">
        <InputGroup.Text><i className="bi bi-person-fill"></i></InputGroup.Text>
        <Form.Control
          placeholder="Username"
          value={data.username || ""}
          onChange={(e)=> setData({...data, username: e.target.value})}
          isInvalid={!!errors.username}
        />
        <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text><i className="bi bi-key-fill"></i></InputGroup.Text>
        <Form.Control
          type="password"
          placeholder="Password"
          value={data.password || ""}
          onChange={(e)=> setData({...data, password: e.target.value})}
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text><i className="bi bi-key-fill"></i></InputGroup.Text>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          value={data.confirmPassword || ""}
          onChange={(e)=> setData({...data, confirmPassword: e.target.value})}
          isInvalid={!!errors.confirmPassword}
        />
        <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
      </InputGroup>

      <Form.Group className="mb-3">
        <Form.Label>Secret question</Form.Label>
        <Form.Control
          placeholder="e.g. Your pet's name?"
          value={data.secretQuestion || ""}
          onChange={(e)=> setData({...data, secretQuestion: e.target.value})}
          isInvalid={!!errors.secretQuestion}
        />
        <Form.Control.Feedback type="invalid">{errors.secretQuestion}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Answer</Form.Label>
        <Form.Control
          value={data.secretAnswer || ""}
          onChange={(e)=> setData({...data, secretAnswer: e.target.value})}
          isInvalid={!!errors.secretAnswer}
        />
        <Form.Control.Feedback type="invalid">{errors.secretAnswer}</Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
}
