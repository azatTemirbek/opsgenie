import React, {Component} from "react";
import ReactDOM from "react-dom";
/**
 * coponents
 */
import Card from "./components/Card";
import {Item} from "./components/Item";
import {CurrentAlertComponent} from "./components/CurrentAlertComponent";
import ALERTS from './data/alerts.json';
import NOTES from './data/notes.json';
/**
 * css
 */
import './App.css';

/**
 * Start ui class
 */
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            alerts: ALERTS.alerts,
            range: ALERTS.dateTimeRange,
            notes: NOTES.notes
        };
        this.handleClickBtn = this.handleClickBtn.bind(this);
        this.hasItem = this.hasItem.bind(this);
        this.myfilter= this.myfilter.bind(this);
    }
    /**
     * checks for is alert exists in alerts array?
     * @param aler
     */
    hasItem(aler){
        let arr =  this.state.alerts.filter((item)=>{
            return item.id === aler.id
        });
        return arr[0];
    }

    /**
     * returns list of notes
     * one to many relationship
     * @param aler
     */
    myfilter(aler){
        if (this.hasItem(aler)){
            return this.state.notes.filter((item)=>{
                return aler.id === item.alertId;
            })
        }
    }

    /**
     * todo implement seep togle
     * @param clickedProps
     */
    handleClickBtn(clickedProps){
        if(clickedProps){
            return this.setState((currentSate)=>{
                return {CurrentAlert: this.hasItem(clickedProps) }
            });
        }else{
            return this.setState((currentSate)=>{
                return {CurrentAlert: ''}
            });
        }

    }
    render() {
        return (
            <div>
                {!this.state.CurrentAlert &&
                <Card className={''}>
                    <div data-slot="header">
                        Navigation component normally
                    </div>
                    <div data-slot="body" className={'list-container'} >
                        {this.state.alerts.map(item => {
                            return (
                                <Item
                                    className={'card text-dark bg-light  mb-3'}
                                    key={item.id}
                                    {...item}
                                    handleClickBtn={this.handleClickBtn}
                                />
                            )
                        })}
                    </div>
                    <div data-slot="footer">
                        foooter component
                    </div>
                </Card>
                }
                {this.state.CurrentAlert &&
                    <CurrentAlertComponent
                        CurrentAlert = {this.state.CurrentAlert}
                        list={this.myfilter(this.state.CurrentAlert)}
                        handleClickBtn={this.handleClickBtn}
                    />
                }
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("app"));