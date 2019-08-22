import React from "react";
import { Dropdown } from "semantic-ui-react";

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

class DropdownTest extends React.Component {
    state = {
        value: ""
    };

    handleChange = (e, { name, value }) => {
        const valueAssign = {
            key: value,
            text: value,
            value: value
        };
        this.props.saveItemOutSide(this.props.id, valueAssign);
    };

    render() {
        const { value } = this.props.assign;
        return (
            <span>
                <Dropdown
                    className="positionDrop"
                    inline
                    options={stateAssign}
                    defaultValue={value}
                    onChange={this.handleChange}
                />
            </span>
        );
    }
}

export default DropdownTest;
