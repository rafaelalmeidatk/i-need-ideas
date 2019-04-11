import { useState } from 'react';
import posed, { PoseGroup } from 'react-pose';
import InlineSelect from './InlineSelect';
import Button from './Button';

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 500, damping: 20 },
      default: { duration: 200 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

const NewIdeaModal = ({ isVisible, onCreate, onCancel }) => {
  const [ideaCategory, setIdeaCategory] = useState('app');
  const [ideaText, setIdeaText] = useState('');

  const handleTextChange = e => {
    const { value } = e.target;
    // Remove newlines
    const newText = value.replace(/\n/g, '');
    setIdeaText(newText);
  };

  const handleCategoryChange = value => {
    setIdeaCategory(value);
  };

  return (
    <div>
      <PoseGroup>
        {isVisible && [
          <Shade key="shade" className="modal-shade" />,
          <Modal key="modal" className="modal-container">
            <div className="modal-wrapper">
              <h2>Let's create a new idea!</h2>
              <div className="category-selection">
                My idea is
                <InlineSelect value={ideaCategory} onChange={handleCategoryChange} />
                ...
              </div>
              <textarea
                value={ideaText}
                onChange={handleTextChange}
                rows={2}
                maxLength={200}
                placeholder="that makes something great"
              />

              <div className="button-wrapper">
                <Button onClick={onCreate}>Create</Button>
                <Button negative onClick={onCancel}>
                  Cancel
                </Button>
              </div>
            </div>
          </Modal>
        ]}
      </PoseGroup>

      <style jsx>{`
        .modal-wrapper {
          font-family: 'Roboto Slab', serif;
          padding: 30px 45px;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 2px 35px 2px rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.1);
        }

        h2 {
          font-size: 2.1em;
          color: rgba(0, 0, 0, 0.9);
        }

        .category-selection {
          font-size: 1.1em;
          display: flex;
          align-items: center;
        }

        textarea {
          margin-top: 0.85rem;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 7px;
          background: 0;
          outline: 0;
          color: rgba(0, 0, 0, 0.8);
          font-size: 0.9375rem;
          letter-spacing: -0.025rem;
          line-height: 1.25rem;
          max-height: 144px;
          min-height: 20px;
          padding: 10px;
          resize: none;
          width: 100%;
        }

        textarea:focus {
          box-shadow: 0 0 0 3px rgba(130, 130, 130, 0.25);
        }

        textarea::placeholder {
          color: rgba(0, 0, 0, 0.4);
        }

        .button-wrapper {
          margin-top: 1rem;
          text-align: right;
        }
      `}</style>

      <style jsx global>{`
        .modal-container {
          position: fixed;
          height: 100vh;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-shade {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.8);
        }

        .button-wrapper button {
          margin-left: 0.7rem;
        }
      `}</style>
    </div>
  );
};

export default NewIdeaModal;
