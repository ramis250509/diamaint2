import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PageNotFound from './pages/PageNotFound';
import MainC from './components/MainC';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<MainC />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;