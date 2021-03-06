import React from "react";
import { Jumbotron } from 'reactstrap';
import "./Instructions.css";

const Instructions = (props) => (
    <div className="jumbo">
        <Jumbotron style={{'background-image': `url("https://raw.githubusercontent.com/Jrivenburgh/clicky/master/public/assets/images/Stadium.png")`}} >
            <h3 className=" animated fadeInDown instructions">{props.message}</h3>
        </Jumbotron>
    </div>
);

export default Instructions;