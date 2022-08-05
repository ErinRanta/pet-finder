import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

function Login() {

  let { isAuthenticated, loginWithRedirect, error, logout } = useAuth0();
  console.log(isAuthenticated, loginWithRedirect, error, window.location.origin);

  return !isAuthenticated 
  ? <Button className="orange" onClick={loginWithRedirect}>Log in</Button>
  : <Button className="orange" onClick={logout}>Log out</Button>
}

export default Login;
