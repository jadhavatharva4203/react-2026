import { useEffect, useState } from "react";

export default function Task1_fetch () {
  const[count, setCount] = useState(0)
  const[data, setData] = useState([])
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);

  function increment() {
    setCount(c => c + 1)
  }

  function decrement() {
    setCount(c => c - 1)
  }

  useEffect( () => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchPosts() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${count}`, { signal });
        if (!res.ok) throw new Error("Network response not ok");
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message || "Fetch failed");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();

    return () => {
      controller.abort();
    };
  }, [count]);

  return(
    <div>
    <h1>Count</h1>
    <p>{count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>

    {loading && <p>Loading...</p>}
    {error && <p style={{ color: "red"}}>{error}</p>}

    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
    </div>
  );
}