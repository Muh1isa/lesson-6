import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import { getStore } from './utils'
import { uid } from 'uid'
import Add from './components/Add'
import Products from './components/Products'

function App() {
  const id = uid()

  const [login, setLogin] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  
  const [pname, setPname] = useState('')
  const [price, setPrice] = useState('')

  const [users, setUsers] = useState(getStore('user'))
  const [products, setProducts] = useState(getStore('product'))

  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState(null)

  const handleSubmit = () => {
    const newUser = {id: id, name: name, email: email}
    setUsers(newUser)
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
    localStorage.setItem('user', JSON.stringify(users))
    localStorage.setItem('product', JSON.stringify(products))
  }, [users, products])

  return (
    <>
      <Header login={login} setLogin={setLogin} />
      {login && <Login name={name} setName={setName} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />}
      <Add pname={pname} setPname={setPname} price={price} setPrice={setPrice} addItem={addItem} edit={edit}  />
      <Products products={products} removeItem={removeItem} edit={edit} setEdit={setEdit} editItem={editItem} />
    </>
  )
}

export default App
