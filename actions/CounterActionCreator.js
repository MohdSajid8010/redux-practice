//action creator
//action creator function return an object
//action are object
//for every action have diff action-creator and reducer
import { INCREAMENT,DECREMENT,RESET } from "./actionType.js";


export const increment=()=>{

    return {
        type:INCREAMENT
    }
}

export const decrement=()=>{

    return {
        type:DECREMENT
    }
}

export const reset=()=>{

    return {
        type:RESET
    }
}