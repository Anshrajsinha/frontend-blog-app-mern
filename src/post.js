import { Link } from "react-router-dom"
import {format} from "date-fns"

export const Post = ({_id, title: title, summary, cover, content, createdAt, author}) => {
    return (
      <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={'https://blog3-1bfq.onrender.com/'+cover} alt=""/>
          </Link>
        </div>
        <div className="texts">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p className="info">
            <a className="author">{author.username}</a>
            <time>{format(new Date(createdAt), 'MMM d, yyyy hh:mm aaa')}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    )
}