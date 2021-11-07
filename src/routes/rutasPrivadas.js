import { Redirect, Route} from 'react-router';
import { useAuth } from '../utils/contexto';


const PrivateRoute = props => {
  const { login } = useAuth();
  return login ? (
    <Route {...props} />
  ) : (
    <Route>
        <Redirect to='/login'/>
    </Route>
  );
};

export default PrivateRoute;