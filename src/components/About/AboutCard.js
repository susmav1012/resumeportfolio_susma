import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
<<<<<<< HEAD
            Hi Everyone, I am <span className="purple">Susma </span>
            from <span className="purple"> Coimbatore, India.</span>
            <br />I am a junior pursuing M.Sc Software Systems at Coimbatore Institute of Technology
=======
            Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
>>>>>>> 24d955cf6cd4ce5ff8a9a8071f0c87dfa4aaacec
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
<<<<<<< HEAD
              <ImPointRight /> Embroidery
=======
              <ImPointRight /> Writing Tech Blogs
>>>>>>> 24d955cf6cd4ce5ff8a9a8071f0c87dfa4aaacec
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
