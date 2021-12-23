import  React,{useState}from "react"
import"./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import validation from "../validation"

const Register =() =>{

    const history =useHistory()

    const[ user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const [errors,setErrors] = useState({});
    

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value

        })
        setErrors(validation(value))
    }

    const register = () =>{
        const { name , email , password , reEnterPassword } = user
        if(name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then(res => {
                alert(res.data.message)
            history.push("/login")})
        } else{
            alert("invalid input")
        }
        
    }

    return(
        <div className="register">
            {console.log("user",user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder=" Full Name" onChange={ handleChange}/>{errors.fullname && <p className="error">{errors.fullname}</p>}
        <input type="text"name="email" value={user.email} placeholder=" Email Address"onChange={ handleChange}/>{errors.email && <p className="error">{errors.email}</p>}
        <input type="password" name="password" value={user.password}placeholder=" Password"onChange={ handleChange}/>{errors.password && <p className="error">{errors.password}</p>}
        <input type="password" name="reEnterPassword" value={user.reEnterPassword}placeholder="Re-Enter Password"onChange={ handleChange}></input>
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <div className="button" onClick ={() => history.push("/login")}>login</div>
        </div>
    )
}

export default Register