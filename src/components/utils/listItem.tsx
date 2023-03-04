import './listItem.scss';
interface ListItemProps {
  indexes: number;
  todos: string;
}

export const ListItem = ({ indexes, todos }: ListItemProps) => {
  return (
    <div className="ListItem_Wrapper">
      <div className="ListItem_Entry">{todos}</div>
    </div>
  );
};
