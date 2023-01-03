// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CoreHome } from '@binarycosmo/core/home';
import {
  LoginForm,
  RegistrationForm,
  RegistrationResult,
  CoreAuth,
} from '@binarycosmo/core/auth';
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import { CoreLayout, Dashboard } from '@binarycosmo/core/layout';
import { Shared } from '@binarycosmo/shared';
import { CoreCourses } from '@binarycosmo/core/courses';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<CoreHome />}></Route>
          <Route path="/" element={<CoreAuth />}>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/register" element={<RegistrationForm />}></Route>
            <Route path="/result" element={<RegistrationResult />}></Route>
          </Route>
          <Route path="/checkout" element={<Shared />}></Route>

          <Route path="/" element={<CoreHome />} />
          <Route path="/dashboard" element={<CoreLayout />}>
            <Route path="/dashboard/home" element={<Dashboard />}></Route>
            <Route path="/dashboard/studList"  element={<RegistrationForm />}></Route>
            <Route path="/dashboard/course" element={<CoreCourses />} > </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <div />
    </>
  );
}

export default App;
