import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import miniature  from "../../Assets/award/minature.jpeg";
// import certificate  from "../../Assets/award/certificate.jpeg";
import great  from "../../Assets/award/certi.jpg";
import kaggle from "../../Assets/award/kaggle.jpg";
import uiux from "../../Assets/award/uiux.jpg";
import paper from "../../Assets/award/paper.jpg";
import tcs from "../../Assets/award/tcs.jpg";

function Achievements() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Achievements </strong> and <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
         My achievements are given below 🏅.
        </p>
        {/* <h1>
        <span>Extra Curricular</span>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="cards">
              <div class="card-achievement">
              <h2 class="card-title">Ms Social</h2>
              <img src={miniature} alt=""/>
              <div class="card-desc">
              <p >I got first place in online events conducted by KKC club [ kalam Knowledge club in CIT] for this minature furnitures. These miniatures are done by me using the  things available from my house  </p>
              <img src={certificate}/>
              </div>
              
            </div>
          </Col>  
        </Row> */}
        
        <h1 >
        <br/>
        <span>Co-Curricular</span>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={12} className="cards">
              <div class="card-achievement">
              <h2 class="card-title">PAPER PRESENTATION - RISCS'23</h2>
              <img src={paper} alt=""/>
              <div class="card-desc">
              <p >PAPER PRESENTATION - RISCS'23</p>
              
              </div>
              
            </div>
          </Col>
          <Col md={12} className="cards">
              <div class="card-achievement">
              <h2 class="card-title">PYTHON FOR MACHINE LEARNING - Great Learning</h2>
              <img src={great} alt=""/>
              <div class="card-desc">
              <p >PYTHON FOR MACHINE LEARNING - Great Learning  </p>
              
              </div>
              
            </div>
          </Col>
          <Col md={12} className="cards">
              <div class="card-achievement">
              <h2 class="card-title">DATA VISUALISATION - kaggle</h2>
              <img src={kaggle} alt=""/>
              <div class="card-desc">
              <p >DATA VISUALISATION - Kaggle</p>
              
              </div>
              
            </div>
          </Col>
        
          <Col md={12} className="cards">
              <div class="card-achievement">
              <h2 class="card-title">YOUNG PROFESSIONAL - TCS ION</h2>
              <img src={tcs} alt=""/>
              <div class="card-desc">
              <p >YOUNG PROFESSIONAL - TCS ION</p>
              
              </div>
              
            </div>
          </Col>

          <Col md={12} className="cards">
              <div class="card-achievement">
              <h2 class="card-title">UI/UX Designing - Entrepreneurship Cell IT Patna</h2>
              <img src={uiux} alt=""/>
              <div class="card-desc">
              <p >UI/UX Designing - IIT Patna</p>
              
              </div>
              
            </div>
          </Col>
        
        </Row>
        
      </Container>
    </Container>
  );
}

export default Achievements;