export const SearchForm = ({ onChange }) => {
  return (
    <>
      <div className="form">
        <input
          className="input"
          type="password"
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </>
  );
};
