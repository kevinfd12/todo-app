import React, { useState } from 'react';
import { Button } from '../button/button';
import { ListItem } from '../utils/listItem';
import './inputBar.scss';

interface Todo {
  id: number;
  value: string;
}

export function InputBar() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [newItem, setNewItem] = useState('');

  const getNextId = () => {
    let id = 1;
    while (todos.some((todo) => todo.id === id)) {
      id++;
    }
    return id;
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (inputValue !== '') {
      const newTodo = { id: getNextId(), value: inputValue };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleDelete = (deleteTodo: Todo) => {
    const todoDelete = todos.filter((todo) => todo.id !== deleteTodo.id);
    setTodos(todoDelete);
  };

  const handleEdit = () => {
    setEditMode(true);
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
        {todos.map((todo) => (
          <div className="ToDo-Wrapper" key={todo.id}>
            <p>To-Do Task #{todo.id}</p>
            <ListItem indexes={todo.id} todos={todo.value}>
              <Button value={'delete'} onButtonClick={() => handleDelete(todo)}></Button>
              {editMode ? (
                <form onSubmit={handleSubmit}>
                  <input
                    className="input"
                    value={newItem}
                    onChange={(event) => setNewItem(event.target.value)}
                    placeholder="edit"
                  ></input>
                  <input type="submit" value="submit"></input>
                </form>
              ) : (
                <Button value={'edit'} onButtonClick={() => setEditMode(true)}></Button>
              )}
            </ListItem>
          </div>
        ))}
      </ul>
    </>
  );
}
