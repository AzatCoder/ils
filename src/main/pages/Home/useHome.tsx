import Select from '../../components/CustomSelect';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store/types';
import { locations } from '../../config';
import { BaseOptionType } from 'antd/lib/select';
import { changeOrderLocation } from '../../store/actions';
import { fetchRoute } from '../../store/actions';


const renderSelect = (
  onChange: (idx: number, selectedIdx: number) => void
) => (
  locationTxt: string,
  location: { key: number }
) => (
  <Select
    onChange={(_, selected: BaseOptionType) => onChange(location.key, Number(selected.key))}
    value={locationTxt}
    values={locations.map(({ name }) => name)}
  />
);


const useHome = () => {
  const dispatch = useDispatch();
  const { orders, activeOrderInfo, pending } = useSelector((state: IRootState) => state);

  const activeOrder = activeOrderInfo && orders[activeOrderInfo.idx];
  const pointPositions = activeOrder && [
    activeOrder.start.coordinates,
    activeOrder.end.coordinates
  ];

  const dataSource = orders.map((order, idx) => ({
    start: order.start.name,
    end: order.end.name,
    key: idx
  }));

  const columns = [
    {
      title: 'Погрузка',
      dataIndex: 'start',
      key: 'start',
      render: renderSelect((orderIdx, selectedLocationIdx) =>
        dispatch(changeOrderLocation(orderIdx, 'start', selectedLocationIdx)))
    },
    {
      title: 'Разгрузка',
      dataIndex: 'end',
      key: 'end',
      render: renderSelect((orderIdx, selectedLocationIdx) =>
        dispatch(changeOrderLocation(orderIdx, 'end', selectedLocationIdx)))
    },
  ];

  return {
    pointPositions,
    dataSource,
    columns,
    mapLoading: pending,
    activeRowIdx: activeOrderInfo && activeOrderInfo.idx,
    routeCoordinates: activeOrderInfo && activeOrderInfo.routeCoordinates,
    onRowClick: (idx?: number) => idx !== undefined && dispatch(fetchRoute(idx))
  }
}


export default useHome;