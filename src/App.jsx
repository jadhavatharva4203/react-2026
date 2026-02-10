import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import PostsPage from "./pages/PostsPage";
import TimerPage from "./pages/TimerPage";

export default function App() {
  const [count, setCount] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchPosts() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${count}`,
          { signal }
        );
        if (!res.ok) throw new Error("Network response not ok");
        const json = await res.json();
        setPosts(json);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message || "Fetch failed");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();

    return () => controller.abort();
  }, [count]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  function handleAddPost(title) {
    const newPost = {
      id: Date.now(),   // simple unique id
      title,
    };
    setPosts(prev => [newPost, ...prev]);
  }
  

  return (
    <div>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route
          path="/posts"
          element={
            <PostsPage
              count={count}
              onIncrement={() => setCount(c => c + 1)}
              onDecrement={() => setCount(c => c - 1)}
              query={query}
              onQueryChange={setQuery}
              loading={loading}
              error={error}
              onAddPost={handleAddPost}
              posts={filteredPosts}
            />
          }
        />
        <Route path="/timer" element={<TimerPage/>}/>
      </Routes>
    </div>
  );
}
