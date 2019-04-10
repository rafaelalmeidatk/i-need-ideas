const IdeaCard = ({ content, category }) => (
  <div className="idea-card tile">
    <div className="heading">A {category}...</div>
    {content}

    <style jsx>{`
      .idea-card {
        flex-direction: column;
        padding: 20px;
        margin: 20px;
        border-radius: 5px;
        box-shadow: 0 6px 20px 0 rgba(10, 50, 0, 0.2), 0 6px 40px 0 rgba(10, 50, 0, 0.1);
      }
    `}</style>
  </div>
);

export default IdeaCard;
