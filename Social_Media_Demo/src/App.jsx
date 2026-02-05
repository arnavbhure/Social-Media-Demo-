import Header from "./components/header";
import Sidebar from "./components/sidebar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostContainer from "./components/postContainer";
import { useState } from "react";
import CreatePost from "./components/createPost";

function App() {
  const [activeSection, setActiveSection] = useState("home"); // for usstate for which section is active  , default : home

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex-container">
        <Sidebar setActiveSection={setActiveSection} />
        {activeSection === "home" && <PostContainer />}
        {activeSection === "createPost" && <CreatePost />}
      </div>
    </>
  );
}

export default App;
