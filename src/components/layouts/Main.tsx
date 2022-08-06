import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div className="m-12">
      <Outlet />
    </div>
  );
}

export default Main;
