import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <div className={css.containerFeedback}>
      <p>Good👍: {feedback.good}</p>
      <p>Neutral👌: {feedback.neutral}</p>
      <p>Bad👎: {feedback.bad}</p>
      <p>Total🫶: {totalFeedback}</p>
      <p className={css.pFeedback}>Positive😍: {positiveFeedbackPercentage}%</p>
    </div>
  );
};

export default Feedback;
