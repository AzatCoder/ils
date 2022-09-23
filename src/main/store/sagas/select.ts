import { put, select, StrictEffect, takeLatest } from 'redux-saga/effects';
import { fetchRoute, ORDER_LOCATION_CHANGED } from '../actions';
import { IActionOrderLocationChanged, IActiveOrderInfo, IRootState } from '../types';


function* changeSelect({ orderIdx }: IActionOrderLocationChanged): Generator<
  StrictEffect,
  void,
  IActiveOrderInfo | undefined
> {
  const activeOrderInfo = yield select((state: IRootState) => state.activeOrderInfo);
  
  if (activeOrderInfo?.idx === orderIdx) {
    yield put(fetchRoute(orderIdx));
  }
}

function* watchSelectChange() {
  yield takeLatest(ORDER_LOCATION_CHANGED, changeSelect);
}


export default watchSelectChange;