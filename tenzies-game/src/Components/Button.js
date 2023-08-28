import React from "react";

export function Button(props){
    return (
        <button id={"roll"} onClick={props.handeClick}>{props.text}</button>
    )
}