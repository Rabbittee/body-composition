import { Outlet } from 'react-router-dom';
import GithubCorner from 'react-github-corner';

function Main() {
  return (
    <>
      <GithubCorner href="https://github.com/Rabbittee/body-composition" direction="left" />
      <div className="m-12">
        <Outlet />
      </div>
    </>
  );
}

export default Main;
