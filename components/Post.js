import React from "react";

export default function Post({ id, username, img, userImg, caption }) {
  return (
    <div>
      <h1>{id}</h1>
      <h1>{username}</h1>
      <h1>{img}</h1>
      <h1>{userImg}</h1>
      <h1>{caption}</h1>
    </div>
  );
}
