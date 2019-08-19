import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import { CustomToggle } from "./dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { ModalTest } from "./modal";
import DropdownTest from "./nav";

export const RowItem = ({
    id,
    title,
    idName,
    dataBacklog,
    addItem,
    saveItem
}) => {
    return (
        <Col>
            <div className="backlog">
                <div className="backlog-button">
                    <span onClick={() => addItem(id)}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </span>{" "}
                    {title}
                </div>

                <div className="backlog-list" id={idName}>
                    {dataBacklog.map((item) => (
                        <Row className="listItem" key={item.id}>
                            <Col md={12} className="listItem-top">
                                <Row>
                                    <Col>
                                        <h6>{item.title}</h6>
                                    </Col>

                                    <Col>
                                        <DropdownTest />
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={12} className="listItem-bottom">
                                <Row>
                                    <Col>
                                        <span className="tag">Hards</span>
                                    </Col>

                                    <Col>
                                        <Dropdown className="positionDrop">
                                            <Dropdown.Toggle
                                                as={CustomToggle}
                                                id="dropdown-custom-components"
                                            >
                                                <span>
                                                    <FontAwesomeIcon
                                                        icon={faUserCog}
                                                    />
                                                </span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                {item.method.map((it) => (
                                                    <Dropdown.Item
                                                        key={it.id}
                                                        href={`#/action-${
                                                            it.id
                                                        }`}
                                                    >
                                                        <ModalTest
                                                            name={it.name}
                                                            saveItem={saveItem}
                                                        />
                                                    </Dropdown.Item>
                                                ))}

                                                {/* <Dropdown.Item href={`#/action-2`}>
                                              <ModalTest name="Copy" />
                                          </Dropdown.Item>
                                          <Dropdown.Item href={`#/action-3`}>
                                              <ModalTest name="Remove" />
                                          </Dropdown.Item> */}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    ))}
                </div>
            </div>
        </Col>
    );
};
