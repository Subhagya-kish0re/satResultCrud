import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import service from "../services/service";

const GetRank = () => {
  const [name, setName] = useState("");
  const [rank, setRank] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleGetRank = async () => {
    try {
      const response = await service.getRank(name);
      setRank(response);
      setErrorMessage("");
    } catch (error) {
      setRank(null);
      setErrorMessage("Error fetching rank. Please try again.");
    }
  };

  return (
    <div>
      <h2>Get Rank</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleGetRank}>
          Get Rank
        </Button>
      </Form>

      {rank !== null && <p>Rank: {rank}</p>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    </div>
  );
};

export default GetRank;
