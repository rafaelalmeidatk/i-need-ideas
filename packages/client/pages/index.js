import { ToastContainer, toast } from 'react-toastify';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
import IdeasGrid from '../components/IdeasGrid';
import NewIdeaModal from '../components/NewIdeaModal';
import Footer from '../components/Footer';
import { fetchAllIdeas, deleteIdea } from '../api';

class IndexPage extends React.Component {
  state = {
    filterValue: 'all',
    modalVisible: false,
    fetching: true,
    ideas: [],
  };

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
      ideas: [idea, ...state.ideas],
    }));
  };

  handleDeleteIdea = async id => {
    try {
      this.setIdeaDeleting(id, true);
      const res = await deleteIdea({ id });

      if (res.error && res.error.code === 'FORBIDDEN') {
        this.setIdeaDeleting(id, false);
        return toast.error("Hey! This idea is not yours, you can't delete it");
      } else if (res.error) {
        this.setIdeaDeleting(id, false);
        return toast.error(
          'Oops, something went wrong! Please, try again later'
        );
      }
    } catch (err) {
      console.error(err);
      this.setIdeaDeleting(id, false);
      return toast.error('Oops, something went wrong! Please, try again later');
    }

    // At this point the idea has been deleted without issues, remove it from
    // local state
    this.setState(state => ({
      ...state,
      ideas: state.ideas.filter(idea => idea.id !== id),
    }));
  };

  setIdeaDeleting = (id, isDeleting) => {
    this.setState(state => ({
      ...state,
      ideas: state.ideas.map(idea =>
        idea.id === id ? { ...idea, isDeleting } : idea
      ),
    }));
  };

  render() {
    const { fetching, ideas } = this.state;

    return (
      <Layout>
        <ToastContainer position="top-right" />
        <Header />
        <Toolbar
          onFilterChange={value => this.setState({ filterValue: value })}
          filterValue={this.state.filterValue}
          onCreateIdeaClick={this.handleCreateIdeaButtonClick}
        />

        <IdeasGrid
          ideas={ideas}
          loading={fetching}
          onIdeaDelete={this.handleDeleteIdea}
          filterValue={this.state.filterValue}
          ideasLoadingDelete={{}}
        />

        <Footer />

        <NewIdeaModal
          isVisible={this.state.modalVisible}
          onCreated={this.handleNewIdeaCreated}
          onCancel={this.handleNewIdeaModalClose}
        />
      </Layout>
    );
  }
}

export default IndexPage;
