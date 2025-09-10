import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ padding: 24, textAlign: "center" }}>
      <h2>404 — Not Found</h2>
      <p>The page you requested does not exist.</p>
      <p>
        <Link to='/'>Go back home</Link>
      </p>
    </div>
  );
}
