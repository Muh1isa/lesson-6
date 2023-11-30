import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Products from './components/Products'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Single from './components/Single'
import Error from './components/Error'
import { useGlobalContext } from './context'

function App() {
  const {login} = useGlobalContext()

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/add' element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        } />
        <Route path='/login' element={login && <Login />} />
        <Route path='/single/:id' element={<Single />} />
        <Route path='*' element={<Error />} />
      </Routes>      
    </>
  )
}

export default App
