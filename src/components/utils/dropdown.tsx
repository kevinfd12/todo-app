import React, { useEffect, useRef, useState } from 'react';
import './dropdown.scss';
import { Todo, currentColumn } from '../main/Main';

interface DropdownProps {
  color?: string;
  currentTodo: Todo;
  setTodos: (todo: (todo: Todo[]) => Todo[]) => void;
}

export function Dropdown(this: any, { color = '#D6CFC7', currentTodo, setTodos }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('mousedown', (e: any) => handleClickOutside(e));

    return () => {
      window.removeEventListener('mousedown', (e: any) => handleClickOutside(e));
    };
  }, [isOpen]);

  const dropdownHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { bottom } = e.currentTarget.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    setIsBottom(windowHeight - bottom < 110);
    setIsOpen((isOpen) => !isOpen);
    console.log(isOpen);
  };

  const onOptionClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const position = e.currentTarget.innerText as currentColumn;
    const updatedTodo = { ...currentTodo, position };
    setTodos((todos: Todo[]) => {
      const todosEdited = todos.map((todo) => (todo.id === currentTodo.id ? updatedTodo : todo));
      return todosEdited;
    });
  };

  const handleClickOutside = (e: any) => {
    if (container.current && !container.current.contains(e.target)) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div
        className="dropdown"
        onClick={dropdownHandler}
        style={{ backgroundColor: color }}
        ref={container}
      >
        <p className="arrow">{currentTodo.position}</p>
        <div className={`arrow__${isOpen ? `up` : `down`}`}>{'<'}</div>

        {isOpen && (
          <div className={`dropdown__list${isBottom ? `__bottom` : `__normal`}`}>
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
