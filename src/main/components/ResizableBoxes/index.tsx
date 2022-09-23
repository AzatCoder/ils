import { FC, ReactNode } from 'react';
import { Resizable } from 're-resizable';
import './styles.css';


interface IResizableBoxesProps {
  children: [ ReactNode, ReactNode ];
}


const ResizableBoxes: FC<IResizableBoxesProps> = ({ children }) => {
  return (
    <div className='resizable__layout'>
      <Resizable
        defaultSize={{
          width: '50%',
          height: 'auto',
        }}
        enable={{
          top:false,
          right:true,
          bottom:false,
          left:true,
          topRight:false,
          bottomRight:false,
          bottomLeft:false,
          topLeft:false
        }}
        maxWidth='100%'
        minWidth='100'
        bounds='parent'
        className='resizable__box'
      >
        {children[0]}
      </Resizable>
      <div className='resizable__second-box'>
        {children[1]}
      </div>
    </div>
  );
}


export default ResizableBoxes;