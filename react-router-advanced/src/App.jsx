import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PostsComponent from "./components/PostsComponent";
import PostDetails from "./components/PostDetails";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Layout />}>
            <Route index element={<PostsComponent />} />
            <Route path="posts/:id" element={<PostDetails />} />

      
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
