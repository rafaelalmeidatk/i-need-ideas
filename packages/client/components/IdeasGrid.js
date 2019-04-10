import chunk from 'lodash/chunk';
import IdeaCard from './IdeaCard';

const ideas = [
  {
    id: 'c2108bf0-70d6-45ee-8d37-f528819bedc7',
    content: 'where instead of becoming strong, you get weaker',
    category: 'game'
  },
  {
    id: '3022c134-ba3a-41c7-9cfc-a8f08ba5cfa8',
    content: 'where you can jump between buildings',
    category: 'game'
  },
  {
    id: '992f3038-01f1-4f7c-8386-729831ea0138',
    content: 'in a post-apocalyptic world where the hero rides a zebra',
    category: 'book'
  },
  {
    id: 'ec5dcc8c-05e5-498e-a86f-d8063c8d1990',
    content: 'that lets you see recipes based on what ingredients you have',
    category: 'app'
  },
  {
    id: '1284e6cf-2c57-4255-8a17-5432eaedec4d',
    content: 'that auto mutes depending on your location',
    category: 'app'
  },
  {
    id: 'f7a3d274-7ff7-4444-8b05-e205a258ef9a',
    content: 'that shows the best travel locations around the user',
    category: 'app'
  },
  {
    id: 'f7a3d274-7ff7-4444-8b05-e205a238ef9a',
    content: 'to listen to music and create playlists',
    category: 'app'
  },
  {
    id: 'f7a3d274-7ff7-4244-8b05-e205a258ef9a',
    content: 'to keep track of your habits, you can see how frequent you are doing something new',
    category: 'app'
  },
  {
    id: 'f7a3d274-9ff7-4444-8b05-e205a258ef9a',
    content: 'that is a twitter dashboard to manage different accounts in one place',
    category: 'app'
  },
  {
    id: 'f7a3d274-7ff7-4444-8b05-b205a258ef9a',
    content: 'where you play as a cat',
    category: 'game'
  }
];

const IdeasGrid = ({ filterValue }) => {
  const filteredIdeas =
    filterValue !== 'all' ? ideas.filter(idea => idea.category === filterValue) : ideas;

  return (
    <div className="ideas-grid">
      {filteredIdeas.map(idea => (
        <IdeaCard key={idea.id} content={idea.content} category={idea.category} />
      ))}

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
