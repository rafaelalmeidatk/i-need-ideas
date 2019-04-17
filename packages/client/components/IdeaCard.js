import posed from 'react-pose';
import PulseLoader from 'react-spinners/PulseLoader';

function isAn(category) {
  return category === 'app';
}

const Item = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

const IdeaCard = ({
  id,
  content,
  category,
  isDeleting,
  onDelete,
  ...props
}) => {
  const article = isAn(category) ? 'An' : 'A';
  return (
    <Item className="idea-card" {...props}>
      <div className="heading">
        {article} {category.toLowerCase()}...
        {isDeleting && (
          <PulseLoader sizeUnit="px" size={4} color="rgba(0, 0, 0, 0.85)" />
        )}
        {!isDeleting && (
          <button className="delete is-small" onClick={() => onDelete(id)} />
        )}
      </div>
      {content}

      <style jsx>{`
        .heading {
          display: flex;
          justify-content: space-between;
        }
        .heading .delete {
          opacity: 0;
          margin-left: 6px;
          transition: opacity 0.2s ease-out;
        }
      `}</style>
      <style jsx global>{`
        .idea-card {
          max-width: 27%;
          flex-direction: column;
          padding: 20px;
          margin: 20px;
          border-radius: 5px;
          box-shadow: 0 6px 30px 0 rgba(10, 50, 0, 0.2),
            0 6px 100px 0 rgba(10, 50, 0, 0.15);
        }
        .idea-card:hover .heading .delete {
          opacity: 1;
        }

        @media (max-width: 640px) {
          .idea-card {
            min-width: 40%;
          }
        }
        @media (max-width: 520px) {
          .idea-card {
            min-width: 90%;
          }
        }
      `}</style>
    </Item>
  );
};

export default IdeaCard;
