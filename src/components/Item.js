import React from "react";
// import ReactDOM from "react-dom";
import Card from "./Card";

export function Item(props) {
    return (
        <Card className={props.className}>
            <div data-slot="header">
                {props.message}
            </div>
            <div data-slot="body">
                {props.id}
            </div>
            <div data-slot="footer">

            </div>
        </Card>
    );
}