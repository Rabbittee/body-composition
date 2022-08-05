import { CONFIG } from '../config';
import { useEffect, useRef, useState } from 'react';
import jwtDecode from 'jwt-decode';

function Login() {
  const [user, setUser] = useState({});
  const sighnIn = useRef();
  const googleID = window.google.accounts.id;

  const responseGoogle = (res) => {
    const jwtToken = jwtDecode(res.credential);
    setUser(jwtToken);
    sighnIn.current.hidden = true;
  };

  const sighnOut = () => {
    sighnIn.current.hidden = false;
    setUser({});
  };

  useEffect(() => {
    googleID.initialize({
      client_id: CONFIG.gcp.id,
      callback: responseGoogle,
    });

    googleID.renderButton(sighnIn.current, { theme: 'outline', size: 'large' });
  }, []);

  useEffect(() => {
    if (!Object.keys(user).length) googleID.prompt();
  }, [user]);

  return (
    <>
      <div className="sighnIn" ref={sighnIn} />
      {Object.keys(user).length !== 0 && (
        <button
          className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
          onClick={sighnOut}
        >
          Sighn Out
        </button>
      )}
      {user && (
        <div>
          <img src={user.picture} alt="user name" />
          <h3>{user.name}</h3>
        </div>
      )}
    </>
  );
}

export default Login;
