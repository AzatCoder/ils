import { IRootState } from './types';
import { locations } from '../config';


const initialState: IRootState = {
  pending: false,
  orders: [
    // random orders
    {
      start: locations[0],
      end: locations[8],
    },
    {
      start: locations[4],
      end: locations[5],
    },
    {
      start: locations[8],
      end: locations[7],
    },
    {
      start: locations[6],
      end: locations[9],
    },
    {
      start: locations[7],
      end: locations[2],
    },
    {
      start: locations[3],
      end: locations[4],
    },
    {
      start: locations[0],
      end: locations[3],
    },
    {
      start: locations[4],
      end: locations[6],
    },
    {
      start: locations[1],
      end: locations[2],
    },
    {
      start: locations[6],
      end: locations[1],
    },
  ]
}


export default initialState;