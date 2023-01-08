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
  Link,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import { CoreLayout, Dashboard } from '@binarycosmo/core/layout';
import { CheckOutFront, Shared } from '@binarycosmo/shared';
import { CoreCourses } from '@binarycosmo/core/courses';
import { ChakraProvider } from '@chakra-ui/react';


export function App() {
  return (
    <>
<ChakraProvider>
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
            <Route
              path="/dashboard/studList"
              element={<RegistrationForm />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      </ChakraProvider>
    </>
  );
}

export default App;
