import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav style={{ display: "flex", gap:12, marginBottom: 16}}>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/timer">Timer</Link>
        </nav>
    );
}