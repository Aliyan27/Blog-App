import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../Firebase/FirebaseAuth";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [inputData, setInputdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const loginData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputdata({ ...inputData, [name]: value });
  };
  const LoginUser = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        inputData.email,
        inputData.password
      );
      console.log(user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="Login">
      <div className="Container">
        <h2>Login</h2>
        <label>Email</label>
        <input
          type="emails"
          placeholder="Type your email"
          name="email"
          onChange={loginData}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Type your password"
          name="password"
          onChange={loginData}
        />
        <button className="Login-bt" type="sub mit" onClick={LoginUser}>
          Login
        </button>
        <Link to={"/signup"} className="Link">
          Signup
        </Link>
      </div>
    </div>
  );
};
export default Login;
