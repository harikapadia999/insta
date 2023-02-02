import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: 1,
      username: "harikapadia31",
      userImg:
        "https://media.licdn.com/dms/image/C4D03AQFgve3vk3RQjA/profile-displayphoto-shrink_800_800/0/1659727840040?e=2147483647&v=beta&t=JMvCGzWhNQWyx5gf4T3vxKDlv29UfbGzBz50WKlb7_Y",
      img: "https://images.unsplash.com/photo-1675281744865-027cde98bc43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
      caption: "Nice picture",
    },
    {
      id: 1,
      username: "harikapadia",
      userImg:
        "https://images.unsplash.com/photo-1675222868983-3a1dd991cba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
      img: "https://images.unsplash.com/photo-1675096563822-4e7a31b44ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
      caption: "New picture",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.caption}
        />
      ))}
    </div>
  );
}
