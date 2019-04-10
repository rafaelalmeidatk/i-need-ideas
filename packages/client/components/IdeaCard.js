function isAn(category) {
  return category === 'app';
}

const IdeaCard = ({ content, category }) => {
  const article = isAn(category) ? 'An' : 'A';
  return (
    <div className="idea-card">
      <div className="heading">
        {article} {category.toLowerCase()}...
      </div>
      {content}

      <style jsx>{`
        .idea-card {
          max-width: 27%;
          flex-direction: column;
          padding: 20px;
          margin: 20px;
          border-radius: 5px;
          box-shadow: 0 6px 30px 0 rgba(10, 50, 0, 0.2), 0 6px 100px 0 rgba(10, 50, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

export default IdeaCard;
