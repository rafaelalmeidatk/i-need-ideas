import posed, { PoseGroup } from 'react-pose';

const Notification = posed.div({
  enter: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 }
});

const ErrorNotification = ({ isVisible, message }) => (
  <div>
    <PoseGroup>{isVisible && <Notification key="notification">{message}</Notification>}</PoseGroup>
    <style jsx>{`
      div {
        color: #ff3860;
        margin: 0.5rem 0;
        text-align: center;
      }
    `}</style>
  </div>
);

export default ErrorNotification;
