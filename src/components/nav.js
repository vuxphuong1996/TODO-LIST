import React from "react";
import { Dropdown } from "semantic-ui-react";
import * as type from "../const/options";

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
                    options={type.stateAssign}
                    defaultValue={value}
                    onChange={this.handleChange}
                />
            </span>
        );
    }
}

export default DropdownTest;
