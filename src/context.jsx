import { createContext, useContext, useEffect, useState } from "react";
import { uid } from "uid";
import { getStore, getUser } from "./utils";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
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
        <AppContext.Provider value={{
            login,
            setLogin, 
            name, 
            setName, 
            email,
            setEmail,
            pname,
            setPname,
            price,
            setPrice,
            user, 
            setUser,
            products,
            setProducts,
            edit,
            setEdit,
            editId,
            setEditId, 
            handleSubmit,
            addItem,
            removeItem,
            editItem,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}