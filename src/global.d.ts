declare global {
  type TCoordinates = [ number, number ];
  
  interface ILocation {
    name: string;
    coordinates: TCoordinates;
  }
}

export {}
