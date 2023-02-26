import React, { useState } from 'react';

export function InputBar() {
  const [todos, setTodos] = useState<string[]>([]); // at first I only had one useState - const [todo, setTodo] = useState(''); why do we need two?
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault(); // The page was being refreshed everytime I submitted the form.
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  return (
    <div className="inputBar">
      <div className="inputBar__wrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="inputBar">Text</label>
          <input
            type="text"
            className="inputBar__input"
            placeholder="add a todo"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          ></input>
          <input type="submit" value="submit"></input>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
