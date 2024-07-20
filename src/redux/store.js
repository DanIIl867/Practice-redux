import { legacy_createStore as createStore} from 'redux'
import { devToolsEnhancer } from "@redux-devtools/extension";
import {configureStore, createSlice } from '@reduxjs/toolkit';

// export const initialCouter = (value) => {
//     return{
//         type: 'counter/increment',
//         payload: value
//     }
// }

// const rootReduser = (state = initialState, action) => {
//     switch (action.type) {
//         case 'counter/increment':
//             return{
//                 ...state,
//                 value: state.value += action.payload
//             }
//         default:
//             return state
//     }
// }

const counterSlice = createSlice({
    name: 'counter',
    initialState: {value: 5},
    reducers: {
        increment(state, action){
            return {
                ...state, 
                value: state.value + action.payload
            }
        }
    }
})



export const store = configureStore({reduser: counterSlice.reducer})