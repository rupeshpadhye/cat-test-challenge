import './App.css';
import GridPage from './pages/GridPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GridPage />
      </QueryClientProvider>
    </>
  );
}

export default App;
