import React from "react";

import Post from "../../components/Post";

import "./UserPosts.scss";

const UserPosts = ({ posts }) => (
  <div className="container" data-testid="user-posts">
    <section className="user-posts">
      {posts.length > 0 ? (
        posts.map((post) => <Post postInfo={post} key={post.id} />)
      ) : (
        <div className="no-posts">
          <span className="no-posts__content">
            Infelizmente este usuário não possui publicações
          </span>
          <span
            className="no-posts__emoji"
            role="img"
            aria-label="Coração Partido"
          >
            💔
          </span>
        </div>
      )}
    </section>
  </div>
);

export default UserPosts;
