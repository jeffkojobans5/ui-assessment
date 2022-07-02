import { Routes , Route } from 'react-router-dom';
import { Landingpage , ProductDescpage } from './pages/index'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/product" element={<ProductDescpage />} />
    </Routes> 
  );
}

export default App;
