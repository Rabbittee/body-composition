import jwtDecode from 'jwt-decode';
import { CONFIG } from '../config';
import { useStore } from '../store';
import { gapi } from 'gapi-script';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function Information() {
  const { user, setUser } = useStore();

  const resGoogle = (res) => {
    const decord = jwtDecode(res.credential);
    setUser(decord);
  };

  const signOut = () => {
    if (gapi) {
      const auth2 = gapi.auth2.getAuthInstance();
      if (auth2 != null) {
        auth2.then(() => {
          auth2.signOut().then(() => {
            auth2.disconnect();
            setUser({});
          });
        });
      }
    }
  };

  return (
    <>
      {user ? (
        <button onClick={signOut}>Welcome, {user.name} | Sign Out</button>
      ) : (
        <GoogleLogin onSuccess={resGoogle} onError={resGoogle} className="g-signin2" />
      )}
    </>
  );
}

function Login() {
  return (
    <GoogleOAuthProvider clientId={CONFIG.gcp.id}>
      <Information />
    </GoogleOAuthProvider>
  );
}

export default Login;
