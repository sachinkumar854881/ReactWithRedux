// const Redux = require("redux")
import {createStore, combineReducers} from 'redux'

const initialData = {
    allTask:["Eating","Drinking"]
}

export function addTask(task){
    return{
        type:"ADD_TASK",
        payload:task
    }
}

const myReducer = (state = initialData, action) =>{
    if(action.type == "ADD_TASK"){
        return{ 
            allTask : [...state.allTask, action.payload]
        }
    }
    return state
}
const totalReducer = combineReducers({
    myReducer : myReducer
})
export const myStore = createStore(totalReducer)