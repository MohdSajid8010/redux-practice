import { INCREAMENT,DECREMENT,RESET } from "../actions/actionType.js";

let initial_val=0;//counter initilize state

const CounterReducer = (state=initial_val , action) => {
 
    switch(action.type)
    {
        case INCREAMENT : return state+1;
        case DECREMENT : return state -1;
        case RESET : return 0;
         default : state;
    }
}

export default CounterReducer