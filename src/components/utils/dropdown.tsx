import React, { useState } from 'react';
import './dropdown.scss';
import { Todo, currentColumn } from '../main/Main';

interface DropdownProps {
  color?: string;
  currentTodo: Todo;
  setTodos: (todo: (todo: Todo[]) => Todo[]) => void;
}

export function Dropdown({ color = '#D6CFC7', currentTodo, setTodos }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const onOptionClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const position = e.currentTarget.innerText as currentColumn;
    const updatedTodo = { ...currentTodo, position };
    setTodos((todos: Todo[]) => {
      const todosEdited = todos.map((todo) => (todo.id === currentTodo.id ? updatedTodo : todo));
      return todosEdited;
    });
  };

  return (
    <>
      <div className="dropdown" onClick={dropdownHandler} style={{ backgroundColor: color }}>
        <p className="arrow">{currentTodo.position}</p>
        <div className={`arrow__${isOpen ? `up` : `down`}`}>{'<'}</div>

        {isOpen && (
          <div className="dropdown__list">
            <div className="dropdown__option" onClick={onOptionClick}>
              {currentColumn.isOpen}
            </div>
            <div className="dropdown__option" onClick={onOptionClick}>
              {currentColumn.isInProgress}
            </div>
            <div className="dropdown__option" onClick={onOptionClick}>
              {currentColumn.isClosed}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
