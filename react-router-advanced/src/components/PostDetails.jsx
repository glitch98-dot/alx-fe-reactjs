import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const fetchPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
};

export default function PostDetails() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ["post", id],
    () => fetchPost(id),
    { enabled: !!id }
  );

  if (isLoading) return <p>Loading post...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">{data.title}</h2>
      <p className="text-gray-700">{data.body}</p>
    </div>
  );
}
