import React from 'react';

import GlobalStyle from './styles/global';
// import SignIn from './pages/SignIn';
import SingUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <SingUp />
    {/* <SignIn /> */}
  </>
);

export default App;
