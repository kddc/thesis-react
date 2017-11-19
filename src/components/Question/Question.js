import React, { Component } from 'react'

import QuestionComponent from './QuestionComponent'

class Question extends Component {

  onUpvote = () => {
    const { question } = this.props
    question.partialUpdate().increment('upvotes').execute()
  }

  render() {
    const { question } = this.props
    return (
      <QuestionComponent question={question} onUpvote={this.onUpvote} />
    )
  }

}

export default Question;
