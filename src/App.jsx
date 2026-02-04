import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import Timer from "./components/Timer";
import SearchBar from "./components/SearchBar";

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

  return (
    <div>
      <h1>Day 5 Refactor</h1>

      <Counter
        count={count}
        onIncrement={() => setCount(c => c + 1)}
        onDecrement={() => setCount(c => c - 1)}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <SearchBar query={query} onQueryChange={setQuery} />
      <PostList posts={filteredPosts} />

      <Timer />
    </div>
  );
}
