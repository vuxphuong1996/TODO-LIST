import React, { Component } from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import { CustomToggle } from "./dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { ModalEdit } from "./modal";
import DropdownTest from "./nav";
import Sortable from "react-sortablejs";
// import { dataBacklogV2 } from "./../const/index";
import uniqueId from "lodash/uniqueId";

class RowItem extends Component {
    state = {
        idCard: this.props.dataBacklog
    };

    styleDiv = (item) => {
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

    mappingData = () => {
        const {saveItem, deleteItem } = this.props
        return this.state.idCard.map((val) => { 
            return this.props.dataNoName.map((item) => {
                if (item.id === val){
                    return (<Row
                                className="listItem"
                                data-id={item.id}
                                key={uniqueId()}
                                style={this.styleDiv(item.color)}
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
                                                <Dropdown.Item
                                                    href={`#/action-${item.id}`}
                                                >
                                                    <ModalEdit
                                                        item={item}
                                                        saveItem={saveItem}
                                                        deleteItem={deleteItem}
                                                    />
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    );
                } else {
                    return null;
                }
            });
        });
    };

    render() {
        const { id, title, addItem } = this.props;
        return (
            <Col>
                <div className="backlog-button">
                    <span onClick={() => addItem(id)}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </span>
                    {title}
                </div>

                <div className="backlog-list">
                    <Sortable
                        options={{
                            animation: 150,
                            group: {
                                name: "shared",
                                pull: true,
                                put: true
                            }
                        }}
                        className="block-list"
                        onChange={(items) => {
                            this.setState({ idCard: items });
                        }}
                    >
                        {this.mappingData()}
                    </Sortable>
                </div>
            </Col>
        );
    }
}

export default RowItem;
