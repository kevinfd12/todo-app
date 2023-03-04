import React, { useState } from 'react';
import { ListItem } from '../utils/listItem';
import './inputBar.scss';

export function InputBar() {
  const [todos, setTodos] = useState<string[]>([]); // at first I only had one useState - const [todo, setTodo] = useState(''); why do we need two?
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault(); // The page was being refreshed everytime I submitted the form.
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  return (
    <>
      <div className="inputBar">
        <div className="inputBar__wrapper">
          <form onSubmit={handleSubmit}>
            <div className="inputBar__input-wrapper">
              <label htmlFor="inputBar">Add a task to your to-do list, </label>
              <div className="inputSubmit">
                <input
                  type="text"
                  className="inputBar__input"
                  placeholder="add a todo"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                ></input>
                <input type="submit" value="submit"></input>
              </div>
            </div>
          </form>
        </div>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <>
            <div className="ToDo-Wrapper">
              <p>To-Do Task #{index}</p>
              <ListItem indexes={index} todos={todo} />
            </div>
          </>
        ))}
      </ul>
    </>
  );
}
