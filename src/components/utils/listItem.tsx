import { Button } from '../button/button';
import { Todo } from '../main/Main';
import { Ribbon } from '../ribbon/ribbon';
import './listItem.scss';

interface ListItemProps {
  todo: Todo;
  handleDelete: (todo: Todo) => void;
  index: number;
  arrLength: number;
  handleEditMode: (todo: Todo) => void;
  isNewHandler: any;
}

export const ListItem = ({
  todo,
  handleDelete,
  index,
  arrLength,
  handleEditMode,
  isNewHandler,
}: ListItemProps) => {
  return (
    <div className="ToDo-Wrapper">
      <p className="ToDo-Index">
        To-Do Task #{index} of {arrLength}
      </p>
      <div className="ListItem_Wrapper">
        <Ribbon todo={todo} isNewHandler={isNewHandler} />
        <div className="ListItem_Entry">{todo.value}</div>
        <div className="ListItem_Buttons">
          <Button
            value={'delete'}
            onButtonClick={() => handleDelete(todo)}
            color="#FF3131"
          ></Button>
          <Button value={'edit'} onButtonClick={() => handleEditMode(todo)}></Button>
        </div>
      </div>
    </div>
  );
};
