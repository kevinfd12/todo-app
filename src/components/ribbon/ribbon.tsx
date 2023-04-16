import { Todo } from '../main/Main';
import './ribbon.scss';
import { useEffect } from 'react';

interface ribbonProps {
  todo: Todo;
  isNewHandler: any;
}

export const Ribbon = ({ todo, isNewHandler }: ribbonProps) => {
  useEffect(() => {
    isNewHandler(todo);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`RibbonBox--rt`}>
      <span className={`Ribbon--rt red ${todo.isNew ? 'visible' : ''}`}>
        <span className="Ribbon__text">NEW!</span>
      </span>
    </div>
  );
};
