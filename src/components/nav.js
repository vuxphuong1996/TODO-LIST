import React from "react";
import { Dropdown } from "semantic-ui-react";

// const friendOptions = [
//     {
//         key: "Jenny Hess",
//         text: "Jenny Hess",
//         value: "Jenny Hess",
//         image: { avatar: true, src: "/images/user.png" }
//     },
//     {
//         key: "Elliot Fu",
//         text: "Elliot Fu",
//         value: "Elliot Fu",
//         image: { avatar: true, src: "/images/user.png" }
//     },
//     {
//         key: "Stevie Feliciano",
//         text: "Stevie Feliciano",
//         value: "Stevie Feliciano",
//         image: { avatar: true, src: "images/user.png" }
//     },
//     {
//         key: "Christian",
//         text: "Christian",
//         value: "Christian",
//         image: { avatar: true, src: "images/user.png" }
//     }
// ];

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

const DropdownTest = ({ assign }) => (
    <span>
        <Dropdown
            className="positionDrop"
            inline
            options={stateAssign}
            defaultValue={assign.value}
        />
    </span>
);

export default DropdownTest;
