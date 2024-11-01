import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Footer from './components/Footer/Footer'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() =>
  {
    authService.getCurrentUser().then((userData) =>
    {
      if(userData) dispatch(login({userData}));
      else dispatch(logout());
    }).finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ?  (
    <div>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>

      <div>
        <Footer />
      </div>


    </div>
  ) : null;
}

export default App
