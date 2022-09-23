import { call, select, put, takeLatest, StrictEffect } from 'redux-saga/effects';
import { getRoutes } from '../../api';
import { ROUTE_FETCH_FAILED, ROUTE_FETCH_REQUESTED, ROUTE_FETCH_SUCCEEDED } from '../actions';
import { IActionRouteFetchRequested, IOrder, IRootState, TAction } from '../types';


function* fetchRoute(action: IActionRouteFetchRequested): Generator<
  StrictEffect,
  void,
  IRootState['orders'] | TCoordinates[]
> {
  const orders = yield select((state: IRootState) => state.orders);
  const order = orders[action.activeOrderIdx] as IOrder;

  try {
    const route = yield call(getRoutes, order.start.coordinates, order.end.coordinates);
    yield put<TAction>({
      type: ROUTE_FETCH_SUCCEEDED,
      activeOrderInfo: {
        idx: action.activeOrderIdx,
        routeCoordinates: route as TCoordinates[]
      }
    });
  } catch (e) {
    yield put<TAction>({ type: ROUTE_FETCH_FAILED });
  }
}


function* watchFetchRoute() {
  yield takeLatest(ROUTE_FETCH_REQUESTED, fetchRoute);
}


export default watchFetchRoute;