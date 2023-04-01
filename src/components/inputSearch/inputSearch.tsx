import './inputSearch.scss';

interface inputSearchProps {
  handleSubmit: () => void;
  inputValue: string;
  setInputValue: (event: string) => void;
}

export const InputSearch = ({ handleSubmit, inputValue, setInputValue }: inputSearchProps) => {
  return (
    <div className="InputSearch">
      <div className="InputSearch__input-wrapper">
        <div className="InputSearch__input-container">
          <input
            type="text"
            className="InputSearch__input"
            placeholder="add a todo"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <div className="InputSearch__button" onClick={handleSubmit}>
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};
