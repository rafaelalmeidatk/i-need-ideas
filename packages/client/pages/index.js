import { useState } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import IdeasFilter from '../components/IdeasFilter';
import IdeasGrid from '../components/IdeasGrid';

const IndexPage = () => {
  const [filterValue, setFilterValue] = useState('all');

  return (
    <Layout>
      <Header />

      <IdeasFilter onFilterChange={value => setFilterValue(value)} filterValue={filterValue} />
      <IdeasGrid filterValue={filterValue} />
    </Layout>
  );
};

export default IndexPage;
