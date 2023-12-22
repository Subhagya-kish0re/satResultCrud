import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Note the addition of 'Routes'
import { Container, Nav } from "react-bootstrap";
import InsertData from "./components/InsertData";
import ViewData from "./components/ViewData";
import GetRank from "./components/GetRank";
import UpdateScore from "./components/UpdateScore";
import DeleteRecord from "./components/DeleteRecord";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Container>
        <Nav className="mt-3">
          <Nav.Item>
            <Nav.Link as={Link} to="/insert">
              Insert Data
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/view">
              View All Data
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/rank">
              Get Rank
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/update">
              Update Score
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/delete">
              Delete Record
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <hr />

        <Routes>
          <Route path="/insert" element={<InsertData />} />
          <Route path="/view" element={<ViewData />} />
          <Route path="/rank" element={<GetRank />} />
          <Route path="/update" element={<UpdateScore />} />
          <Route path="/delete" element={<DeleteRecord />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
