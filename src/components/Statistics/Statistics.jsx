import PropTypes from "prop-types";
import css from "../Statistics/Statistics.module.css";

export const Statistics = ({
     good,
        neutral,
        bad,
        total,
        positivePercentage
}) => (
    <>
        {/* <h2 className={css.title}>Please leave feedback</h2> */}
        <ul className={css.list}></ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
    </>
)


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};