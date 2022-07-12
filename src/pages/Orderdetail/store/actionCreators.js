import { getShopListRequest, getMilkTeaRequest } from "../../../api/request";
import * as actionTypes from './constants'

export const changeShopList = (data) => ({
    type: actionTypes.CHANGE_SHOP_LIST,
    data
})

export const getShopList = () => {
    return (dispatch) => {
        getShopListRequest().then(data => {
            dispatch(changeShopList(data.data.shoplist))
        })
    }
}

export const changeMilkTeaList = (data) => ({
    type: actionTypes.CHANGE_MILK_TEA_LIST,
    data
})

export const getMilkTeaList = () => {
    return (dispatch) => {
        getMilkTeaRequest().then(data => {
            dispatch(changeMilkTeaList(data.data.milklist))
        })
    }
}