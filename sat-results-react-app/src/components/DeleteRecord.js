import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import service from "../services/service";

const DeleteRecord = () => {
  const [name, setName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleDeleteRecord = async () => {
    try {
      await service.deleteSatResultByName(name);
      setSuccessMessage("Record deleted successfully!");
      setErrorMessage("");
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("Error deleting record. Please try again.");
    }
  };

  return (
    <div>
      <h2>Delete Record</h2>
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

        <Button variant="danger" type="button" onClick={handleDeleteRecord}>
          Delete Record
        </Button>
      </Form>

      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    </div>
  );
};

export default DeleteRecord;
