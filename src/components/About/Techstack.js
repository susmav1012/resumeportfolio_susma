import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus,CgCopyright } from "react-icons/cg";
import { FaJava,FaPhp } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiCss3,
  DiDjango,
} from "react-icons/di";
import {
  SiHtml5,
  SiAngular,
  SiAngularjs,
} from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <CgCopyright />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngularjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
      <SiPandas />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
      <FaJava />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
      <FaPhp />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
      <AiOutlineConsoleSql />
      </Col>    
    </Row>
  );
}
export default Techstack;