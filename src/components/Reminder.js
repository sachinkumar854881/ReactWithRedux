import React from 'react'
import {addTask} from '../redux.js'
import {useDispatch, useSelector} from "react-redux"
  
function Reminder() {
    const output = useSelector(function(data){
        return data.myReducer.allTask
    })
   
    const[mytask,setMyTask] = React.useState("")
    const dispatch = useDispatch()
    
    function collectIt(event){
            setMyTask(event.target.value)
    }
    function submitData(){
        dispatch(addTask(mytask))
    }
   
    return (
        <div>
            <input type="text" onChange={collectIt}/>
            <button onClick={submitData}>Submit</button>
            <div>
                {
                    output.map(function(task){
                        return <li>{task}</li>
                    })  
                }
            </div>
        </div>
    )
} 
export default Reminder