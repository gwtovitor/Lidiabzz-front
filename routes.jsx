import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './src/pages/Home/home';
import Brecho from './src/pages/brecho/brecho';


function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Brecho />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
