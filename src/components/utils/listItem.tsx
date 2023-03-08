import './listItem.scss';
interface ListItemProps {
  indexes: number;
  todos: string;
  children?: React.ReactNode;
}

export const ListItem = ({ todos, children }: ListItemProps) => {
  return (
    <div className="ListItem_Wrapper">
      <div className="ListItem_Entry">
        {todos} {children}{' '}
      </div>
    </div>
  );
};
