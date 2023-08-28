import React, {useState} from "react";
import {Header} from "./Components/Header"
import {Game} from "./Components/Game"
import {Button} from "./Components/Button"

export default function App() {

    let [field, setField] = useState(Array.from({length: 10}, () => Math.floor(Math.random() * 6)+1))
    let [chosen, setChosen] = useState([])

    function clickOnDice(index){

        if (chosen.includes(index)){
            setChosen(chosen.filter(elm => elm!==index))
        }
        else if (chosen.length===0 || field[index]===field[chosen[chosen.length-1]]){
            setChosen([...chosen, index])
        }
    }

    function rollDices() {
        let newField = [...field]

        newField.forEach((elm,idx,arr)=>{
            if(!chosen.includes(idx)){
                arr[idx]=Math.floor(Math.random()*6)+1
            }
        })

        setField(newField)
    }

    function restart() {
        setChosen([])
        setField(Array.from({length: 10}, () => Math.floor(Math.random() * 7)))
    }


    return (
            <div id={"app"}>
                <Header/>
                <Game
                    field={field}
                    handleClick={clickOnDice}
                    chosen={chosen}
                />
                <Button
                    handeClick={chosen.length>9 ? restart :rollDices}
                    text={chosen.length>9 ? "Restart":"Roll"}/>
            </div>
    )
}

