import { IActionOrderLocationChanged, IActionRouteFetchRequested, TPoint } from './types';


export const ROUTE_FETCH_REQUESTED = 'ROUTE_FETCH_REQUESTED';
export const ROUTE_FETCH_SUCCEEDED = 'ROUTE_FETCH_SUCCEEDED';
export const ROUTE_FETCH_FAILED = 'ROUTE_FETCH_FAILED';
export const ORDER_LOCATION_CHANGED = 'ORDER_LOCATION_CHANGED';
export const ORDER_DEACTIVATED = 'ORDER_DEACTIVATED';

export const fetchRoute = (orderIdx: number): IActionRouteFetchRequested => ({
  type: ROUTE_FETCH_REQUESTED,
  activeOrderIdx: orderIdx
});

export const changeOrderLocation = (
  orderIdx: number,
  point: TPoint,
  selectedLocationIdx: number
): IActionOrderLocationChanged => ({
  type: ORDER_LOCATION_CHANGED,
  orderIdx,
  point,
  selectedLocationIdx
});