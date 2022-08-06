import { Navigate, Route, Routes } from 'react-router-dom';
import { Main } from './components/layouts';
import { Home } from './pages';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        {/* 主頁 */}
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
