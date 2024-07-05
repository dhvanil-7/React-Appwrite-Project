import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from './components/index.jsx'
import {AllPosts, AddPost, EditPost, Home, Login, Post, Signup} from './pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPosts />
          </AuthLayout>
        )
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        )
      },
      {
        path: "/post/:slug",
        element: (
          <AuthLayout authentication>
            <Post />
          </AuthLayout>
        )
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='text-yellow-900'>OK</div>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
