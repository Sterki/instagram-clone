import React from "react";
import "./HeaderSecond.css";
import Avatar from "@material-ui/core/Avatar";

function HeaderSecond() {
  return (
    <div className="headersecondary">
      <div className="headersecondary__container">
        <Avatar
          style={{ width: "3.5rem", height: "3.5rem" }}
          className="avatar__header"
          alt="Alex Rodriguez"
          src="/static/images/avatar/1.jpg"
        />
        <Avatar
          style={{ width: "3.5rem", height: "3.5rem" }}
          className="avatar__header"
          alt="Clex Rodriguez"
          src="/static/images/avatar/1.jpg"
        />
        <Avatar
          style={{ width: "3.5rem", height: "3.5rem" }}
          className="avatar__header"
          alt="Rlex Rodriguez"
          src="/static/images/avatar/1.jpg"
        />
        <Avatar
          style={{ width: "3.5rem", height: "3.5rem" }}
          className="avatar__header"
          alt="Blex Rodriguez"
          src="/static/images/avatar/1.jpg"
        />
        <Avatar
          style={{ width: "3.5rem", height: "3.5rem" }}
          className="avatar__header"
          alt="Tlex Rodriguez"
          src="/static/images/avatar/1.jpg"
        />
      </div>
    </div>
  );
}

export default HeaderSecond;
