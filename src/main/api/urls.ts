import { GRAPHHOPPER_API_KEY } from './tokens';

export const MAP_LAYER_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
export const GRAPHHOPPER_URL = 'https://graphhopper.com';
export const GRAPHHOPPER_ROUTE_URL = GRAPHHOPPER_URL + '/api/1/route';


export const routesUrl = (p1: TCoordinates, p2: TCoordinates) =>
  `${GRAPHHOPPER_ROUTE_URL}`
  + `?point=${p1.join(',')}`
  + `&point=${p2.join(',')}`
  + `&points_encoded=false`
  + `&profile=car`
  + `&key=${GRAPHHOPPER_API_KEY}`;
