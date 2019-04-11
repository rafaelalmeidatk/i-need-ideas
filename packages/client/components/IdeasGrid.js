import { PoseGroup } from 'react-pose';
import GridLoader from 'react-spinners/GridLoader';
import IdeaCard from './IdeaCard';

const IdeasGrid = ({ ideas, loading, filterValue }) => {
  if (ideas.length === 0) {
    return (
      <div>
        There are no ideas at the moment. Be the first one!
        <style jsx>{`
          div {
            margin-top: 2.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <GridLoader color="rgba(0, 0, 0, 0.8)" />
        <style jsx>{`
          div {
            margin-top: 2.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    );
  }

  const filteredIdeas =
    filterValue !== 'all' ? ideas.filter(idea => idea.category === filterValue) : ideas;

  return (
    <div className="ideas-grid">
      <PoseGroup animateOnMount={true}>
        {filteredIdeas.map(idea => (
          <IdeaCard key={idea.id} content={idea.content} category={idea.category} />
        ))}
      </PoseGroup>

      <style jsx>{`
        .ideas-grid {
          margin-top: 0.9rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default IdeasGrid;
