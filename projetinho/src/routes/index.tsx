import { Routes, Route } from 'react-router-dom';

import Dashboard from '../Pages';

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);

export default Routes;