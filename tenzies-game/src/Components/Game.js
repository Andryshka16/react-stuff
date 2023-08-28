import React from "react"

export function Game(props){

    return (
        <div id={"diceContainer"}>
            {props.field.map((i,n) => <div
                className={"dice"}
                key={n}
                onClick={()=>props.handleClick(n)}
                style={{background: props.chosen.includes(n)?"lightgreen":"white"}}
            >{i}</div>)}
        </div>
    )
}