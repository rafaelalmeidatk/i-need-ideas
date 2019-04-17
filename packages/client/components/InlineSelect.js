import Select from 'react-select';

const options = [
  { value: 'app', label: 'an app' },
  { value: 'game', label: 'a game' },
  { value: 'book', label: 'a book' },
];

const selectCustomStyles = {
  control: () => ({
    width: 120,
    display: 'flex',
    padding: '3px 5px 0',
    border: 'none',
    borderBottom: '2px solid rgba(0, 0, 0, 0.8)',
    cursor: 'pointer',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

const InlineSelect = ({ value, onChange }) => (
  <Select
    value={options.filter(op => op.value === value)}
    onChange={({ value }) => onChange(value)}
    isSearchable={false}
    styles={selectCustomStyles}
    options={options}
  />
);

export default InlineSelect;
