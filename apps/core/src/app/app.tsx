// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Login, Register } from '@binarycosmo/core/auth';
// import { Register } from '@binarycosmo/core/auth';
import { CoreHome } from '@binarycosmo/core/home';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CoreHome />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
      {/* <CoreHome /> */}
      <div />
    </>
  );
}

export default App;
