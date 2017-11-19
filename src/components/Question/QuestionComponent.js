import React, { Component } from 'react'
import Answer from '../Answer/Answer'
import '../../styles/Question.css'

class QuestionComponent extends Component {

  handleUpvote = () => {
    this.props.onUpvote()
  }

  render() {
    const { question } = this.props
    return (
      <div>
        <div className="question">
          <div className="upvotes">
            {question.upvotes}
          </div>
          <div className="content">
            {question.text}
            <div className="info">
              Author: {(question.author && question.author.username) || 'Anonymous'} | {(question.answers && question.answers.total) || 0} Answers
            </div>
          </div>
        </div>
        <div style={{marginLeft: '64px'}}>
          {question.answers && question.answers.slice(0, 1).map((answer) => (
            <Answer key={answer.id} answer={answer} />
          ))}
        </div>
      </div>
    );
  }

}

export default QuestionComponent;
