import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
