export default function Single({products}) {
  return (
    <div className="container">
        <ul>
        {products.map((item) => {
            <li key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
            </li>
        })}
        </ul> // ishlata olmadim, products id ni olyapti xolos
    </div>
  )
}
