import React, { Component } from 'react';

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
                <Slot className="card-header" slot='header'>{this.props.children}</Slot>
                <Slot className="card-body  " slot='body'>{this.props.children}</Slot>
                <Slot className="card-footer" slot='footer'>{this.props.children}</Slot>
            </div>
        )
    }
};
