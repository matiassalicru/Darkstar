import { types } from "../types/types";

export const viewReducer = (state={}, action) =>{

    switch (action.type) {
        case types.setView:
            return action.payload;
    
        default:
            return state;
    }

}