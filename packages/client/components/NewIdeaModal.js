import { useState, useRef } from 'react';
import posed, { PoseGroup } from 'react-pose';
import InlineSelect from './InlineSelect';
import Button from './Button';
import ErrorNotification from './ErrorNotification';
import Textarea from './Textarea';
import { createIdea } from '../api';

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 500, damping: 20 },
      default: { duration: 200 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
});

const NewIdeaModal = ({ isVisible, onCreated, onCancel }) => {
  const [ideaCategory, setIdeaCategory] = useState('app');
  const [ideaText, setIdeaText] = useState('');
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState({ code: null, message: null });

  const handleTextChange = e => {
    const { value } = e.target;
    // Remove newlines
    const newText = value.replace(/\n/g, '');
    setIdeaText(newText);

    if (newText && error.code === 'EMPTY_TEXTAREA') {
      setError({ code: null });
    }
  };

  const handleCategoryChange = value => {
    setIdeaCategory(value);
  };

  const handleCreate = async () => {
    if (!ideaText) {
      return setError({
        code: 'EMPTY_TEXTAREA',
      });
    }

    setCreating(true);

    try {
      const res = await createIdea({
        content: ideaText,
        category: ideaCategory,
      });
      if (res.idea) {
        // Give some time to the modal get out of the screen
        // so the user can see the animation
        setTimeout(() => {
          onCreated(res.idea);
          setIdeaText('');
        }, 200);
        onCancel();
      }
      if (res.error) {
        throw new Error(res.error.message);
      }
    } catch (err) {
      return setError({
        code: 'UNKNOWN',
        message: 'Oops, something went wrong! Please, try again later',
      });
    } finally {
      setCreating(false);
    }
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
                <InlineSelect
                  value={ideaCategory}
                  onChange={handleCategoryChange}
                />
                ...
              </div>

              <Textarea
                value={ideaText}
                onChange={handleTextChange}
                rows={2}
                maxLength={200}
                placeholder="that makes something great"
                forceShowError={error.code === 'EMPTY_TEXTAREA'}
              />

              <div className="notice">
                You are able to delete your idea during your current session.
              </div>

              <ErrorNotification
                isVisible={error.message}
                message={error.message}
              />

              <div className="button-wrapper">
                <Button
                  disabled={creating}
                  loading={creating}
                  onClick={handleCreate}
                >
                  Create
                </Button>
                <Button negative onClick={onCancel}>
                  Cancel
                </Button>
              </div>
            </div>
          </Modal>,
        ]}
      </PoseGroup>

      <style jsx>{`
        .modal-wrapper {
          font-family: 'Roboto Slab', serif;
          padding: 30px 45px;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 2px 35px 2px rgba(0, 0, 0, 0.2),
            0 1px 10px 0 rgba(0, 0, 0, 0.1);
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

        .notice {
          padding: 4px 8px 2px;
          color: rgba(0, 0, 0, 0.6);
          font-size: 0.9em;
        }

        .button-wrapper {
          margin-top: 1.1rem;
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
