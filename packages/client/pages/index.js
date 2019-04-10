import Layout from '../components/Layout';
import Header from '../components/Header';
import IdeasFilter from '../components/IdeasFilter';
import IdeasGrid from '../components/IdeasGrid';

import { fetchAllIdeas } from '../api';

class IndexPage extends React.Component {
  static async getInitialProps() {
    const { ideas } = await fetchAllIdeas();
    return { ideas };
  }

  state = { filterValue: 'all' };

  render() {
    return (
      <Layout>
        <Header />

        <IdeasFilter
          onFilterChange={value => this.setState({ filterValue: value })}
          filterValue={this.state.filterValue}
        />
        <IdeasGrid ideas={this.props.ideas} filterValue={this.state.filterValue} />
      </Layout>
    );
  }
}

export default IndexPage;
