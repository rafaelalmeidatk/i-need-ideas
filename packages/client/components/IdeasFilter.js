import dynamic from 'next/dynamic';
import PulseLoader from 'react-spinners/PulseLoader';

// A simple workaround the style mismatch caused by SSR
const ReactSelectNoSSR = dynamic(() => import('react-select'), {
  loading: () => <PulseLoader size={6} color="rgba(0, 0, 0, 0.8)" />,
  ssr: false
});

const options = [
  { value: 'all', label: 'All' },
  { value: 'app', label: 'App' },
  { value: 'game', label: 'Game' },
  { value: 'book', label: 'Book' }
];

const selectCustomStyles = {
  control: () => ({
    width: 150,
    display: 'flex',
    border: 'none',
    boxShadow: '0 2px 25px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: '18px',
    marginLeft: '0.7rem',
    cursor: 'pointer'
  })
};

const IdeasFilter = ({ filterValue, onFilterChange }) => {
  const onValueChange = ({ value }) => {
    onFilterChange(value);
  };

  return (
    <div>
      <span>Filter by:</span>
      <ReactSelectNoSSR
        styles={selectCustomStyles}
        value={options.filter(opt => opt.value === filterValue)}
        onChange={onValueChange}
        options={options}
        isSearchable={false}
      />
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
        }
      `}</style>
      <style jsx global>{`
        .css-0 {
          margin-left: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default IdeasFilter;
