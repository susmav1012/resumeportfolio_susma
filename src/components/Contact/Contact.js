import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
//service_uj8qk98
import { FaLinkedinIn } from "react-icons/fa";

  function Contact() {
    const form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ajjmggr', 'template_0rm12jo', form.current, '9MPYzXi7tBkctfpdp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    
    return (
      <Container fluid className="home-about-section">
        <Container>
          <Row>
          <h2> Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" className="inputclass" placeholder="Name" name="name"/><br/><br></br>
            <input type="email" className="inputclass"placeholder="Email Address" name="emailadd"/><br/><br></br>
            <input type="text"className="inputclass"  placeholder="Subject" name="sub"/><br/><br></br>
            <textarea name="msg" className="inputclass"  placeholder="Message"></textarea><br/><br/><br></br>
            <input className="button" type="submit" value="Send Message"/><br/><br/><br/>
            </form>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">contact </span>
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/susmav1012"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:susmav1012@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineMail />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/susma-v1012"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/susmavijayakumar"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
  export default Contact;