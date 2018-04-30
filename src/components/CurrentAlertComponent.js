import React from "react";
// import ReactDOM from "react-dom";
import Card from "./Card";
import {Base} from "../data/Base";

export class CurrentAlertComponent extends Base {
    constructor (props){
        super(props);
        this.list = this.myfilter(this.state.CurrentAlert);
    }

    render (){
        return (
            <Card className='card text-dark bg-light mb-3'>
                <div className="card-header" data-slot="header">
                    <div className="row">
                        <div className="col">
                            <div className="float-left">
                                <div className="col">
                                    {this.state.CurrentAlert.isSeen && <i className="fa fa-eye text-dark"></i> }
                                    {!this.state.CurrentAlert.isSeen && <i className="fa fa-eye-slash text-danger"></i> }
                                    {this.state.CurrentAlert.owner && <span className="badge badge-dark text-white ml-3">Owner : {this.state.CurrentAlert.owner}</span> }
                                </div>
                            </div>
                            <div className="float-right">
                                <button type="button"
                                        onClick={()=>{this.props.handleClickBtn(null)}}
                                        className="btn btn-danger text-white float-right">
                                    Back
                                    <i className="ml-2 fa fa-arrow-circle-left"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body  " data-slot="body">
                    {Object.keys(this.state.CurrentAlert).map(el=>{
                        switch (typeof this.state.CurrentAlert[el]){
                            case 'boolean':
                                return (
                                    <div className="card-title" key={el}>
                                        {el} : {this.state.CurrentAlert[el] && <i className="fa fa-check-circle text-success"></i>}
                                               {!this.state.CurrentAlert[el] && <i className="fa fa-times-circle text-danger"></i>}
                                    </div>
                                );
                            case 'object':
                                return (
                                    <div className="card-title" key={el}>
                                        {el} : {this.state.CurrentAlert[el].map(e=>{
                                            return(
                                                <span key={e} className="badge badge-warning m-2 p-2">{e}</span>
                                            )
                                    })}
                                    </div>
                                );
                            default :
                                return (
                                    <div className="card-title" key={el}>
                                        {el} : {this.state.CurrentAlert[el]}
                                    </div>
                                )
                        }

                    })}

                </div>

                {
                    this.list &&
                    <div className="" data-slot="footer">
                        <h4 className='text-center' >Notes</h4>
                        {
                            this.list.map((item)=>{
                                if (item.note.trim() !== ''){
                                    return (
                                        <li className='p-3 m-3' key={item.id}>{item.note}</li>
                                    )
                                }
                            })
                        }
                    </div>}
            </Card>
        );
    }
}