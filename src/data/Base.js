import React,{Component} from "react";
import ALERTS from './alerts.json';
import NOTES from './notes.json';
/**
 * base class to easy connection between components
 * i will extend all the components from this Base Component
 * todo export class to another file
 */
export class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alerts: ALERTS.alerts,
            range: ALERTS.dateTimeRange,
            notes: NOTES.notes
        };

    }
    hasItem(aler){
        return this.state.alerts.filter((item)=>{
            return item.id === aler.id
        })
    }
    myfilter(aler){
        if (this.hasItem(aler)){
            return this.state.notes.filter((item)=>{
                return aler.id === item.alertId;
            })
        }
    }
}