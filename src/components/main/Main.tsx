import React, { useEffect, useState } from 'react';
import { InputSearch } from '../inputSearch/inputSearch';
import { ListItem } from '../utils/listItem';
import { TodoModal } from '../utils/TodoModal';
import './Main.scss';

export interface Todo {
  id: number;
  value: string;
  isNew: boolean;
}

export function Main() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState<Todo | undefined>(undefined);

  console.log(todos);

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
      const newTodo = { id: getNextId(), value: inputValue, isNew: true };
      setTodos([newTodo, ...todos]);
      updateLocalStorage([newTodo, ...todos]);
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
    updateLocalStorage([editedTodo, ...newTodos]);
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

  const isNewHandler = (ribbonTodo: Todo) => {
    if (ribbonTodo.isNew) {
      const activateTodo = { ...ribbonTodo, isNew: false };
      const oldTodos = todos.filter((todo) => todo.id !== ribbonTodo.id);

      updateLocalStorage([activateTodo, ...oldTodos]);
      const timer = setTimeout(() => {
        setTodos([activateTodo, ...oldTodos]);
      }, 1500); //this is a delay of 3 seconds before it even starts to fade.
      return () => clearTimeout(timer);
    }
  };

  return (
    <>
      <div className="main">
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
            isNewHandler={isNewHandler}
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
      </div>
    </>
  );
}
