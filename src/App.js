import React from "react";
import { Container, Row } from "react-bootstrap";
import { RowItem } from "./components/RowItem";
import { data } from "./const/index";
import { Sortable, MultiDrag } from "sortablejs";
import "./App.css";
import uuidv1 from "uuid/v1";

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
        const { data } = this.state;
        const dataItem = data.map((dtItem) => {
            return {
                ...dtItem,
                dataBacklog: dtItem.dataBacklog.filter((dtItemChild) => {
                    return dtItemChild.id !== id;
                })
            };
        });
        this.setState({
            data: dataItem
        });
    };

    render() {
        const { data } = this.state;
        console.log(data);
        return (
            <div className="App">
                <Container>
                    <Row>
                        {data.map((item) => (
                            <RowItem
                                {...item}
                                key={item.id}
                                AddItem={this.AddItem}
                                saveItem={this.saveItem}
                                deleteItem={this.deleteItem}
                            />
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}
export default App;
