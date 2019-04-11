import IdeasFilter from '../components/IdeasFilter';
import Button from '../components/Button';

const Toolbar = ({ filterValue, onFilterChange, onCreateIdeaClick }) => (
  <div className="toolbar">
    <IdeasFilter onFilterChange={onFilterChange} filterValue={filterValue} />
    <div className="divider" />
    <div className="create-your-own">
      <span>Feeling creative?</span>{' '}
      <Button onClick={onCreateIdeaClick}>Create your own idea</Button>
    </div>

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

      @media (max-width: 620px) {
        .toolbar {
          margin-top: 1.5rem;
          flex-direction: column;
          height: unset;
        }

        .divider {
          height: 0;
          margin: 0.5rem 0;
        }
      }
    `}</style>
  </div>
);

export default Toolbar;
