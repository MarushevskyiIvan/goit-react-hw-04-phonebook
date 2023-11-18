export const Filter = ({ filterValue, updateFilter }) => {
  return (
    <input
      value={filterValue}
      type="text"
      name="filter"
      onChange={evt => updateFilter(evt.target.value)}
    />
  );
};
