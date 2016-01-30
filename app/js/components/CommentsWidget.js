'use strict';

import React from 'react';


class KeyGenerator {
  constructor(seed = Math.round(Math.random() * 1000)) {
    this._lastKey = seed + 1;
  }

  generate() {
    return this._lastKey++;
  }
}

let keyGenerator = new KeyGenerator();


class CommentGenerator {
  constructor() {
    this.commentsCap = [
      {name: 'John', text: 'Nice image!', date: new Date('2016-01-01')},
      {name: 'Iris', text: 'Cats?...', date: new Date('2016-01-02')},
      {name: 'Rick', text: 'WTF is that?', date: new Date('2016-01-03')},
      {name: 'Ketty', text: 'cool..', date: new Date('2016-01-05')},
      {name: 'Sam', text: 'I like it!', date: new Date('2016-01-08')}
    ];
  }

  generate() {
    let length = this.commentsCap.length;
    let lastIndex = Math.round(Math.random() * 100 * length) % length;
    return this.commentsCap.slice(0, lastIndex);
  }
}

let commentsGenerator = new CommentGenerator();

class CommentsCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let comments = this.props.comments.map((commentDoc)=> {
      return (
        <Comment text={commentDoc.text}
                 name={commentDoc.name}
                 date={commentDoc.date.toString()}
                 key={keyGenerator.generate()}
          />
      );
    });

    return (
      <div className="posted-comments">
        {comments}
      </div>
    );
  }
}


class CommentsWidget extends React.Component {
  static ENTER_KEY_CODE = 13;

  constructor(props) {
    super(props);
    this.state = {
      name: 'Anonymous',
      text: '',
      comments: commentsGenerator.generate()
    }
  }

  onNameChange(event) {
    this.setState({name: event.target.value});
  }

  onCommentTextChange(event) {
    this.setState({text: event.target.value});
  }

  onCommentTextKeyUp(event) {
    if (event.keyCode == CommentsWidget.ENTER_KEY_CODE) {
      this.onSubmitComment(event);
    }
  }

  onSubmitComment(event) {
    event.preventDefault();

    let comment = {
      text: this.state.text,
      name: this.state.name,
      date: new Date()
    };

    var updatedComments = this.state.comments;
    updatedComments.push(comment);

    this.setState({
      comments: updatedComments,
      text: ''
    });
  }

  render() {
    return (
      <div className="comments-widget">
        <h6>Comments</h6>
        <CommentsCollection comments={this.state.comments}/>

        <form className="submit-comment" onSubmit={this.onSubmitComment.bind(this)}>
          <div>
            <input type="text" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
          </div>
          <div>
            <textarea placeholder="Write you comment here..." cols="40" rows="4"
                      className="comment-textarea"
                      value={this.state.text}
                      onChange={this.onCommentTextChange.bind(this)}
                      onKeyUp={this.onCommentTextKeyUp.bind(this)}
              >
            </textarea>
          </div>
          <button type="submit">Post</button>
        </form>
        <hr/>
      </div>
    );
  }
}


class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comment">
        <hr/>
        <div>{this.props.name} | {this.props.date}</div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default CommentsWidget;
