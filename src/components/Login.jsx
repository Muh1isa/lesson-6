import { useGlobalContext } from "../context"

export default function Login() {
  const {name, setName, email, setEmail, handleSubmit} = useGlobalContext()
  
  return (
    <div className="login">
        <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  )
}
