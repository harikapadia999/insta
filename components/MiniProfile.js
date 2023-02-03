import React from "react";

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="h-16 rounded-full border p-[2px]"
        src="https://media.licdn.com/dms/image/C4D03AQFgve3vk3RQjA/profile-displayphoto-shrink_800_800/0/1659727840040?e=2147483647&v=beta&t=JMvCGzWhNQWyx5gf4T3vxKDlv29UfbGzBz50WKlb7_Y"
        alt="user-image"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">harikapadia31</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
}
