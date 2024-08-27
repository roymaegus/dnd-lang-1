import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from '../DraggableItem'; // Directly from src
import DropZone from '../DropZone'; // Directly from src
import { shuffleArray } from '../shuffle'; // Directly from src
import Layout from '../Layout'; // Directly from src
import '../styles.css'; // Directly from src

const SentenceBuilder = () => {
  const initialItems = [
    { id: 'item1', code: 'Yo', hint: 'First word (subject)' },
    { id: 'item2', code: 'quiero', hint: 'Second word (verb)' },
    { id: 'item3', code: 'aprender', hint: 'Third word (infinitive verb)' },
    { id: 'item4', code: 'español', hint: 'Fourth word (object)' },
    { id: 'item5', code: 'rápidamente', hint: 'Fifth word (adverb)' },
  ];

  const [column1Items, setColumn1Items] = useState(shuffleArray(initialItems));
  const [column2Items, setColumn2Items] = useState([]);
  const [isCorrectOrder, setIsCorrectOrder] = useState(null);

  const moveItem = (itemId, toColumn, setToColumn, fromColumn, setFromColumn) => {
    const item = fromColumn.find(i => i.id === itemId);
    if (item) {
      setFromColumn(fromColumn.filter(i => i.id !== itemId));
      setToColumn([...toColumn, { ...item, index: column2Items.length }]);
    }
  };

  const moveItemWithinColumn = (fromIndex, toIndex, column, setColumn) => {
    const updatedItems = [...column];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setColumn(updatedItems);
  };

  useEffect(() => {
    if (column2Items.length > 0) {
      checkOrder(column2Items);
    } else {
      setIsCorrectOrder(null);
    }
  }, [column2Items]);

  const checkOrder = (items) => {
    const ids = items.map(item => item.id);
    const isOrdered = ids.every((id, index) => id === `item${index + 1}`);
    setIsCorrectOrder(isOrdered);
  };

  const resetColumns = () => {
    setColumn1Items([...column1Items, ...column2Items.map(item => ({ ...item, index: undefined }))]);
    setColumn2Items([]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Layout onReset={resetColumns}>
        <div className="columns-wrapper">
          <div className="columns-container">
            <div className="column">
              <h2>Words</h2>
              <DropZone
                items={column1Items}
                onDrop={(itemId) => moveItem(itemId, column1Items, setColumn1Items, column2Items, setColumn2Items)}
                moveItem={(fromIndex, toIndex) => moveItemWithinColumn(fromIndex, toIndex, column1Items, setColumn1Items)}
                hints={[]}
              />
            </div>
            <div className="column">
              <h2>Your Sentence</h2>
              <DropZone
                items={column2Items}
                onDrop={(itemId) => moveItem(itemId, column2Items, setColumn2Items, column1Items, setColumn1Items)}
                moveItem={(fromIndex, toIndex) => moveItemWithinColumn(fromIndex, toIndex, column2Items, setColumn2Items)}
                hints={[]}
              />
              {isCorrectOrder !== null && (
                <div>{isCorrectOrder ? 'So far so good!' : 'Keep Going'}</div>
              )}
            </div>
          </div>
        </div>
        <div className="hints-container">
          {initialItems.map((item, index) => (
            <div key={index} style={{ padding: '25px', marginBottom: '15px', backgroundColor: 'white', color: 'black' }}>
              {item.hint}
            </div>
          ))}
        </div>
      </Layout>
    </DndProvider>
  );
};

export default SentenceBuilder;


