import "./dashboard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/FirebaseAuth";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [blog, setBlog] = useState({
    title: "",
    blog: "",
  });
  const Dashboardcontent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBlog({ ...blog, [name]: value });
  };
  const Upload = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Blog"), {
        title: blog.title,
        blog: blog.blog,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="Dashboard">
      <div className="Container">
        <h2>Dashboard</h2>
        <label>Title</label>
        <input
          type="text"
          placeholder="Type your blog title"
          name="title"
          onChange={Dashboardcontent}
        />
        <label>Blog</label>
        <input
          type="text"
          placeholder="Type your blog"
          name="blog"
          onChange={Dashboardcontent}
        />
        <button className="Login-bt" type="submit" onClick={Upload}>
          Upload
        </button>
        <Link to={"/yourblog"} className="Link">
          Your Blog
        </Link>
      </div>
    </div>
  );
};
export default Dashboard;
