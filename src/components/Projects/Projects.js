import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bookyourcab from "../../Assets/Projects/bookyourcab.png";
import banking from "../../Assets/Projects/banking.png";
import ranking from "../../Assets/Projects/ranking.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookyourcab}
              isBlog={false}
              title="Book Your Cab"
              description="An application to book a ticket for cab by choosing source and destination along with date of ride.
              Tools Used: JAVA and Swing Framework."
              ghLink="https://github.com/susmav1012/Cab-booking-system"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={banking}
              isBlog={false}
              title="Bank Management System"
              description="An application that performs various bank functionalities like account creation, applying for loan and
              applying fixed deposit scheme.
              Tools Used: C++.."
              ghLink="https://github.com/susmav1012/bank_management_system"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ranking}
              isBlog={false}
              title="Student Ranking System"
              description="An application that maintain student's marks and display the rank list.
              Tools Used: C++ and Data structures."
              ghLink="https://github.com/susmav1012/Student-ranking-system"
                        
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
