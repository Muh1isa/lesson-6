import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";


export default function ProtectedRoute({children}) {
    const {user} = useGlobalContext()
    const navigate = useNavigate() 
    if(!user) return navigate('/')
    return children

}
