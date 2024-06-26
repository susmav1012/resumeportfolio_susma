import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Susma </span>
            from <span className="purple"> Coimbatore, India.</span>
            <br />I am a junior pursuing M.Sc Software Systems at Coimbatore Institute of Technology (5th year).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Art works
            </li>
            <li className="about-activity">
              <ImPointRight /> Readings some blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learn new things everyday!"{" "}
          </p>
          <footer className="blockquote-footer">Susma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
