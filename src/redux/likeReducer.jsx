import {ACTIONS} from "./actions"

const initialState = []

export const LikeReducer  = (state = initialState,action) => {
    switch(action.type){
        case ACTIONS.like:
            const id = state.findIndex(item => item.age == action.payload.age)
            if(id == -1){
                return [...state,action.payload]
            }
            else{
                state.splice(id,1)
                return[...state]
            }
        default:{
            return state
        }
    }
}