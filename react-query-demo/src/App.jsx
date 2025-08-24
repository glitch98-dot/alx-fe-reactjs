import React, { useState } from "react";
import PostsComponent from "./components/PostsComponent";

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Query Demo</h1>
      <button
        onClick={() => setShowPosts(!showPosts)}
        style={{ marginBottom: "20px", padding: "6px 12px" }}
      >
        {showPosts ? "Hide Posts" : "Show Posts"}
      </button>
      {showPosts && <PostsComponent />}
    </div>
  );
}

export default App;
