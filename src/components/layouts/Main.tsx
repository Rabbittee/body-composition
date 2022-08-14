import { Outlet } from 'react-router-dom';
import GithubCorner from 'react-github-corner';

function Main() {
  return (
    <>
      <GithubCorner href="https://github.com/Rabbittee/body-composition" />
      <div className="m-8">
        <Outlet />
      </div>
    </>
  );
}

export default Main;
