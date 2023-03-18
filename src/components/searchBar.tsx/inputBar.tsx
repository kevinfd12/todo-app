import React, { useState } from 'react';
import { Button } from '../button/button';
import { ListItem } from '../utils/listItem';
import { TodoModal } from '../utils/TodoModal';
import './inputBar.scss';

export interface Todo {
  id: number;
  value: string;
}

export function InputBar() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState<Todo | undefined>(undefined);

  const getNextId = () => {
    let id = 1;
    while (todos.some((todo) => todo.id === id)) {
      id++;
    }
    return id;
  };

  const handleSubmit = () => {
    if (inputValue !== '') {
      const newTodo = { id: getNextId(), value: inputValue };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleModalSubmit = () => {
    if (!editedTodo) {
      return;
    }
    const newTodos = todos.filter((todo) => todo.id !== editedTodo.id);
    setTodos([...newTodos, editedTodo]);
    handleEditMode(undefined);
  };

  const handleEditMode = (todo: Todo | undefined) => {
    setEditMode((isEditOn) => !isEditOn);
    setEditedTodo(todo);
  };

  const handleDelete = (deleteTodo: Todo) => {
    const todoDelete = todos.filter((todo) => todo.id !== deleteTodo.id);
    setTodos(todoDelete);
  };

  return (
    <>
      <div className="inputBar">
        <div className="inputBar__wrapper">
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
              <Button value="submit" onButtonClick={handleSubmit}></Button>
            </div>
          </div>
        </div>
      </div>

      <ul>
        {todos.map((todo, index, arr) => (
          <ListItem
            todo={todo}
            handleDelete={handleDelete}
            index={index + 1}
            arrLength={arr.length}
            handleEditMode={handleEditMode}
            key={todo.id}
          />
        ))}
      </ul>
      {editMode && (
        <TodoModal
          handleEditMode={handleEditMode}
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
          handleModalSubmit={handleModalSubmit}
        />
      )}
    </>
  );
}
