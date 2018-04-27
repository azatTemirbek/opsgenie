import React, { Component } from "react";
import ReactDOM from "react-dom";
import ALERTS from './alerts.json';
import NOTES from './notes.json';

import './App.css';
class App extends Component {
    constructor() {
        super();
        this.state = {
            alerts: ALERTS.alerts,
            range: ALERTS.dateTimeRange,
            notes: NOTES.notes
        };
    }

    render() {
        return <div className="DottedBox">data</div>
    }
}
export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;