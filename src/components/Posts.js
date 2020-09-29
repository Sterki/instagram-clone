import { Avatar } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import TelegramIcon from "@material-ui/icons/Telegram";
import React from "react";
import "./Post.css";

function Posts({ post }) {
  const { username, imageUrl, likes, caption, comments } = post;

  return (
    <div className="post">
      <div className="post__container">
        <div className="post__infouser">
          <Avatar
            style={{ width: "1.8rem", height: "1.8rem" }}
            alt={username}
            src="/static/images/avatar/1.jpg"
          />
          <h2>{username}</h2>
        </div>

        <img src={imageUrl} />
        <div className="post__icons">
          <FavoriteBorderIcon
            className="iconos__post"
            style={{ width: "1.9rem", height: "1.9rem", color: "#404040" }}
          />
          <ModeCommentOutlinedIcon
            className="iconos__post"
            style={{ width: "1.9rem", height: "1.9rem", color: "#404040" }}
          />
          <TelegramIcon
            style={{ width: "1.9rem", height: "1.9rem", color: "#404040" }}
          />
        </div>
        <div className="post__megusta">
          <strong>{likes}</strong>
        </div>
        <div className="post__caption">
          <strong>{username}</strong>
          <p>{caption}</p>
        </div>
        <div className="post__comment">
          <p>{comments}</p>
          <p>hace 20 minutos</p>
        </div>
      </div>
    </div>
  );
}

export default Posts;
