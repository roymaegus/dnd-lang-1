import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from '../DraggableItem'; // Directly from src
import DropZone from '../DropZone'; // Directly from src
import { shuffleArray } from '../shuffle'; // Directly from src
import Layout from '../Layout'; // Directly from src
import '../styles.css'; // Directly from src


const SentenceBuilder7 = () => {
  const initialItems = [
    { id: 'item1', code: 'Por favor', hint: 'First word (polite phrase)' },
    { id: 'item2', code: 'abre', hint: 'Second word (imperative verb)' },
    { id: 'item3', code: 'la', hint: 'Third word (article)' },
    { id: 'item4', code: 'ventana', hint: 'Fourth word (noun)' },
    { id: 'item5', code: 'ahora', hint: 'Fifth word (time adverb)' },
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
                <div>{isCorrectOrder ? 'Correct! The sentence is: Por favor, abre la ventana ahora.' : 'Incorrect'}</div>
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

export default SentenceBuilder7;
