import { useState } from "react";

export default function AddPostForm({ onAddPost }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stop page refresh
    const trimmed = title.trim();
    if (!trimmed) return;

    onAddPost(trimmed);
    setTitle(""); // clear input
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <h2>Add Post</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title..."
      />
      <button type="submit" style={{ marginLeft: 8 }}>
        Add
      </button>
    </form>
  );
}
