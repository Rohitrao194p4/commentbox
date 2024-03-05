import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const commentList = []
// Write your code here
class Comments extends Component {
  state = {
    name: '',
    comment: '',
    count: 0,
    isFavorite: false,
    color: '',
    time: '',
    commentBar: commentList,
  }

  toggleIsFavorite = id => {
    const {isFavorite} = this.state
    this.setState(prevState => ({
      commentBar: prevState.commentBar.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  toggleIsDelete = id => {
    const {commentBar} = this.state
    const filteredUsersData = commentBar.filter(each => each.id !== id)
    this.setState({
      commentBar: filteredUsersData,
    })
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment, count, commentBar, color} = this.state
    if (count < initialContainerBackgroundClassNames.length) {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
    } else {
      this.setState({
        count: 0,
      })
    }

    const newContact = {
      id: uuidv4(),
      name,
      comment,
      time: formatDistanceToNow(new Date()),
      color: initialContainerBackgroundClassNames[count],
    }

    this.setState({
      commentBar: [...commentBar, newContact],
      name: '',
      comment: '',
    })
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentBar, count, name, comment} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <div className="form">
            <form className="comment-card">
              <h1 className="heading-1">Comments</h1>
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                value={name}
                className="input-1"
                type="text"
                placeholder="Your Name"
                onChange={this.onChangeName}
              />
              <br />
              <textarea
                value={comment}
                className="input-2"
                rows="5"
                cols="50"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
              ></textarea>
              <button className="button" onClick={this.onAddComment}>
                Add Comments
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <div className="card">
          <p className="para-2">
            <span className="span">{commentBar.length}</span> Comments
          </p>
          <div className="comment-box">
            <ul className="lunch">
              {commentBar.map(eachContact => (
                <CommentItem
                  key={eachContact.id}
                  commentDetails={eachContact}
                  toggleIsFavorite={this.toggleIsFavorite}
                  toggleIsDelete={this.toggleIsDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
