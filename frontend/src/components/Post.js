import React from "react";
import "../css/Post.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post">
        <h2 className="post-title"> {this.props.title} </h2>
        <p className="post-content">{this.props.content}</p>
      </div>
    );
  }
}

export default Post;
