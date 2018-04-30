import React from "react";
import ReactDOM from "react-dom";
/**
 * coponents
 */
import Card from "./components/Card";
import {Item} from "./components/Item";
import {Base} from "./data/Base";
import {CurrentAlertComponent} from "./components/CurrentAlertComponent";
/**
 * css
 */
import './App.css';

/**
 * Start ui class
 */
class App extends Base {
    constructor(props) {
        super(props);
        this.handleClickBtn = this.handleClickBtn.bind(this);
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