import Layout from '../components/Layout';
import Header from '../components/Header';
import IdeasFilter from '../components/IdeasFilter';
import IdeasGrid from '../components/IdeasGrid';
import Button from '../components/Button';
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

        <div className="toolbar">
          <IdeasFilter
            onFilterChange={value => this.setState({ filterValue: value })}
            filterValue={this.state.filterValue}
          />
          <div className="divider" />
          <div className="create-your-own">
            <span>Feeling creative?</span> <Button>Create your own idea</Button>
          </div>
        </div>
        <IdeasGrid ideas={this.props.ideas} filterValue={this.state.filterValue} />

        <style jsx>{`
          .toolbar {
            height: 38px;
            margin-top: 2rem;

            display: flex;
            justify-content: center;
            align-items: center;
          }

          .divider {
            margin: 0 16px;
            height: 1px;
            width: 28px;
            background: rgba(0, 0, 0, 0.2);
          }

          .create-your-own span {
            margin-right: 8px;
          }
        `}</style>
      </Layout>
    );
  }
}

export default IndexPage;
