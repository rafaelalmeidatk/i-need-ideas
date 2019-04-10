import { PoseGroup } from 'react-pose';
import IdeaCard from './IdeaCard';

const IdeasGrid = ({ ideas, filterValue }) => {
  const filteredIdeas =
    filterValue !== 'all' ? ideas.filter(idea => idea.category === filterValue) : ideas;

  return (
    <div className="ideas-grid">
      <PoseGroup>
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
