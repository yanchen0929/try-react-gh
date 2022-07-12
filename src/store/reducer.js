import { combineReducers } from 'redux'
import { reducer as nearbyReducer } from '../pages/Food/Nearby/store'
import { reducer as orderdetailReducer } from '../pages/Orderdetail/store'

export default combineReducers({
    nearby: nearbyReducer,
    orderdetail: orderdetailReducer,
})
