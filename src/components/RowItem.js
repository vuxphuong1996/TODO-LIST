import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import { CustomToggle } from "./dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { ModalEdit, ModalRemove } from "./modal";
import DropdownTest from "./nav";

const styleDiv = (item) => {
    if (item.value === "Low") {
        return { borderLeft: `3px solid orange` };
    }
    if (item.value === "Normal") {
        return { borderLeft: `3px solid green` };
    }
    if (item.value === "Urgent") {
        return { borderLeft: `3px solid red` };
    }
};

export const RowItem = ({
    id,
    title,
    idName,
    dataBacklog,
    addItem,
    saveItem,
    toggleModal,
    modalShow,
    deleteItem
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
                        <Row
                            className="listItem"
                            key={item.id}
                            style={styleDiv(item.color)}
                        >
                            <Col md={12} className="listItem-top">
                                <Row>
                                    <Col>
                                        <h6>{item.title}</h6>
                                    </Col>

                                    <Col>
                                        <DropdownTest {...item} />
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
                                                <Dropdown.Item href="#/action-0">
                                                    <ModalEdit
                                                        item={item}
                                                        saveItem={saveItem}
                                                        toggleModal={
                                                            toggleModal
                                                        }
                                                        modalShow={modalShow}
                                                        deleteItem={deleteItem}
                                                    />
                                                </Dropdown.Item>
                                                {/* <Dropdown.Item href="#/action-1">
                                                    <ModalCopy />
                                                </Dropdown.Item> */}
                                                {/* <Dropdown.Item href="#/action-1">
                                                    <ModalRemove
                                                        deleteItem={deleteItem}
                                                    />
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
