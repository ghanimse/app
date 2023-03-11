import './App.module.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/sign_up/sign-up'
import SignIn from './components/sign_in/sign-in'
import NotFound from './components/not_found/not-found'
import Main from './components/main/main'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />

  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
