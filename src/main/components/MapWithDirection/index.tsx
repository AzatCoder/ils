import { FC } from 'react';
import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import { MAP_LAYER_URL } from '../../api/urls';
import Resizable from './resizable';
import './styles.css';


interface IMapWithDirectionProps {
  positions?: TCoordinates[];
  routeCoordinates?: TCoordinates[];
  loading?: boolean;
}


const mapId = '@@leaflet-map';

const MapWithDirection: FC<IMapWithDirectionProps> = ({
  positions,
  routeCoordinates,
  loading
}) => (
  <MapContainer
    center={[53.48064857794447, -2.2425702999181234]}
    zoom={5}
    style={{ width: '100%', height: '100%' }}
    id={mapId}
  >
    <Resizable mapId={mapId} />
    <TileLayer
      url={MAP_LAYER_URL}
    />
    {!loading && positions && positions.map((position, idx) => 
      <Marker position={position} key={idx} />
    )}
    {!loading && routeCoordinates && 
      <Polyline pathOptions={{ color: 'lime' }} positions={routeCoordinates} />
    }
  </MapContainer>
);


export default MapWithDirection;