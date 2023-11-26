import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import { getStore, getUser } from './utils'
import { uid } from 'uid'
import Products from './components/Products'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'

function App() {
  const id = uid()

  const [login, setLogin] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  
  const [pname, setPname] = useState('')
  const [price, setPrice] = useState('')

  const [user, setUser] = useState(getUser('user'))
  const [products, setProducts] = useState(getStore('products'))

  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState(null)

  const handleSubmit = () => {
    const newUser = {id: id, name: name, email: email}
    setUser(newUser)
  }

  const addItem = () => {
    if(!pname && !price) {
      console.log('err');
    } else if(pname && edit) {
      setProducts(products.map((item) => {
        if(item.id === editId) {
          return {...item, name: pname, price: price}
        }
        return item
      }))
    } else {
      const newItem = {id: id, name: pname, price: price}
      setProducts([...products, newItem])
    }
  }

  const removeItem = (id) => {
    const remove = products.filter((item) => item.id !== id)
    setProducts(remove)
  }

  const editItem = (id) => {
    const editedItem = products.find((item) => item.id === id)
    setEdit(true)
    setEditId(id)
    setPname(editedItem.name)
    setPrice(editedItem.price)    
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('products', JSON.stringify(products))
  }, [user, products])

  return (
    <>
      <Header login={login} setLogin={setLogin} />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/add' element={
          <ProtectedRoute user={user}>
            <Products products={products} removeItem={removeItem} edit={edit} setEdit={setEdit} editItem={editItem} pname={pname} setPname={setPname} price={price} setPrice={setPrice} addItem={addItem}  />
          </ProtectedRoute>
        } />
        <Route path='/login' element={login && <Login name={name} setName={setName} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />} />
      </Routes>      
    </>
  )
}

export default App
