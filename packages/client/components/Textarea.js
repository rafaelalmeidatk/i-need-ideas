import { useState } from 'react';
import cx from 'classnames';
import posed, { PoseGroup } from 'react-pose';

const ErrorText = posed.div({
  visible: { opacity: 1, bottom: '-8px' },
  hidden: { opacity: 0, bottom: '-2px', transition: { duration: 120 } },
  initialPose: 'hidden',
});

const Textarea = ({ forceShowError, onChange, ...props }) => {
  const [showError, setShowError] = useState(null);

  const handleTextChange = e => {
    const { value } = e.target;
    setShowError(!value);
    // Forward event
    onChange(e);
  };

  const shouldShowError = forceShowError || showError;

  return (
    <div>
      <textarea
        className={cx({ error: shouldShowError })}
        onChange={handleTextChange}
        {...props}
      />
      <ErrorText
        key="error-text"
        className="error-text"
        pose={shouldShowError ? 'visible' : 'hidden'}
      >
        This field is required!
      </ErrorText>
      <style jsx>{`
        div {
          position: relative;
        }
        textarea {
          margin: 0.85rem 0 0.5rem;
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
          transition: border 0.2s ease;
        }

        textarea:focus {
          box-shadow: 0 0 0 3px rgba(130, 130, 130, 0.25);
        }

        textarea::placeholder {
          color: rgba(0, 0, 0, 0.4);
        }

        textarea.error {
          border: 2px solid #ff3860;
        }
      `}</style>
      <style jsx global>{`
        .error-text {
          position: absolute;
          bottom: -8px;
          right: 0;
          color: #ff3860;
          font-size: 0.9em;
          text-align: left;
        }
      `}</style>
    </div>
  );
};

export default Textarea;
