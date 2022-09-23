import { FC } from 'react';
import { omit } from 'lodash';
import { Table, TableProps } from 'antd';
import './styles.css';


interface ICustomTableProps extends TableProps<any> {
  onRowClick?(idx?: number): void;
  activeRowIdx?: number;
}


const CustomTable: FC<ICustomTableProps> = (props) => {
  const { activeRowIdx, onRowClick } = props;

  return (
    <Table
      {...omit(props, 'onRowClick', 'activeIdx')}
      onRow={(_, idx) => ({
        onClick: () => onRowClick && onRowClick(idx === activeRowIdx ? undefined : idx)
      })}
      rowClassName={(_, idx) => 
        'customtable__row ' + (idx === activeRowIdx ? 'customtable__row-active' : '')
      }
      pagination={false}
      scroll={{
        y: 450,
        x: 'max-content'
      }}
    />
  );
};


export default CustomTable;