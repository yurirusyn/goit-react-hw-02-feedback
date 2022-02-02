import s from './feedbackOptions.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button name="good" type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button name="neutral" type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button name="bad" type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
