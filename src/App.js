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
   
    AddItem = (id) => {
        const { data } = this.state;
        data.forEach((item) => {
            if (item.id === id) {
                item.dataBacklog.push({
                    id: uuidv1(),
                    title: "Webix Je t 2.0",
                    tags: { value: "chocolate", label: "Chocolate" },
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
            }
        });
        this.setState({
            data: data
        });
    };

    saveItem = (userInfo) => {
        const { data } = this.state;
        const dataItem = data.map((dtItem) => {
            return {
                ...dtItem,
                dataBacklog: dtItem.dataBacklog.map((dtItemChild) => {
                    if (dtItemChild.id === userInfo.id) {
                        return {
                            ...dtItemChild,
                            title: userInfo.title,
                            tags: userInfo.tags,
                            assign: userInfo.assign,
                            color: userInfo.color,
                            status: userInfo.status,
                            files: userInfo.files
                        };
                    }
                    return dtItemChild;
                })
            };
        });
        this.setState({
            data: dataItem
        });
    };

    deleteItem = (id) => {
        const dataAfterDelete = this.state.dataBacklog.filter((dtItemChild) => {
            return dtItemChild.id !== id;
        })
        this.setState({dataBacklog: dataAfterDelete});
    };

    mappingItem = () => {
        const { data } = this.state;
        return data.map((item) => {
            return <RowItem
                        // {...item}
                        id={item.id}
                        title={item.title}
                        dataBacklog={item.dataBacklog}
                        dataNoName={this.state.dataBacklog}
                        key={item.id}
                        AddItem={this.AddItem}
                        saveItem={this.saveItem}
                        deleteItem={this.deleteItem}
                    />
        })
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        {this.mappingItem()}
                    </Row>
                </Container>
            </div>
        );
    }
}
export default App;
