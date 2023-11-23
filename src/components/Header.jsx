export default function Header({login, setLogin}) {
  return (
    <div className="nav">
        <ul className="nav-list">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Contact us</li>
            <li>
                <button onClick={() => setLogin(!login)}>Sign in</button>
            </li>
        </ul>
    </div>
  )
}
