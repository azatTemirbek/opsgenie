import React, { Component } from "react";
import ReactDOM from "react-dom";
import ALERTS from './data/alerts.json';
import NOTES from './data/notes.json';

/**
 * base class to easy connection between components
 * i will extend all the components from this Base Component
 * todo export class to another file
 */
export class Base extends Component{
    constructor(props){
        super(props)
        this.state = {
            alerts: ALERTS.alerts,
            range: ALERTS.dateTimeRange,
            notes: NOTES.notes
        };
    }
}

/**
 * Start ui class
 */
import './App.css';
class App extends Base {
    constructor() {
        super();
    }

    render() {
        console.log(this.state);
        return <div className="DottedBox">data</div>
    }
}
export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;