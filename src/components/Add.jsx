export default function Add({pname, setPname, price, setPrice, addItem, edit}) {
  return (
    <div className="container">
        <form>
            <input type="text" placeholder="Product name" value={pname} onChange={(e) => setPname(e.target.value)} /><br/><br/>
            <input type="text" placeholder="Product price" value={price} onChange={(e) => setPrice(e.target.value)} /><br/><br/>
            <button onClick={() => addItem()}>{edit ? 'edit' : 'add'}</button>
        </form>
    </div>
  )
}
