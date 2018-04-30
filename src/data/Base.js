import React,{Component} from "react";
import ALERTS from './alerts.json';
import NOTES from './notes.json';
/**
 * base class to easy connection between components
 * i will extend all the components from this Base Component
 */
export class Base extends Component {
    static ins;
    constructor(props) {
        super(props);
        if(Base.ins){
            this.state = Base.ins.state;
            this.ins = Base.ins;
        }else{
            this.state = {
                alerts: ALERTS.alerts,
                range: ALERTS.dateTimeRange,
                notes: NOTES.notes,
                CurrentAlert:''
            };
            Base.ins = this;
        }

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
}