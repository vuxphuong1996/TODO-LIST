import React from "react";
import { Container, Row } from "react-bootstrap";
import RowItem from "./components/RowItem";
import { data, dataBacklogV2 } from "./const/index";
import "./App.css";
import uuidv1 from "uuid/v1";

class App extends React.Component {
    state = {
        data: data,
        dataBacklog: dataBacklogV2
    };

    addItem = (id) => {
        this.state.data.forEach((item) => {
            if (item.id === id) {
                var idRandom = uuidv1();
                this.state.dataBacklog.push({
                    id: idRandom,
                    title: "Webix Je t 2.0 nnnnnn",
                    tags: [{ value: "chocolate", label: "Chocolate" }],
                    assign: {
                        key: "Jenny Hess",
                        text: "Jenny Hess",
                        value: "Jenny Hess"
                    },
                    color: {
                        key: "Low",
                        text: "Low",
                        value: "Low"
                    },
                    status: {
                        key: "Work",
                        text: "Work",
                        value: "Work"
                    },
                    files: []
                });
                item.dataBacklog.push(idRandom);
            }
        });
        this.setState({
            dataBacklog: this.state.dataBacklog
        });
    };

    saveItem = (userInfo) => {
        const { dataBacklog } = this.state;
        const dataItem = dataBacklog.map((dtItem) => {
            if (dtItem.id === userInfo.id) {
                return {
                    ...dtItem,
                    title: userInfo.title,
                    tags: userInfo.tags,
                    assign: userInfo.assign,
                    color: userInfo.color,
                    status: userInfo.status,
                    files: userInfo.files
                };
            }
            return dtItem;
        });
        this.setState({
            dataBacklog: dataItem
        });
    };

    saveItemOutSide = (id, valueAssign) => {
        const { dataBacklog } = this.state;
        const dataItem = dataBacklog.map((dtItem) => {
            if (dtItem.id === id) {
                return {
                    ...dtItem,
                    assign: valueAssign
                };
            }
            return dtItem;
        });
        this.setState({
            dataBacklog: dataItem
        });
    };

    deleteItem = (id) => {
        const dataAfterDelete = this.state.dataBacklog.filter((dtItemChild) => {
            return dtItemChild.id !== id;
        });
        this.setState({ dataBacklog: dataAfterDelete });
    };

    mappingItem = () => {
        return this.state.data.map((item) => {
            return (
                <RowItem
                    // {...item}
                    id={item.id}
                    title={item.title}
                    dataBacklog={item.dataBacklog}
                    dataNoName={this.state.dataBacklog}
                    key={item.id}
                    addItem={this.addItem}
                    saveItem={this.saveItem}
                    deleteItem={this.deleteItem}
                    saveItemOutSide={this.saveItemOutSide}
                />
            );
        });
    };

    render() {
        return (
            <div className="App">
                <Container>
                    <Row>{this.mappingItem()}</Row>
                </Container>
            </div>
        );
    }
}
export default App;
