import './TodoModal.scss';
import { Button } from '../button/button';
import { useState } from 'react';
import { Todo } from '../searchBar.tsx/inputBar';

interface TodoModalProps {
  handleEditMode: (id: undefined) => void;
  editedTodo: Todo | undefined;
  setEditedTodo: (value: React.SetStateAction<Todo | undefined>) => void;
  handleModalSubmit: () => void;
}

export const TodoModal = ({
  handleEditMode,
  editedTodo,
  setEditedTodo,
  handleModalSubmit,
}: TodoModalProps) => {
  const onChangeHandler = (event: any) => {
    setEditedTodo((prevTodo) => ({ ...prevTodo!, value: event.target.value }));
  };

  return (
    <div className="cover">
      <div className="modal">
        <Button value="close" onButtonClick={() => handleEditMode(undefined)}></Button>
        <input
          className="input"
          value={editedTodo?.value}
          onChange={onChangeHandler}
          placeholder="edit"
        ></input>
        <Button value="submit" onButtonClick={handleModalSubmit}></Button>
      </div>
    </div>
  );
};
