import { SAVE_ENTRIES } from "./entriesActionTypes";

const initialState = {
    entries: []
}
const entriesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SAVE_ENTRIES: return {
            ...state,
            entries: action.entries
        }
        default: return state
    }
}

export default entriesReducer