import React from "react";
import team_mem from './millennial.png';
import github from './github.svg';
import linkdin from './linkdin.svg';
import instagram from './instagram.svg';
import facebook from './facebook.svg';
import "./App.css";
//import "./circle.css";

function team(props){
    return (
    <div className="container">
        <div className="card">
            <div className="imgBx">
                <img className="circular--square" src={team_mem} alt="DSC"/>
            </div>
            <div className="contentBx">
                <h2>{props.name}</h2>
                <div className="size">
                    <h3>{props.role}</h3>
                </div>
                <div className="color">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default team;
