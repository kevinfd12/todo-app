import './toDoPage.scss';
// import { Button } from '../button/button';
import { InputBar } from '../inputBar/inputBar';

export function Todoapp() {
  return (
    <div className="section">
      <div className="toDoPage__container">
        <InputBar></InputBar>
      </div>
      {/* <Button onButtonClick={} value="Add Todo"></Button> */}
    </div>
  );
}
