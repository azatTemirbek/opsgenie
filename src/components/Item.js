import React from "react";
// import ReactDOM from "react-dom";
import Card from "./Card";

export function Item(props) {
    return (
        <Card className={props.className}>
            <div className="card-header" data-slot="header">
                <div className="row">
                    <div className="col">
                        {props.isSeen && <i className="fa fa-eye text-dark"></i> }
                        {!props.isSeen && <i className="fa fa-eye-slash text-danger"></i> }
                        {props.owner && <div className="">Owner : {props.owner}</div> }
                    </div>
                    <div className="col">
                        <div className='float-right'>
                            <div className='float-right'>
                                {props.status && <span className="badge">Status:</span>}
                                <span className="badge badge-warning">{props.status}</span>
                            </div>
                            <div>
                                <span className="badge">{props.createdAt}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body  " data-slot="body">
                <h5 className="card-title">
                    MessageID : {props.id}
                    </h5>
                <p className="card-text">
                    Message : {props.message}
                </p>
            </div>
            <div className="card-footer" data-slot="footer">
                <div className="row">
                    <div className="col">
                        {props.tag.length > 0 && <span>Tags:</span> }
                        {props.tag.map(item=>{
                            return (
                                <span key={item}
                                      className="badge badge-success m-1 p-1">
                                    {item}
                                </span>
                            )
                        })}

                    </div>
                    <div className="col">
                        <button type="button"
                                onClick={()=>{props.handleClickBtn(props)}}
                                className="btn btn-danger text-white float-right">
                            More
                            <i className="ml-2 fa fa-arrow-circle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    );
}
