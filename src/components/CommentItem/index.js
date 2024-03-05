import './index.css'

const CommentItems = props => {
  const {commentDetails, toggleIsFavorite, toggleIsDelete} = props
  const {name, comment, color, isFavorite, id, time} = commentDetails

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }
  const backcolor = isFavorite ? 'blue' : ''
  const onClickDeleteIcon = () => {
    toggleIsDelete(id)
  }

  return (
    <li className="list-container">
      <div className="profile-card">
        <h1 className={`bold ${color}`}>{name[0]}</h1>
        <div className="youth">
          <div className="god">
            <h1 className="heading">{name}</h1>
            <p className="para-2">{time}</p>
          </div>
          <p className="para-1">{comment}</p>
        </div>
      </div>
      <div className="button-card">
        <button className={`like ${backcolor}`}>
          <img
            src={starImgUrl}
            alt="like"
            className="image-1"
            onClick={onClickFavoriteIcon}
          />
          Like
        </button>
        <button className="delete" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="image-1"
            onClick={onClickDeleteIcon}
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItems
