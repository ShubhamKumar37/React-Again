import { useEffect, useState } from 'react'
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
    <div className="min-h-screen flex flex-col bg-[#1A202C] text-white">
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex flex-col justify-center p-4 min-h-[40rem]">
          <Outlet />
        </main>
      </div>

      <div className="">
        <Footer />
      </div>


    </div>
  ) : null;
}

export default App
