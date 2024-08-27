import React from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './DraggableItem';

const DropZone = ({ items, onDrop, moveItem, hints }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'ITEM',
    drop: (item) => {
      onDrop(item.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} style={{ border: '1px solid black', minHeight: '200px', padding: '10px', width: '500px', position: 'relative' }}>
      {hints.map((hint, index) => (
        <div key={index} style={{ padding: '25px', border: '1px solid red', marginBottom: '15px', backgroundColor: 'white', color: 'gray' }}>
          {!items.some((item) => item.index === index) && hint}
        </div>
      ))}
      {items.map((item, index) => (
        <DraggableItem key={item.id} id={item.id} code={item.code} index={index} moveItem={moveItem} />
      ))}
    </div>
  );
};

export default DropZone;