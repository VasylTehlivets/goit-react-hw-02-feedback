import { Component } from "react";

export class Feedback2 extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positiveFeedback: 0
    }
    handleUpdate = (event) => {
        const { name } = event.currentTarget;
        switch (name) {
            case "good":
                this.setState(prevState => ({
                    good: prevState.good + 1,
                    total: prevState.total +1
                }))
                break;
            case "neutral":
                this.setState(prevState => ({
                    neutral: prevState.neutral + 1,
                    total: prevState.total +1
                }))
                break;
            case "bad":
                this.setState(prevState => ({
                    bad: prevState.bad + 1,
                    total: prevState.total +1
                }))
                break;
      
            default:
                //   throw new Error("Name doesn't exist");
                break;
        }

        // countTotalFeedback = () => {}    
    }
    render() {
        const { good, neutral, bad, total, positiveFeedback } = this.state
        return (
            <div>
                <h2>Please leave feedback</h2>
                <button type="button" name="good" onClick={this.handleUpdate}>Good</button>
                <button type="button" name="neutral" onClick={this.handleUpdate}>Neutral</button>
                <button type="button" name="bad" onClick={this.handleUpdate}>Bad</button>
                <h2>Statistics</h2>
                <span>Good: {good}</span>
                <span>Neutral: {neutral}</span>
                <span>Bad: {bad}</span>
                <span>Total: {total}</span>
                <span>Positive feedback: {positiveFeedback}</span>
            </div>
        )
    }
}