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

    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        {/* BACKLOG */}
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
                        {/* END DONE */}
                    </Row>
                </Container>
            </div>
        );
    }
}
export default App;
