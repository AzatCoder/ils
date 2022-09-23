import { FC } from 'react';
import { Row } from 'antd';
import CustomTable from '../../components/CustomTable';
import MapWithDirection from '../../components/MapWithDirection';
import './styles.css';
import ResizableBoxes from '../../components/ResizableBoxes';
import useHome from './useHome';

const Home: FC = () => {
  const {
    pointPositions,
    dataSource,
    routeCoordinates,
    columns,
    onRowClick,
    activeRowIdx,
    mapLoading
  } = useHome();

  return (
    <Row className='home__box' justify='center' align='middle'>
      <ResizableBoxes>
        <CustomTable
          onRowClick={onRowClick}
          activeRowIdx={activeRowIdx}
          dataSource={dataSource}
          columns={columns}
        />
        <MapWithDirection
          positions={pointPositions}
          routeCoordinates={routeCoordinates}
          loading={mapLoading}
        />
      </ResizableBoxes>
    </Row>
  );
}


export default Home;