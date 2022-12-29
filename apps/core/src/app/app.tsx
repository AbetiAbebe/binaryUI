// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CoreAuth } from '@binarycosmo/core/auth';
import { CoreHome } from '@binarycosmo/core/home';
import {LoginForm , RegistrationForm} from '@binarycosmo/core/auth';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<CoreHome />}></Route>
      <Route path="/" element={<CoreAuth />}>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegistrationForm />}></Route>
      </Route>
      <Route path="/" element={<CoreHome />} />
    </Routes>
    </BrowserRouter>
      <div />
    </>
  );
}

export default App;
