import { ORDER_LOCATION_CHANGED, ROUTE_FETCH_FAILED, ROUTE_FETCH_REQUESTED, ROUTE_FETCH_SUCCEEDED } from './actions';


export type TPoint = 'start' | 'end';

export interface IOrder {
  start: ILocation;
  end: ILocation;
} 

export interface IActiveOrderInfo {
  idx: number;
  routeCoordinates: TCoordinates[];
}

export interface IRootState {
  activeOrderInfo?: IActiveOrderInfo;
  orders: IOrder[];
  pending: boolean;
}

export interface IActionRouteFetchRequested {
  type: typeof ROUTE_FETCH_REQUESTED;
  activeOrderIdx: number;
}

interface IActionRouteFetchSucceeded {
  type: typeof ROUTE_FETCH_SUCCEEDED;
  activeOrderInfo: IRootState['activeOrderInfo'];
}

interface IActionRouteFetchFailed {
  type: typeof ROUTE_FETCH_FAILED;
}

export interface IActionOrderLocationChanged {
  type: typeof ORDER_LOCATION_CHANGED;
  orderIdx: number;
  point: TPoint;
  selectedLocationIdx: number;
}

export type TAction = IActionRouteFetchRequested
  | IActionRouteFetchSucceeded
  | IActionRouteFetchFailed
  | IActionOrderLocationChanged