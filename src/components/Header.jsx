import { Link } from "react-router-dom";

export default function Header({login, setLogin}) {
  return (
    <div className="nav">
        <ul className="nav-list">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Contact us</li>
            <li>
              <Link to='/add'>
                Products
              </Link>
            </li>
            <li>
              <Link to='/login'>
                <button onClick={() => setLogin(!login)}>Sign in</button>
              </Link>
            </li>
        </ul>
    </div>
  )
}
