import { useState } from 'react';
import dynamic from 'next/dynamic';

// A simple workaround the style mismatch caused by SSR
const ReactSelectNoSSR = dynamic(() => import('react-select'), {
  loading: () => <div>Loading...</div>,
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
    borderRadius: '20px',
    marginLeft: '0.7rem;'
  })
};

const IdeasFilter = ({ filterValue, onFilterChange }) => {
  const onValueChange = ({ value }) => {
    onFilterChange(value);
  };

  return (
    <div>
      Filter by:
      <ReactSelectNoSSR
        styles={selectCustomStyles}
        value={options.filter(opt => opt.value === filterValue)}
        onChange={onValueChange}
        options={options}
        isSearchable={false}
      />
      <style jsx>{`
        div {
          height: 38px;
          margin-top: 1.8rem;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default IdeasFilter;
