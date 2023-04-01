import React, { useEffect, useState } from 'react';
import { InputSearch } from '../inputSearch/inputSearch';
import { ListItem } from '../utils/listItem';
import { TodoModal } from '../utils/TodoModal';
import './Main.scss';

export interface Todo {
  id: number;
  value: string;
}

export function Main() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState<Todo | undefined>(undefined);

  useEffect(() => {
    console.log(localStorage.getItem('todos'));
  }, []);

  const getNextId = () => {
    let id = 1;
    // eslint-disable-next-line
    while (todos.some((todo) => todo.id === id)) {
      id++;
    }
    return id;
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      console.log(storedTodos);
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleSubmit = () => {
    if (inputValue !== '') {
      const newTodo = { id: getNextId(), value: inputValue };
      setTodos([...todos, newTodo]);
      updateLocalStorage([...todos, newTodo]);
      setInputValue('');
    }
  };

  const updateLocalStorage = (todos: Todo[]) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const handleModalSubmit = () => {
    if (!editedTodo) {
      return;
    }
    const newTodos = todos.filter((todo) => todo.id !== editedTodo.id);
    setTodos([...newTodos, editedTodo]);
    updateLocalStorage([...newTodos, editedTodo]);
    handleEditMode(undefined);
  };

  const handleEditMode = (todo: Todo | undefined) => {
    setEditMode((isEditOn) => !isEditOn);
    setEditedTodo(todo);
  };

  const handleDelete = (deleteTodo: Todo) => {
    const todoDelete = todos.filter((todo) => todo.id !== deleteTodo.id);
    setTodos(todoDelete);
    updateLocalStorage(todoDelete);
  };

  return (
    <>
      <InputSearch
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

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
