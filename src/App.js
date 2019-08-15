import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CustomToggle } from "./components/dropdown";
import { Dropdown } from "react-bootstrap";
import { ModalTest } from "./components/modal";
import DropdownTest from "./components/nav";
import { Thunghiem } from "./components/thunghiem";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <ModalTest />
                    {/* BACKLOG */}
                    <Col>
                        <div className="backlog">
                            <div className="backlog-button">
                                <span>+</span> Backlog
                            </div>
                            <div className="backlog-list">
                                <Row className="listItem">
                                    <Col md={12} className="listItem-top">
                                        <Row>
                                            <Col>
                                                <h6>Webix Je t 2.0</h6>
                                            </Col>

                                            <Col>
                                                <DropdownTest />
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md={12} className="listItem-bottom">
                                        <Row>
                                            <Col>
                                                <span className="tag">
                                                    Hard
                                                </span>
                                            </Col>

                                            <Col>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        as={CustomToggle}
                                                        id="dropdown-custom-components"
                                                    >
                                                        <span>O</span>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item eventKey="1">
                                                            <ModalTest name="Edit" />
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="2">
                                                            <ModalTest name="Copy" />
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="3">
                                                            <ModalTest name="Remove" />
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row className="listItem">
                                    <Col md={12} className="listItem-top">
                                        <Row>
                                            <Col>
                                                <h6>Webix Je t 2.0</h6>
                                            </Col>

                                            <Col>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        as={CustomToggle}
                                                        id="dropdown-custom-components"
                                                    >
                                                        <img src="" alt="" />
                                                        hello
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item eventKey="1">
                                                            Red
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="2">
                                                            Blue
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="3">
                                                            Orange
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="1">
                                                            Red-Orange
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md={12} className="listItem-bottom">
                                        <Row>
                                            <Col>
                                                <span>Hard</span>
                                            </Col>

                                            <Col>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        as={CustomToggle}
                                                        id="dropdown-custom-components"
                                                    >
                                                        <span>O</span>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item eventKey="1">
                                                            Red
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="2">
                                                            Blue
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="3">
                                                            Orange
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="1">
                                                            Red-Orange
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <Thunghiem />
                    </Col>
                    {/* END BACKLOG */}

                    {/* IN PROGRESS */}
                    <Col>
                        <div className="backlog">
                            <div className="backlog-button">
                                <span>+</span> In Progress
                            </div>
                            <div className="backlog-list">
                                <Row className="listItem">
                                    <Col md={12} className="listItem-top">
                                        <Row>
                                            <Col>
                                                <h6>Webix Je t 2.0</h6>
                                            </Col>

                                            <Col>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        as={CustomToggle}
                                                        id="dropdown-custom-components"
                                                    >
                                                        <img src="" alt="" />
                                                        hello
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item eventKey="1">
                                                            Red
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="2">
                                                            Blue
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="3">
                                                            Orange
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="1">
                                                            Red-Orange
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md={12} className="listItem-bottom">
                                        <Row>
                                            <Col>
                                                <span>Hard</span>
                                            </Col>

                                            <Col>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        as={CustomToggle}
                                                        id="dropdown-custom-components"
                                                    >
                                                        <span>O</span>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item eventKey="1">
                                                            Red
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="2">
                                                            Blue
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="3">
                                                            Orange
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="1">
                                                            Red-Orange
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    {/* END IN PROGRESS */}

                    {/* TESTING */}
                    <Col>
                        <div className="backlog">
                            <div className="backlog-button">
                                <span>+</span> Testing
                            </div>
                            <div className="backlog-list">
                                <Row className="listItem">
                                    <Col md={12} className="listItem-top">
                                        <Row>
                                            <Col>
                                                <h6>Webix Je t 2.0</h6>
                                            </Col>

                                            <Col>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        as={CustomToggle}
                                                        id="dropdown-custom-components"
                                                    >
                                                        <img src="" alt="" />
                                                        hello
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item eventKey="1">
                                                            Red
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="2">
                                                            Blue
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="3">
                                                            Orange
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="1">
                                                            Red-Orange
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md={12} className="listItem-bottom">
                                        <Row>
                                            <Col>
                                                <span>Hard</span>
                                            </Col>

                                            <Col>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        as={CustomToggle}
                                                        id="dropdown-custom-components"
                                                    >
                                                        <span>O</span>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item eventKey="1">
                                                            Red
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="2">
                                                            Blue
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="3">
                                                            Orange
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="1">
                                                            Red-Orange
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    {/* END TESTING */}

                    {/* DONE */}
                    <Col>
                        <div className="backlog">
                            <div className="backlog-button">
                                <span>+</span> Done
                            </div>
                            <div className="backlog-list">
                                <Row className="listItem">
                                    <Col md={12} className="listItem-top">
                                        <Row>
                                            <Col>
                                                <h6>Webix Je t 2.0</h6>
                                            </Col>

                                            <Col>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        as={CustomToggle}
                                                        id="dropdown-custom-components"
                                                    >
                                                        <img src="" alt="" />
                                                        hello
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item eventKey="1">
                                                            Red
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="2">
                                                            Blue
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="3">
                                                            Orange
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="1">
                                                            Red-Orange
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md={12} className="listItem-bottom">
                                        <Row>
                                            <Col>
                                                <span>Hard</span>
                                            </Col>

                                            <Col>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        as={CustomToggle}
                                                        id="dropdown-custom-components"
                                                    >
                                                        <span>O</span>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item eventKey="1">
                                                            Red
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="2">
                                                            Blue
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="3">
                                                            Orange
                                                        </Dropdown.Item>
                                                        <Dropdown.Item eventKey="1">
                                                            Red-Orange
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    {/* END DONE */}
                </Row>
            </Container>
        </div>
    );
}

export default App;
