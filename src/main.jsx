import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import App from './components/routing/App.jsx';
import Home from './components/routing/Home.jsx';
import Mobiles from './components/routing/Mobiles.jsx';
import Laptops from './components/routing/Laptops.jsx';
import Desktops from './components/routing/Desktops.jsx';
import Users from './components/routing/Users.jsx';
import User from './components/routing/User.jsx';

const promise = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: '/mobiles', Component: Mobiles},
      { path: '/laptops', Component: Laptops},
      {
        path: '/desktops',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Desktops
      },
      {
        path: '/users',
        element: <Suspense fallback={<p>loading...</p>}> <Users promise={promise()} /> </Suspense>
      },
      {
        path: '/users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: User
      },
      {
        path: '/*',
        element: <h3>404! Page Not Found</h3>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
