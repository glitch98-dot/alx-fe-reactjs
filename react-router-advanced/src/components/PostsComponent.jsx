import { useQuery } from "react-query";
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

export default function PostsComponent() {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    staleTime: 5000,
    cacheTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p className="text-blue-500">Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Posts</h2>
        <button
          onClick={() => refetch()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isFetching ? "Refreshing..." : "Refetch Posts"}
        </button>
      </div>

      <ul className="space-y-2 max-h-[400px] overflow-y-auto border p-2 rounded">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-2 border rounded hover:bg-gray-50">
            <h3 className="font-medium">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
