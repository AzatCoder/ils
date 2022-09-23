import { locations } from '../config';
import { ORDER_LOCATION_CHANGED, ROUTE_FETCH_FAILED, ROUTE_FETCH_REQUESTED, ROUTE_FETCH_SUCCEEDED } from './actions';
import initialState from './initialState';
import { IRootState, TAction } from './types';


const reducer = (state = initialState, action: TAction): IRootState => {
  switch (action.type) {
    case ROUTE_FETCH_REQUESTED:
      return {
        ...state,
        pending: true
      }

    case ROUTE_FETCH_SUCCEEDED:
      return {
        ...state,
        activeOrderInfo: action.activeOrderInfo,
        pending: false
      }

    case ROUTE_FETCH_FAILED:
      return {
        ...state,
        activeOrderInfo: undefined,
        pending: false
      }
    
    case ORDER_LOCATION_CHANGED:
      const newState = {...state};
      const location = locations[action.selectedLocationIdx];
      newState.orders[action.orderIdx][action.point] = location;

      return newState;

    default:
      return state
  }
}


export default reducer;