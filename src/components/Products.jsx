import { Link, useNavigate } from "react-router-dom"
import { useGlobalContext } from "../context"

export default function Products() {
    const { products, removeItem, edit, editItem, pname, setPname, price, setPrice, addItem, } = useGlobalContext()
    const navigate = useNavigate()

    return (

        <div className="container">
            <form>
                <input type="text" placeholder="Product name" value={pname} onChange={(e) => setPname(e.target.value)} /><br /><br />
                <input type="text" placeholder="Product price" value={price} onChange={(e) => setPrice(e.target.value)} /><br /><br />
                <button onClick={() => addItem()}>{edit ? 'edit' : 'add'}</button>
            </form>
            <div className="wrapper">
                {
                    products.map((item) => {
                        return (
                            <div key={item.id} className="card">
                                <h2>{item.name}</h2>
                                <p>{item.price}</p>
                                <button onClick={() => removeItem(item.id)}>remove</button><br /><br />
                                <button onClick={() => editItem(item.id)}>edit</button><br /><br />
                                <button onClick={() => navigate(`/single/${item.id}`)}>more</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

