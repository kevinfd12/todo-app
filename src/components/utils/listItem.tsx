import { Button } from '../button/button';
import { Todo } from '../main/Main';
import { Ribbon } from '../ribbon/ribbon';
import { Dropdown } from './dropdown';
import './listItem.scss';

interface ListItemProps {
  todo: Todo;
  handleDelete: (todo: Todo) => void;
  index: number;
  arrLength: number;
  handleEditMode: (todo: Todo) => void;
  setTodos: (todo: (todo: Todo[]) => Todo[]) => void;
  isNewHandler: any;
  dragStart: any;
}

export const ListItem = ({
  todo,
  handleDelete,
  index,
  setTodos,
  arrLength,
  dragStart,
  handleEditMode,
  isNewHandler,
}: ListItemProps) => {
  return (
    // <div className="ToDo-Wrapper">
    //   <p className="ToDo-Index">
    //     To-Do Task #{index} of {arrLength}
    //   </p>
    <div className="ListItem_Wrapper" onDragStart={(e) => dragStart(e, todo.id)} draggable={true}>
      <Ribbon todo={todo} isNewHandler={isNewHandler} />
      <div className="ListItem_Entry">{todo.value}</div>
      <div className="ListItem_Buttons">
        <Button value={'delete'} onButtonClick={() => handleDelete(todo)} color="#877F7D"></Button>
        <Button value={'edit'} onButtonClick={() => handleEditMode(todo)}></Button>
      </div>
      <Dropdown currentTodo={todo} setTodos={setTodos}></Dropdown>
    </div>
  );
};
