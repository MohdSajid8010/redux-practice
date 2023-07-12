import store from "./store.js"
import { INCREAMENT,DECREMENT,RESET } from "./actions/actionType.js"

console.log(store.getState())

// store.subcribe(()=>{
//     console.log("value updated",store.getState())
// })

// store.dispatch(increment());
