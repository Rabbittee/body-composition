import jwtDecode from 'jwt-decode';
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { User } from 'models/GoogleUser';
import { CONFIG } from '../../config';
import { useStore } from '../../store';

export function Login() {
  const { user, setUser } = useStore();

  const onSuccess = (credentialResponse: CredentialResponse) => {
    const decoded = jwtDecode<User>(credentialResponse.credential ?? '');
    setUser(decoded);
  };

  const onError = () => {
    console.info('Login failed.');
  };

  return (
    <GoogleOAuthProvider clientId={CONFIG.gcp.id}>
      {user ? (
        <div className="flex items-center space-x-2 rounded border border-teal p-1">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src={user.picture} alt={user.given_name} />
            </div>
          </div>
          <div>{user.given_name}</div>
        </div>
      ) : (
        <GoogleLogin onSuccess={onSuccess} onError={onError} />
      )}
    </GoogleOAuthProvider>
  );
}
