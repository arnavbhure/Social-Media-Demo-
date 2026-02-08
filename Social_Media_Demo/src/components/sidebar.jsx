import { useState } from "react";

const Sidebar = ({ setActiveSection }) => {
  const [active, setActive] = useState("home"); // for usestate of which element is active , default : home

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ width: "15%", height: "112.45vh", minWidth: "85px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className={"bi me-2"} width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link home ${active === "home" ? "active" : ""}`}
            style={{ color: "white" }}
            aria-current="page"
            onClick={() => {
              (setActive("home"), setActiveSection("home"));
            }}
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link text-white ${active === "createPost" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setActive("createPost");
              setActiveSection("createPost");
            }}
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>User</strong>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
