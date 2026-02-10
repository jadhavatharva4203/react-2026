import Counter from "../components/Counter";
import PostList from "../components/PostList";
import SearchBar from "../components/SearchBar";
import AddPostForm from "../components/AddPostForm";


export default function PostsPage({
  count,
  onIncrement,
  onDecrement,
  query,
  onQueryChange,
  loading,
  error,
  posts,
  onAddPost,
}) {
  return (
    <div>
        <h1>Posts</h1>
        <h2>Create a Post</h2>    
   

        <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
        <SearchBar query={query} onQueryChange={onQueryChange} />

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <AddPostForm onAddPost={onAddPost} />
        <PostList posts={posts} />
    </div>
  );
}
