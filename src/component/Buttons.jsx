import React from "react";
import Button from "./Button";

const CALCULATOR_BUTTONS = [
    {
        label: "7",
        actionType: "NUMBER"
    },
    {
        label: "8",
        actionType: "NUMBER"
    },
    {
        label: "9",
        actionType: "NUMBER"
    },
    {
        label: "4",
        actionType: "NUMBER"
    },
    {
        label: "5",
        actionType: "NUMBER"
    },
    {
        label: "6",
        actionType: "NUMBER"
    },
    {
        label: "1",
        actionType: "NUMBER"
    },
    {
        label: "2",
        actionType: "NUMBER"
    },
    {
        label: "3",
        actionType: "NUMBER"
    },
    {
        label: "0",
        actionType: "NUMBER"
    },
    {
        label: "+",
        actionType: "OPERATOR"
    },
    {
        label: "-",
        actionType: "OPERATOR"
    },
    {
        label: "*",
        actionType: "OPERATOR"
    },
    {
        label: "=",
        actionType: "CALCUL"
    },
    {
        label: "Reset",
        actionType: "RESET"
    }
]

const Buttons = () => {
    return (
        <div className="buttons">
            {CALCULATOR_BUTTONS.map((button) => (
                <Button key={button.label} label={button.label} actionType={button.actionType} />
            ))}
        </div>
    );
};

export default Buttons;
