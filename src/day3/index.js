import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import ListItem from './components/ListItem';

function App() {
  const [list, setList] = useState([]);
  const [isNew, setIsNew] = useState(false);
  const [text, setText] = useState('');

  // Whenever text changes filter the list and display the filtered list
  useEffect(() => {
    setIsNew(false);
    const filteredList = list.filter((item) => {
      return item.includes(text);
    });
    if (!filteredList.length) {
      setIsNew(true);
    }
  }, [text, list])

  const onChangeText = e => {
    setText(e.target.value);
  }

  const onAdd = () => {
    setList([
      ...list,
      text
    ]);
    setText('');
  }

  const onDelete = (index) => {
    const result = list.filter((_, i) => {
      return i !== index
    });

    setList(result);
  }

  return (
    <>
    <div className="App">
      <h1>Todo</h1>
      <input
        type="text"
        value={text}
        onChange={onChangeText}
        />
        {
          isNew ? <button onClick={onAdd}>Add</button> : null
        }

      <section>
        {/* List items */}
        <ul>
          {
            list.map((value, index) => {
              // filter the list value based on the text entered
              if (value.includes(text)) {
                return (
                  <li key={index}>
                    <ListItem text={value} position={index} onDelete={onDelete} />
                  </li>
                )
              }
              return null;
            })
          }
        </ul>
      </section>
    </div>
    <Footer count={list.length} />
    </>
  );
}

export default App;
