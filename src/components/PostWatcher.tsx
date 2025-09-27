"use client";
import { useEffect, useState } from "react";

interface Post {
  _id: string;
  title: string;
  people: number;
  capacity: number;
  end_time: string;
}

export default function PostWatcher() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("postIds="))
      ?.split("=")[1];

    if (!cookie) return;

    let postIds: string[] = [];
    try {
      postIds = JSON.parse(decodeURIComponent(cookie));
    } catch (e) {
      console.error("Invalid postIds cookie", e);
    }

    async function fetchPosts() {
      const updatedPosts: Post[] = [];
      for (const id of postIds) {
        const res = await fetch(`/api/posts/${id}`);
        if (res.ok) {
          const data = await res.json();
          // only keep posts still active
          if (new Date(data.end_time) > new Date()) {
            updatedPosts.push(data);
          }
        }
      }
      setPosts(updatedPosts);
    }

    fetchPosts(); // first call
    const interval = setInterval(fetchPosts, 60_000);

    return () => clearInterval(interval);
  }, []);

  if (posts.length === 0) {
    return <p className="text-gray-500">No active posts being tracked.</p>;
  }

  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <h2 className="text-lg font-semibold mb-3">📌 Your Posts</h2>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li
            key={post._id}
            className="p-2 border rounded-md flex justify-between items-center"
          >
            <span>{post.title}</span>
            <span className="text-sm text-gray-600">
              {post.people}/{post.capacity} joined
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}