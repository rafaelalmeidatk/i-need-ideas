import posed from 'react-pose';

function isAn(category) {
  return category === 'app';
}

const Item = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const IdeaCard = ({ content, category, ...props }) => {
  const article = isAn(category) ? 'An' : 'A';
  return (
    <Item className="idea-card" {...props}>
      <div className="heading">
        {article} {category.toLowerCase()}...
      </div>
      {content}

      <style jsx global>{`
        .idea-card {
          max-width: 27%;
          flex-direction: column;
          padding: 20px;
          margin: 20px;
          border-radius: 5px;
          box-shadow: 0 6px 30px 0 rgba(10, 50, 0, 0.2), 0 6px 100px 0 rgba(10, 50, 0, 0.15);
        }
      `}</style>
    </Item>
  );
};

export default IdeaCard;
