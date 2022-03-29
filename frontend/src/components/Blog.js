import React from "react";
import Header from "./Header";
import Post from "./Post";
import AddPostModal from "./AddPostModal";
import "../css/Blog.css";
import axios from "axios";

class Blog extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      addModalOpen: false,
    };
  }

  async fetchPosts() {
    try {
      const postsResponse = await fetch("/posts");
      const postsJson = await postsResponse.json();
      this.setState({
        posts: postsJson,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async componentDidMount() {
    await this.fetchPosts();
  }

  handleAddClick = () => {
    this.setState({
      addModalOpen: true,
    });
  };

  handleModalClose = () => {
    this.setState({
      addModalOpen: false,
    });
  };

  handleModalSubmit = (e) => {
    e.preventDefault();

    const title = e.currentTarget.title.value;
    const content = e.currentTarget.body.value;

    axios.post("/posts", {
      title,
      content,
    });

    this.fetchPosts();

    this.setState({
      addModalOpen: false,
    });
  };

  render() {
    return (
      <>
        <Header handleAddClick={this.handleAddClick} />
        <AddPostModal
          open={this.state.addModalOpen}
          handleModalClose={this.handleModalClose}
          handleModalSubmit={this.handleModalSubmit}
        />
        <div id="blog-container">
          {this.state.posts.map((post, index) => {
            return (
              <Post title={post.title} content={post.content} key={index} />
            );
          })}
        </div>
      </>
    );
  }
}

export default Blog;
