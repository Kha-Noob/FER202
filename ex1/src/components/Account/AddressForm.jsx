// src/components/AddressForm.jsx
import React from "react";
import { Form, Button, ProgressBar } from "react-bootstrap";
import { GeoAlt } from "react-bootstrap-icons";

const AddressForm = ({ onPrevious, onFinish, validated }) => {
  return (
    <div className="p-4 bg-light rounded shadow-sm">
      <h4 className="mb-3">
        <GeoAlt className="me-2" />
        Address Information
      </h4>

      {/* Progress Bar */}
      <ProgressBar now={100} label="100%" className="mb-4" />

      <Form noValidate validated={validated}>
        {/* Street */}
        <Form.Group className="mb-3" controlId="formStreet">
          <Form.Label>Street</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your street"
            required
            isInvalid={!validated}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your street.
          </Form.Control.Feedback>
        </Form.Group>

        {/* City */}
        <Form.Group className="mb-3" controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your city"
            required
            isInvalid={!validated}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your city.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Country */}
        <Form.Group className="mb-3" controlId="formCountry">
          <Form.Label>Country</Form.Label>
          <Form.Select required isInvalid={!validated}>
            <option value="">Choose...</option>
            <option>Vietnam</option>
            <option>Japan</option>
            <option>USA</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select your country.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Zip Code */}
        <Form.Group className="mb-4" controlId="formZip">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter zip code"
            required
            isInvalid={!validated}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your zip code.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Buttons */}
        <div className="d-flex justify-content-between">
          <Button variant="secondary" onClick={onPrevious}>
            Previous
          </Button>
          <Button variant="success" onClick={onFinish}>
            Finish
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddressForm;
