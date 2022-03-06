import {combineReducers} from 'redux'
import { chartReducer } from './chart/chartReducer'

export default combineReducers({
    chartReducer:chartReducer,
})