import React from "react";
import { Modal, ButtonToolbar, Button, Form, Col, Row } from "react-bootstrap";
import { Dropdown } from "semantic-ui-react";
import Files from "react-files";
import { Thunghiem } from "./thunghiem";

const stateAssign = [
    {
        key: "Jenny Hess",
        text: "Jenny Hess",
        value: "Jenny Hess"
    },
    {
        key: "Elliot Fu",
        text: "Elliot Fu",
        value: "Elliot Fu"
    },
    {
        key: "Stevie Feliciano",
        text: "Stevie Feliciano",
        value: "Stevie Feliciano"
    },
    {
        key: "Christian",
        text: "Christian",
        value: "Christian"
    }
];

const stateColors = [
    {
        key: "Normal",
        text: "Normal",
        value: "Normal"
    },
    {
        key: "Low",
        text: "Low",
        value: "Low"
    },
    {
        key: "Urgent",
        text: "Urgent",
        value: "Urgent"
    }
];

const stateStatus = [
    {
        key: "New",
        text: "New",
        value: "New"
    },
    {
        key: "Work",
        text: "Work",
        value: "Work"
    },
    {
        key: "Test",
        text: "Test",
        value: "Test"
    },
    {
        key: "Done",
        text: "Done",
        value: "Done"
    }
];

export class MyVerticallyCenteredModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        };
    }

    onFilesChange = (files) => {
        this.setState(
            {
                files
            },
            () => {
                console.log(this.state.files);
            }
        );
    };

    onFilesError = (error, file) => {
        console.log("error code " + error.code + ": " + error.message);
    };

    filesRemoveAll = () => {
        this.refs.files.removeFiles();
    };

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Card
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Row>
                                <Col md={4}>
                                    <Form.Label className="LabelItem">
                                        Assign To
                                    </Form.Label>
                                    <Dropdown
                                        placeholder="State"
                                        search
                                        selection
                                        options={stateAssign}
                                        defaultValue={stateAssign[0].value}
                                    />
                                </Col>

                                <Col md={4}>
                                    <Form.Label className="LabelItem">
                                        Color
                                    </Form.Label>
                                    <Dropdown
                                        placeholder="State"
                                        search
                                        selection
                                        options={stateColors}
                                        defaultValue={stateColors[0].value}
                                    />
                                </Col>

                                <Col md={4}>
                                    <Form.Label className="LabelItem">
                                        Status
                                    </Form.Label>
                                    <Dropdown
                                        placeholder="State"
                                        search
                                        selection
                                        options={stateStatus}
                                        defaultValue={stateStatus[0].value}
                                    />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Row>
                                <Col>
                                    <Form.Label>Attachments</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Label>
                                        <Thunghiem />
                                    </Form.Label>
                                </Col>
                            </Row>
                        </Form.Group>
                        <div>
                        <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            accept="image/png, image/jpeg"
                        />
                    </div>

                        {/* {this.state.files.length > 0 ? (
                            <div className="files-list">
                                <ul>
                                    {this.state.files.map((file) => (
                                        <li
                                            className="files-list-item"
                                            key={file.id}
                                        >
                                            <div className="files-list-item-preview">
                                                {file.preview.type ===
                                                "image" ? (
                                                    <img
                                                        className="files-list-item-preview-image"
                                                        src={file.preview.url}
                                                    />
                                                ) : (
                                                    <div className="files-list-item-preview-extension">
                                                        {file.extension}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="files-list-item-content">
                                                <div className="files-list-item-content-item files-list-item-content-item-1">
                                                    {file.name}
                                                </div>
                                                <div className="files-list-item-content-item files-list-item-content-item-2">
                                                    {file.sizeReadable}
                                                </div>
                                            </div>
                                            <div
                                                id={file.id}
                                                className="files-list-item-remove"
                                                onClick={this.filesRemoveOne.bind(
                                                    this,
                                                    file
                                                )} // eslint-disable-line
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null} */}

                        <Button variant="primary" type="submit">
                            REMOVE
                        </Button>

                        <Button variant="danger" type="submit">
                            SAVE
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

export const ModalTest = ({ name }) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <ButtonToolbar>
            <p variant="primary" onClick={() => setModalShow(true)}>
                {name}
            </p>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </ButtonToolbar>
    );
};
