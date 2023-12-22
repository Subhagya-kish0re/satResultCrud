import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import service from "../services/service";

const ViewData = () => {
  const [satResults, setSatResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.getAllSatResults();
        setSatResults(response);
        setErrorMessage("");
      } catch (error) {
        setSatResults([]);
        setErrorMessage("Error fetching data. Please try again.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>View All Data</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {satResults.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Pincode</th>
              <th>SAT Score</th>
              <th>Passed</th>
            </tr>
          </thead>
          <tbody>
            {satResults.map((result) => (
              <tr key={result.name}>
                <td>{result.name}</td>
                <td>{result.address}</td>
                <td>{result.city}</td>
                <td>{result.country}</td>
                <td>{result.pincode}</td>
                <td>{result.satScore}</td>
                <td>{result.passed ? "Pass" : "Fail"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ViewData;
