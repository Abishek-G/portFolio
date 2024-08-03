import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiAngularSimple,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import { SiCypress, SiTypescript } from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>     
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>    
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress />
      </Col>
    </Row>
  );
}

export default Techstack;
