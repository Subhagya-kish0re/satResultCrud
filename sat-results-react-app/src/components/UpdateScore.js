import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import service from "../services/service";

const UpdateScore = () => {
  const [name, setName] = useState("");
  const [newSatScore, setNewSatScore] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleScoreChange = (e) => {
    setNewSatScore(parseInt(e.target.value, 10));
  };

  const handleUpdateScore = async () => {
    try {
      await service.updateSatScore(name, newSatScore);
      setSuccessMessage("Score updated successfully!");
      setErrorMessage("");
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("Error updating score. Please try again.");
    }
  };

  return (
    <div>
      <h2>Update Score</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group>

        <Form.Group controlId="formScore">
          <Form.Label>New SAT Score</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter new SAT score"
            value={newSatScore}
            onChange={handleScoreChange}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleUpdateScore}>
          Update Score
        </Button>
      </Form>

      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    </div>
  );
};

export default UpdateScore;
