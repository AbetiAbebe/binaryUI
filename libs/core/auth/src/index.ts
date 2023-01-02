import LoginForm from './lib/components/loginForm/loginForm'
import RegistrationForm from './lib/components/registrationForm/registrationForm'
import RegistrationResult from './lib/components/registrationResult/registrationResult';
import AuthReducer  from './lib/state/authSlice'
import RegistrationReducer  from './lib/state/registrationSlice'

export { AuthReducer, RegistrationReducer, LoginForm, RegistrationForm, RegistrationResult };

export * from './lib/core-auth';
