import "./App.css";
import PageRouter from "./config/PageRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PageRouter />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
