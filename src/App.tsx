import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Users from './Pages/Users'
import SupportCenter from './Pages/SupportCenter'
import Layouts from './layouts/RootLayouts'
import NotFound from './components/NotFound'

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layouts />}>
        <Route index path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/users' element={<Users />} />
        <Route path='/support-center' element={<SupportCenter />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  )
}

export default App
