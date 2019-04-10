import React, { Component } from "react";
import classNames from "classnames";
import { Container, Row, Col, Button } from "reactstrap";

import "./Circle.css";

export default class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: -1000
    };
    this.reset = this.reset.bind(this);
    this.increase = this.increase.bind(this);
    this.descrease = this.descrease.bind(this);
  }

  reset() {
    this.setState(state => {
      return {
        num: 0
      };
    });
  }

  increase() {
    this.setState(state => {
      return {
        num: --state.num
      };
    });
  }

  descrease() {
    this.setState(state => {
      return {
        num: ++state.num
      };
    });
  }

  render() {
    const { num } = this.state;
    return (
      <Container>
        <Row>
          <Col
            xs="12"
            sm="12"
            lg="12"
            xl="12"
            className="header d-flex flex-column justify-content-center align-items-center text-uppercase"
          >
            <h2>Increase and Descrease</h2>
            <Button color="warning" onClick={this.reset}>
              Reset
            </Button>
          </Col>
        </Row>
        <Row>
          <Col
            xs="12"
            sm="12"
            lg="12"
            xl="12"
            className="content d-flex justify-content-center align-items-center"
          >
            <div
              className={classNames("button", "mr-3", {
                hidden: num === -1000
              })}
            >
              <Button outline color="danger" onClick={this.increase}>
                Increase
              </Button>
            </div>
            <div className="circle d-flex justify-content-center align-items-center">
              <p className="m-0">{num}</p>
            </div>
            <div
              className={classNames("button", "ml-3", { hidden: num === 1000 })}
            >
              <Button outline color="success" onClick={this.descrease}>
                Descrease
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
