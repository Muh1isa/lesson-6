export default function Products({products, removeItem, edit, setEdit, editItem}) {
    return (
        <div className="container wrapper">
            {
                products.map((item) => {
                    return (
                        <div key={item.id} className="card">
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                            <button onClick={() => removeItem(item.id)}>remove</button><br /><br />
                            <button onClick={() => editItem(item.id)}>edit</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
