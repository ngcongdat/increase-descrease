import React, { Component } from "react";
import { Row, Col } from "antd";

import "./Circle.css";

export default class Circle extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={12} offset={6} className="header">
            AAAA
          </Col>
          <Col span={12} offset={6} className="main">
            col-12 col-offset-6
          </Col>
          <Col span={12} offset={6} className="footer">
            col-12 col-offset-6
          </Col>
        </Row>
      </div>
    );
  }
}
