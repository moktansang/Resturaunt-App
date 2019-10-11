// VENDOR
import { combineReducers } from 'redux'

// APP
import AppNavigationReducer from '../components/AppNavigator/AppNavigator.reducer'

/** combine all reducers for redux states */
const rootReducer = combineReducers({
    AppNav: AppNavigationReducer,
})

export default rootReducer;