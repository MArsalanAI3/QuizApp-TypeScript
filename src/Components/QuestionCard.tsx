import React, { useState } from 'react';
import {questionPropsType} from './../Types/quiz_types'


const QuestionCard:React.FC<questionPropsType> = ({question,options,callback}) => {
    
    let [selectionAns,setSelectionAns]=useState("");
    
const handleSelection =(ev:any)=>{
    setSelectionAns(ev.target.value)
}

    return (
        <div className="question-container">
<div className="question" style={{fontWeight: "bolder"}}>
        {question}
</div>

        <form className="question-form" onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e, selectionAns)}>
            {
                options.map((opt:string,ind:number)=>{
                    return(
                        <div key={ind}>
                        <label className="radio">
                            <input type="radio"
                             name="opt"
                             required
                             checked={selectionAns === opt}
                             value={opt}  
                             onChange={handleSelection}/>
                            {opt}
                        </label>
                        </div>
                    )
                })
            }
            <input className="submit" type="submit" />
        </form>
        </div>
    )

}


export default QuestionCard;