import classes from './Auth.module.css';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {authActions} from "../store/authStore.js";
const Auth = () => {

  const dispatch = useDispatch()
  // const isAuth = useSelector(state => state.auth.isAuth)
  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(authActions.login())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
