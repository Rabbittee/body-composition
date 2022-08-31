import { Router } from './Router';
import { useAnalytics } from './utils/GA/useAnalytics';

function App() {
  useAnalytics();

  return (
    <>
      <Router />
    </>
  );
}

export default App;
