import { Link } from "react-router-dom"

export default function Products({ products, removeItem, edit, setEdit, editItem, pname, setPname, price, setPrice, addItem, }) {
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
                                <Link to={`/single/${item.id}`}>
                                    <button>submit</button>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

