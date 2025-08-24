import { useParams } from "react-router-dom";

export default function Profile() {
  const { username } = useParams(); // dynamic part of URL

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">Profile Page</h2>
      <p className="text-gray-700">
        Hello, <span className="font-semibold">{username}</span>! 👋
      </p>
    </div>
  );
}
