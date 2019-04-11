import { ToastContainer, toast } from 'react-toastify';

import Layout from '../components/Layout';
import Header from '../components/Header';
import IdeasFilter from '../components/IdeasFilter';
import IdeasGrid from '../components/IdeasGrid';
import Button from '../components/Button';
import NewIdeaModal from '../components/NewIdeaModal';
import Footer from '../components/Footer';
import { fetchAllIdeas, deleteIdea } from '../api';

class IndexPage extends React.Component {
  state = { filterValue: 'all', modalVisible: false, fetching: true, ideas: [] };

  componentDidMount() {
    fetchAllIdeas()
      .then(({ ideas }) => {
        this.setState({ ideas, fetching: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ ideas: [], fetching: false });
      });
  }

  handleCreateIdeaButtonClick = () => {
    this.setState({ modalVisible: true });
  };

  handleNewIdeaModalClose = () => {
    this.setState({ modalVisible: false });
  };

  handleNewIdeaCreated = idea => {
    this.setState(state => ({
      ...state,
      ideas: [idea, ...state.ideas]
    }));
  };

  handleDeleteIdea = async id => {
    try {
      const res = await deleteIdea({ id });

      if (res.error && res.error.code === 'FORBIDDEN') {
        return toast.error("Hey! This idea is not yours, you can't delete it");
      } else if (res.error) {
        return toast.error('Oops, something went wrong! Please, try again later');
      }
    } catch (err) {
      console.error(err);
      return toast.error('Oops, something went wrong! Please, try again later');
    }

    // At this point the idea has been deleted without issues, remove it from
    // local state
    this.setState(state => ({
      ...state,
      ideas: state.ideas.filter(idea => idea.id !== id)
    }));
  };

  render() {
    const { fetching, ideas } = this.state;

    return (
      <Layout>
        <ToastContainer position="top-right" />
        <Header />
        <div className="toolbar">
          <IdeasFilter
            onFilterChange={value => this.setState({ filterValue: value })}
            filterValue={this.state.filterValue}
          />
          <div className="divider" />
          <div className="create-your-own">
            <span>Feeling creative?</span>{' '}
            <Button onClick={this.handleCreateIdeaButtonClick}>Create your own idea</Button>
          </div>
        </div>

        <IdeasGrid
          ideas={ideas}
          loading={fetching}
          onIdeaDelete={this.handleDeleteIdea}
          filterValue={this.state.filterValue}
        />

        <Footer />

        <NewIdeaModal
          isVisible={this.state.modalVisible}
          onCreated={this.handleNewIdeaCreated}
          onCancel={this.handleNewIdeaModalClose}
        />

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
