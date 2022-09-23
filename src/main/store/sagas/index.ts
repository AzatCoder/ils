import { all } from 'redux-saga/effects';
import watchFetchRoute from './route';
import watchSelectChange from './select';


export default function* rootSaga() {
  yield all([
    watchFetchRoute(),
    watchSelectChange()
  ]);
}