import React from "react";
import { Modal, ButtonToolbar, Button, Form, Col, Row } from "react-bootstrap";
import { Dropdown } from "semantic-ui-react";
import Files from "react-files";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
];

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

    filesRemoveOne = (file) => {
        this.refs.files.removeFile(file);
    };

    filesRemoveAll = () => {
        this.refs.files.removeFiles();
    };

    submitItem = (e) => {
        e.preventDefault();
        const userInfo = {
            id: this.props.item.id,
            title: this.title.value,
            tags: { value: this.tag.state.value, label: this.tag.state.value },
            assign: {
                key: this.assignto.state.value,
                text: this.assignto.state.value,
                value: this.assignto.state.value
            },
            color: {
                key: this.color.state.value,
                text: this.color.state.value,
                value: this.color.state.value
            },
            status: {
                key: this.status.state.value,
                text: this.status.state.value,
                value: this.status.state.value
            },
            files: this.state.files
        };
        this.props.saveItem(userInfo);
    };

    handldeChange = () => {};

    render() {
        const {
            id,
            title,
            status,
            tags,
            color,
            assign,
            files
        } = this.props.item;
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
                    <Form onSubmit={this.submitItem}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                ref={(node) => (this.title = node)}
                                defaultValue={title}
                                // onChange={this.handldeChange()}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Tags</Form.Label>
                            <Select
                                options={options}
                                isMulti
                                ref={(node) => (this.tag = node)}
                                defaultValue={tags.value}
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
                                        defaultValue={assign.value}
                                        ref={(node) => (this.assignto = node)}
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
                                        defaultValue={color.value}
                                        ref={(node) => (this.color = node)}
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
                                        defaultValue={status.value}
                                        ref={(node) => (this.status = node)}
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
                                        <Files
                                            ref="files"
                                            className="files-dropzone"
                                            onChange={this.onFilesChange}
                                            onError={this.onFilesError}
                                            accepts={[
                                                "image/png",
                                                ".pdf",
                                                "audio/*"
                                            ]}
                                            multiple
                                            maxFiles={3}
                                            maxFileSize={10000000}
                                            minFileSize={0}
                                            clickable
                                        >
                                            <FontAwesomeIcon icon={faUpload} />
                                            &nbsp;Upload
                                        </Files>
                                    </Form.Label>
                                </Col>
                            </Row>
                        </Form.Group>

                        {(this.state.files.length || files.length) > 0 ? (
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
                                                        alt=""
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
                        ) : null}

                        <Button
                            variant="primary"
                            type="button"
                            onClick={() => this.props.deleteItem(id)}
                        >
                            REMOVE {id}
                        </Button>

                        <Button
                            variant="danger"
                            type="submit"
                            className="buttonSave"
                            onClick={this.props.onHide}
                        >
                            SAVE
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

export const ModalEdit = ({ item, saveItem, deleteItem }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    return (
        <ButtonToolbar>
            <p variant="primary" onClick={handleShow}>
                Edit
            </p>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={handleClose}
                saveItem={saveItem}
                item={item}
                deleteItem={deleteItem}
            />
        </ButtonToolbar>
    );
};

// export const ModalRemove = ({ toggleModal, modalShow, deleteItem }) => {
//     return (
//         <ButtonToolbar>
//             <p variant="primary" onClick={() => toggleModal()}>
//                 Remove
//             </p>

//             <MyVerticallyCenteredModal
//                 show={modalShow}
//                 onHide={() => toggleModal()}
//                 deleteItem={deleteItem}
//             />
//         </ButtonToolbar>
//     );
// };
