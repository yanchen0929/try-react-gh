import { getShopListRequest } from '../../../../api/request'
import * as actionTypes from './constants'

export const changeMapShow = (data) => ({
    type: actionTypes.CHANGE_MAP_SHOW,
    data
})

export const getMapShow = (data) => {
    return (dispatch) => {
        dispatch(changeMapShow(!data))
    }
}

export const changeShopList = (data) => ({
    type: actionTypes.CHANGE_SHOP_LIST,
    data
})

export const getShopList = () => {
    return (dispatch) => {
        getShopListRequest().then(data => {
            // console.log(data.data);
            dispatch(changeShopList(data.data.shoplist))
        })
    }
}