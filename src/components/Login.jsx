export default function Login({name, setName, email, setEmail, handleSubmit}) {
  return (
    <div className="login">
        <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  )
}
