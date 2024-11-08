import {ACTIONS} from "./actions"

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

export const TodoReducer = (state = initialState,action) => {
    switch(action.type){
        case ACTIONS.create:
            return [...state,action.payload]
        case ACTIONS.delete:
            const deleteIndex = state.findIndex(item => item.age == action.payload)
            state.splice(deleteIndex,1)
            return [...state]
        case ACTIONS.update:
            const findToUpdate = state.find(item => item.age == action.payload.age)
            findToUpdate.username = action.payload.newData.username
            findToUpdate.age = action.payload.newData.age
            return[...state]
        default:{
            return state
        }
    }
}