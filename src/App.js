import React from "react";
import ReactDOM from "react-dom";
/**
 * coponents
 */
import Card from "./components/Card";
import {Item} from "./components/Item";
import {Base} from "./data/Base";
/**
 * css
 */
import './App.css';
/**
 * Start ui class
 */
export default class App extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card className={''}>
                <div data-slot="header">
                    Navigation component normally
                </div>
                <div data-slot="body" className={'list-container'}>
                    {this.state.alerts.map(item => {
                        return (
                            <Item
                                className={'card text-white bg-primary mb-3'}
                                key={item.id}
                                {...item}
                            />
                        )
                    })}
                </div>
                <div data-slot="footer">
                    foooter component
                </div>
            </Card>
        );
    }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;