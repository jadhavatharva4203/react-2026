export default function SearchBar({ query, onQueryChange }) {
    return (
      <div>
        <h2>Search</h2>
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search posts..."
        />
      </div>
    );
  }
  