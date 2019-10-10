import React, { useState, useEffect } from "react";
import axios from "axios";

import CreatePost from "./Post";

import PostList from "./Prev";

const Page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8070/post").then(res => {
      setPosts(res.data);
    });
  }, []);

  const addNewPost = name => {
    console.log("called");
  };
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <Header title={"Post"} />
          <CreatePost addNewPost={addNewPost} />
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  );
};

const Header = ({ title }) => (
  <nav className="navbar navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">{title}</span>
  </nav>
);

const handleDelete = (props, idd) => {
  /*this.setState({
        post: this.state.post.filter(i => i !== item)
    })*/
  axios.delete("http://localhost:8070/post/" + idd).then(success => {
    if (success.status === 200 && success.statusText === "OK") {
      props.setPost(props.post.filter(i => i.id !== idd));
    }
  });
};

export default Page;
