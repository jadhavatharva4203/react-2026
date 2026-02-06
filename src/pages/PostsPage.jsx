import Counter from "../components/Counter";
import PostList from "../components/PostList";
import SearchBar from "../components/SearchBar";

export default function PostsPage({
  count,
  onIncrement,
  onDecrement,
  query,
  onQueryChange,
  loading,
  error,
  posts,
}) {
  return (
    <div>
      <h1>Posts</h1>

      <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
      <SearchBar query={query} onQueryChange={onQueryChange} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <PostList posts={posts} />
    </div>
  );
}
