import "./signup.css";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/FirebaseAuth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    recheckpassword: "",
  });
  const [error, setError] = useState("");

  const userInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const userSignup = async (e) => {
    e.preventDefault();
    if (data.password !== data.recheckpassword) {
      setError("Password is not same");
    } else {
      setError("Password is matched");
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.recheckpassword
        );
        console.log(user, "data");
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="Signup">
      <div className="Container">
        <h2>Signup</h2>
        <label>Name</label>
        <input
          type="text"
          placeholder="Type your name"
          name="name"
          onChange={userInput}
        />

        <label>Email</label>
        <input
          type="emails"
          placeholder="Type your email"
          name="email"
          onChange={userInput}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Type your password"
          name="password"
          onChange={userInput}
        />
        <label>PasswordRecheck</label>
        <input
          type="password"
          placeholder="Type your passwordagain"
          name="recheckpassword"
          onChange={userInput}
        />
        <h2>{error}</h2>

        <button className="Login-bt" type="submit" onClick={userSignup}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
