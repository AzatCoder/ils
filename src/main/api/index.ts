import axios from 'axios';
import { IRoutesData } from './types';
import { routesUrl } from './urls';

export const getRoutes = async (p1: TCoordinates, p2: TCoordinates): Promise<TCoordinates[]> => {
  const data = await axios.get<IRoutesData>(routesUrl(p1, p2));

  return data.data.paths[0].points.coordinates.map(coordinate => [coordinate[1], coordinate[0]]);
}