import React, { Component } from 'react';
import './Card.css';

export function Slot({ children, slot }) {
    let slottedChild = null;
    children.forEach((child) => {
        if (!React.isValidElement(child)) { return; }

        if (child.props['data-slot'] === slot) {
            slottedChild = React.cloneElement(child);
        }
    });
    return slottedChild;
}

export default class Card extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className={this.props.className}>
                <Slot slot='header'>{this.props.children}</Slot>
                <Slot slot='body'>{this.props.children}</Slot>
                <Slot slot='footer'>{this.props.children}</Slot>
            </div>
        )
    }
};
