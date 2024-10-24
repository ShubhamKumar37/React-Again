import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import store from './store/store.js'
import {Provider} from "react-redux"
import { AddPost, AllPosts, EditPost, Home, Login, Post, Signup } from "./pages/index.js";
import Protected from './components/AuthLayout.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/login",
        element:(
          <Protected authentication={false}>
            <Login/>
          </Protected>
        )
      },
      {
        path:"/signup",
        element:(
          <Protected authentication={false}>
            <Signup/>
          </Protected>
        )
      },
      {
        path:"/all-posts",
        element:(
          <Protected >
            <AllPosts />
          </Protected>
        )
      },
      {
        path:"/add-post",
        element:(
          <Protected >
            <AddPost />
          </Protected>
        )
      },
      {
        path:"/edit-post/:slug",
        element:(
          <Protected >
            <EditPost />
          </Protected>
        )
      },
      {
        path:"/post/:slug",
        element:(
          <Protected >
            <Post />
          </Protected>
        )
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
