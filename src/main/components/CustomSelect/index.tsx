import { FC, ComponentProps } from 'react';
import { Select } from 'antd';
import { omit } from 'lodash';
import './styles.css';


interface ICustomSelectProps extends ComponentProps<typeof Select> {
  values: string[];
}


const CustomSelect: FC<ICustomSelectProps> = (props) => (
  <Select
    {...omit(props, 'values')}
    onClick={e => e.stopPropagation()}
    bordered={false}
    className='select__box'
  >
    {props.values.map((value, idx) => 
      <Select.Option value={value} key={idx}>
        {value}
      </Select.Option>
    )}
  </Select>
);


export default CustomSelect;