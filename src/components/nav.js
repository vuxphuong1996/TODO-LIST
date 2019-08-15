import React from "react";
import { Dropdown } from "semantic-ui-react";

const friendOptions = [
    {
        key: "Jenny Hess",
        text: "Jenny Hess",
        value: "Jenny Hess",
        image: { avatar: true, src: "/images/user.png" }
    },
    {
        key: "Elliot Fu",
        text: "Elliot Fu",
        value: "Elliot Fu",
        image: { avatar: true, src: "/images/user.png" }
    },
    {
        key: "Stevie Feliciano",
        text: "Stevie Feliciano",
        value: "Stevie Feliciano",
        image: { avatar: true, src: "images/user.png" }
    },
    {
        key: "Christian",
        text: "Christian",
        value: "Christian",
        image: { avatar: true, src: "images/user.png" }
    }
];

const DropdownTest = () => (
    <span>
        <Dropdown
            inline
            options={friendOptions}
            defaultValue={friendOptions[0].value}
        />
    </span>
);

export default DropdownTest;
