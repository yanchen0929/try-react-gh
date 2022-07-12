import * as actionTypes from "./constants";

const defaultState = {
    shopList: [],
    milkTeaList: [],
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SHOP_LIST:
            return {
                ...state,
                shopList: action.data
            }
        case actionTypes.CHANGE_MILK_TEA_LIST:
            return {
                ...state,
                milkTeaList: action.data
                
            }
        default:
            return state;
    }
}