import { FC, useLayoutEffect } from 'react';
import { useMap } from 'react-leaflet';


interface IResizableProps {
  mapId: string;
}


const Resizable: FC<IResizableProps> = ({ mapId }) => {
  const map = useMap();

  useLayoutEffect(() => {
    const element = document.getElementById(mapId) as HTMLElement;
    const onResize = new ResizeObserver(() => map.invalidateSize());

    onResize.observe(element);

    return () => onResize.disconnect();
  });

  return null;
}


export default Resizable;