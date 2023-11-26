import { SAVE_ENTRIES } from "./entriesActionTypes";

export const saveReduxEntries = (entries) => {
    return {
        type: SAVE_ENTRIES,
        entries
    }
}