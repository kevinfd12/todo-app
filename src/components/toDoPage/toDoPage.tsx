import './toDoPage.scss';
import { TodoHeader } from '../todoHeader/todoHeader';
import { Main } from '../main/Main';

export function Todoapp() {
  return (
    <div className="section">
      <TodoHeader />
      <div className="toDoPage__container">
        <Main />
      </div>
      {/* <Button onButtonClick={} value="Add Todo"></Button> */}
    </div>
  );
}
