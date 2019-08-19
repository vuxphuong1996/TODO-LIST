<<<<<<< HEAD
import React from "react";
import { Container, Row } from "react-bootstrap";
import { RowItem } from "./components/RowItem";
import { data } from "./const/index";
import { Sortable, MultiDrag } from "sortablejs";
import "./App.css";

Sortable.mount(new MultiDrag());

class App extends React.Component {
    state = {
        data: data
    };

    componentDidMount() {
        this.sortable("list01");
        this.sortable("list02");
        this.sortable("list03");
        this.sortable("list04");
    }

    sortable = (list) => {
        const el = document.getElementById(list);
        new Sortable(el, {
            group: "shared",
            multiDrag: true,
            selectedClass: "selected",
            animation: 150
        });
    };

    addItem = (id) => {
        console.log("Kick");
        data[id].dataBacklog.push({
            id: 1,
            title: "Webix Je t Tutorial",
            tags: ["Hard"],
            method: [
                {
                    id: 1,
                    name: "Edit"
                },
                {
                    id: 2,
                    name: "Copy"
                },
                {
                    id: 3,
                    name: "Remove"
                }
            ]
        });
        this.setState({
            data: data
        });
    };

    saveItem = (userInfo) => {
        console.log("hello");
    };
=======
import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { CustomToggle } from "./components/dropdown";
import { Dropdown } from "react-bootstrap";
import { ModalTest } from "./components/modal";
import DropdownTest from "./components/nav";
import { ModalButton } from "./components/ModalButton";
import { Sortable, MultiDrag } from 'sortablejs';

Sortable.mount(new MultiDrag());


class App extends Component {

    componentDidMount() {
        this.sortable("list01")
        this.sortable("list02")
        this.sortable("list03")
        this.sortable("list04")
    }

    sortable = list => {
        const el = document.getElementById(list)
        new Sortable(el, {
            group: 'shared',
            multiDrag: true,
            selectedClass: "selected",
            animation: 150
        })
    }
    
>>>>>>> d6ecf1c51417f8753ef38b69631c3ee9e4fd8b5a

    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        {/* BACKLOG */}
<<<<<<< HEAD
                        {this.state.data.map((item) => (
                            <RowItem
                                {...item}
                                key={item.id}
                                addItem={this.addItem}
                                saveItem={this.saveItem}
                            />
                        ))}

                        {/* END BACKLOG */}

                        {/* IN PROGRESS */}
                        {/* <RowItem /> */}
                        {/* END IN PROGRESS */}

                        {/* TESTING */}
                        {/* <RowItem /> */}
                        {/* END TESTING */}

                        {/* DONE */}
                        {/* <RowItem /> */}
=======
                        <Col>
                            <div className="backlog">
                                <div className="backlog-button">
                                    <span>+</span> Backlog
                                </div>
                                <div className="backlog-list" id="list01">
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
                                                                <ModalButton />
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
                        </Col>
                        {/* END BACKLOG */}
    
                        {/* IN PROGRESS */}
                        <Col>
                            <div className="backlog">
                                <div className="backlog-button">
                                    <span>+</span> In Progress
                                </div>
                                <div className="backlog-list"  id="list02">
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
                                <div className="backlog-list"  id="list03">
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
                                <div className="backlog-list"  id="list04">
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
>>>>>>> d6ecf1c51417f8753ef38b69631c3ee9e4fd8b5a
                        {/* END DONE */}
                    </Row>
                </Container>
            </div>
        );
    }
}
export default App;
