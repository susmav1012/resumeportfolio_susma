import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bookyourcab from "../../Assets/Projects/bookyourcab.png";
import banking from "../../Assets/Projects/banking.png";
import ranking from "../../Assets/Projects/ranking.png";
import melinia from "../../Assets/Projects/melinia.jpg";
import ideathon from "../../Assets/Projects/ideathon.jpg";
import illumaphone from "../../Assets/Projects/illumaphone.jpg";
import repository from "../../Assets/Projects/repository.png";
import lottery from "../../Assets/Projects/lottery.jpg";

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
              imgPath={melinia}
              isBlog={false}
              title="Melinia 2k24 - Website"
              description="A website for 'Melinia 2k24', a national level technical symposium organized by the Department of Computing at Coimbatore Institute of Technology.
              Tools Used: ReactJs."
              ghLink="https://github.com/janumathigp/melinia-2024"
              demoLink="https://melinia24.tech/"
                        
            />
          </Col>

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
              Tools Used: C++."
              ghLink="https://github.com/susmav1012/bank_management_system"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ranking}
              isBlog={false}
              title="Tutee Monitor"
              description="An application that maintain student's marks and display the rank list.
              Tools Used: C++ and Data structures."
              ghLink="https://github.com/susmav1012/TUTEE-MONITOR"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ideathon}
              isBlog={false}
              title="Ideathon"
              description="An application for the employees to post their doubts as challenges and other employees can answer them.Best answers can be upvoted and a leader table is maintained for appreciation.
              Tools Used: ReactJs, MSSql Server"
              ghLink="https://github.com/susmav1012/ideathon"
              // demoLink="https://melinia24.tech/"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={illumaphone}
              isBlog={false}
              title="Illumaphone"
              description="A light based instrument that plays sound when hands are waved using cups and photoresistors.
              Tools Used: Arduino and Chuck"
              ghLink="https://github.com/susmav1012/Illumaphone"
              demoLink="https://github.com/susmav1012/Illumaphone/blob/main/README.md"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={repository}
              isBlog={false}
              title="Repository Automation"
              description="An automated repository for queries that are stored as SAS or SQL code to identify potentially fraudulent claims. The objective is to automate this data scraping process, and create a data frame for further analysis and storage in a Hive table. Scraping of data is done using python and pandas and stored as separate fields and formatted.
              Tools Used: Python,Pandas,Excel,Hive."
              ghLink="https://github.com/susmav1012/Repository-Automation"
              // demoLink="https://melinia24.tech/"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lottery}
              isBlog={false}
              title="LotteryPot-dapp"
              description="A lottery-dapp built with blockchain and solidity that allows users to start a lottery for 3 minutes. Anyone can enter the lottery by sending 0.15 ether and after the countdown is over, the one who started the particular lottery can pick and pay the winner.
              Tools Used: Solidity with Ethereum."
              ghLink="https://github.com/susmav1012/Lottery_App_Blockchain"
              // demoLink="https://melinia24.tech/"
                        
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
