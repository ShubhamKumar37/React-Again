import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { About, Github, Home, PageNotFound, User } from './components/index.js'
import { getData } from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />} />  
        <Route path='about/' element={<About />} >
          {/* <Route path='hello' element={<Home />} /> */}
        </Route>
      </Route>
      <Route path='user/' element={<User />}>
        <Route path=':userId' element={<User />}></Route>
      </Route>
      <Route loader={getData} path='/github' element={<Github />} ></Route>
      <Route path='*' element={<PageNotFound />} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
