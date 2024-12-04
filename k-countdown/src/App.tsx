import { Home } from './pages/home';
import {Provider} from './components/ui/provider';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
