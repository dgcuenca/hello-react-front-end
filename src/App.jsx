import { Routes, Route } from 'react-router-dom';
import GreetingPage from './pages/GreetingPage';

const App = () => (
    <Routes>
      <Route index element = {<GreetingPage />} />
    </Routes>      
);
export default App;