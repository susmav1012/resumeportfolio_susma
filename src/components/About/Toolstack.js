import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
<<<<<<< HEAD
  SiApachenetbeanside,
  SiAnaconda,
  SiJupyter,
=======
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
>>>>>>> 24d955cf6cd4ce5ff8a9a8071f0c87dfa4aaacec
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
<<<<<<< HEAD
=======
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
>>>>>>> 24d955cf6cd4ce5ff8a9a8071f0c87dfa4aaacec
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachenetbeanside />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
<<<<<<< HEAD
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
=======
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
>>>>>>> 24d955cf6cd4ce5ff8a9a8071f0c87dfa4aaacec
      </Col>
    </Row>
  );
}
export default Toolstack;
