import { useState, useEffect } from "react";

export default function App() {
  const[data, setData] = useState([])
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => {
      setData(data);
      setLoading(false)
    })
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}