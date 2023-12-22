import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import service from "../services/service";

const InsertData = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    pincode: "",
    satScore: 0,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const isValidPincode = (pincode) => /^\d{6}$/.test(pincode);

  const isValidSatScore = (score) =>
    !isNaN(score) && score >= 0 && score <= 100;

  const handleSubmit = async () => {
    if (
      data.name.trim() === "" ||
      data.address.trim() === "" ||
      data.city.trim() === "" ||
      data.country.trim() === "" ||
      !isValidPincode(data.pincode) ||
      !isValidSatScore(data.satScore)
    ) {
      setErrorMessage("Please fill in all fields with valid data.");
      setSuccessMessage("");
      return;
    }

    try {
      await service.insertSatResult(data);
      setSuccessMessage("Data inserted successfully!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Error inserting data. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <h2>Insert Data</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            name="city"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            name="country"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPincode">
          <Form.Label>Pincode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pincode"
            name="pincode"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formSatScore">
          <Form.Label>SAT Score</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter SAT score"
            name="satScore"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleSubmit}>
          Insert
        </Button>
      </Form>

      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    </div>
  );
};

export default InsertData;
