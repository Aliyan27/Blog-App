import "./yourblog.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/FirebaseAuth";
import { useState } from "react";

const Blog = () => {
  const [view, setView] = useState([]);
  const Viewblog = async () => {
    const querySnapshot = await getDocs(collection(db, "Blog"));
    let blogList = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    setView([...view, ...blogList]);
  };

  return (
    <div className="Blog">
      <div className="Container">
        <h2>Your blog</h2>

        <button type="submit" className="Login-bt" onClick={Viewblog}>
          Viewblog
        </button>
        {view &&
          view.map((item, index) => <div key={item.id}>{item.title}</div>)}
      </div>
    </div>
  );
};
export default Blog;
