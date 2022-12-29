import LoginForm from './lib/components/loginForm/loginForm'
import RegistrationForm from './lib/components/registrationForm/registrationForm'
import AuthReducer  from './lib/state/authSlice'
import { authSlice }  from './lib/state/authSlice'


export { AuthReducer, authSlice, LoginForm, RegistrationForm };

export * from './lib/core-auth';
