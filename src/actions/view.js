import { types } from "../types/types"

export const sendToView = (data) => {
    return {
        type: types.setView,
        payload: data
    }
}