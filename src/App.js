import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import SignInPage from './routes/auth/SignInPage';
import SignUpPage from './routes/auth/SignUpPage';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/SignIn" element={<SignInPage />} />
          <Route path="/SignUP" element={<SignUpPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
