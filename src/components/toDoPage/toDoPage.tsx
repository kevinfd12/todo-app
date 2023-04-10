import './toDoPage.scss';
import { TodoHeader } from '../todoHeader/todoHeader';
import { Main } from '../main/Main';

export function Todoapp() {
  return (
    <div className="highestwrapper">
      <div className="wrapper">
        <TodoHeader />
        <div className="toDoPage__container">
          <Main />
        </div>
      </div>
    </div>
  );
}
